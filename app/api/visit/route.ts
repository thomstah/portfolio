import { createHash } from 'node:crypto';
import { NextResponse } from 'next/server';
import { COOLDOWN_MS, describeVisit, isBot, shouldAlert } from '../../../lib/visitAlert';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Visitors seen recently, kept in memory only. A restart or a second instance
 * lets the occasional duplicate through, which is a fair trade for having no
 * database and storing nothing about anybody.
 */
const seen = new Map<string, number>();

/**
 * Identifies a visitor for the cooldown without keeping their address. The IP
 * is hashed with a per-process salt and never stored or sent anywhere.
 */
const SALT = createHash('sha256').update(`${process.pid}-${Date.now()}`).digest('hex');

function visitorKey(ip: string, userAgent: string): string {
  return createHash('sha256').update(`${SALT}:${ip}:${userAgent}`).digest('hex').slice(0, 16);
}

export async function POST(request: Request) {
  const headers = request.headers;
  const userAgent = headers.get('user-agent') ?? '';
  // Cheapest check first, and it keeps the filter observable without a topic.
  if (isBot(userAgent)) return NextResponse.json({ ok: true, skipped: 'bot' });

  const topic = process.env.NTFY_TOPIC?.trim();
  // Without a topic there is nothing to notify, and that is not an error worth
  // failing a page view over.
  if (!topic) return NextResponse.json({ ok: true, skipped: 'not configured' });

  const ip =
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headers.get('x-real-ip') ??
    'unknown';

  if (!shouldAlert(visitorKey(ip, userAgent), seen)) {
    return NextResponse.json({ ok: true, skipped: 'cooldown' });
  }

  const body = (await request.json().catch(() => ({}))) as { referrer?: string; path?: string };

  const message = describeVisit({
    referer: body.referrer || headers.get('referer'),
    userAgent,
    // CloudFront adds these in front of Amplify; absent locally, which is fine.
    city: headers.get('cloudfront-viewer-city'),
    country: headers.get('cloudfront-viewer-country'),
  });

  try {
    await fetch(`https://ntfy.sh/${topic}`, {
      method: 'POST',
      headers: {
        Title: 'Portfolio visit',
        Tags: 'eyes',
        Click: 'https://portfolio.thommyxay.com',
      },
      body: `${message}${body.path && body.path !== '/' ? ` · ${body.path}` : ''}`,
    });
  } catch {
    // A notification that fails to send must never break the page.
  }

  return NextResponse.json({ ok: true, cooldownMs: COOLDOWN_MS });
}

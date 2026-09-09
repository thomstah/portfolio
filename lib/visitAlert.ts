/**
 * Deciding whether a page view is worth a phone notification.
 *
 * Most traffic to a public site is crawlers, and a real visitor reloads or
 * navigates back. Alerting on all of it means muting the alerts within a day,
 * so the filtering here is the feature rather than an optimisation.
 */
const BOT_MARKERS = [
  'bot', 'crawler', 'spider', 'slurp', 'headless', 'lighthouse', 'preview',
  'curl', 'wget', 'python-requests', 'axios', 'httpx', 'go-http-client',
  'facebookexternalhit', 'embedly', 'quora link preview', 'whatsapp',
  'monitoring', 'pingdom', 'uptime', 'scrapy', 'phantomjs',
];

export function isBot(userAgent: string | undefined | null): boolean {
  // A real browser always sends one, so its absence is the strongest signal.
  if (!userAgent) return true;
  const agent = userAgent.toLowerCase();
  return BOT_MARKERS.some((marker) => agent.includes(marker));
}

export const COOLDOWN_MS = 30 * 60 * 1000;

/**
 * One alert per visitor per cooldown window. The store is a plain map held in
 * memory: nothing is persisted, so at worst a restart lets one extra alert
 * through, which is a better failure than a database to look after.
 */
export function shouldAlert(
  visitorKey: string,
  seen: Map<string, number>,
  now: number = Date.now(),
): boolean {
  for (const [key, at] of seen) {
    if (now - at >= COOLDOWN_MS) seen.delete(key);
  }

  const last = seen.get(visitorKey);
  if (last !== undefined && now - last < COOLDOWN_MS) return false;

  seen.set(visitorKey, now);
  return true;
}

function browserOf(userAgent: string): string {
  if (/edg\//i.test(userAgent)) return 'Edge';
  if (/opr\/|opera/i.test(userAgent)) return 'Opera';
  if (/firefox/i.test(userAgent)) return 'Firefox';
  if (/chrome|crios/i.test(userAgent)) return 'Chrome';
  if (/safari/i.test(userAgent)) return 'Safari';
  return 'a browser';
}

function platformOf(userAgent: string): string {
  if (/iphone/i.test(userAgent)) return 'iPhone';
  if (/ipad/i.test(userAgent)) return 'iPad';
  if (/android/i.test(userAgent)) return 'Android';
  if (/mac os x|macintosh/i.test(userAgent)) return 'Mac';
  if (/windows/i.test(userAgent)) return 'Windows';
  if (/linux/i.test(userAgent)) return 'Linux';
  return '';
}

/**
 * The notification text. Referrer first, because "someone came from LinkedIn"
 * is the part worth reading on a lock screen. No IP address ever appears: it is
 * personal data and adds nothing a location does not already say.
 */
export function describeVisit(visit: {
  referer?: string | null;
  userAgent?: string | null;
  city?: string | null;
  country?: string | null;
}): string {
  const parts: string[] = [];

  if (visit.referer) {
    try {
      parts.push(`from ${new URL(visit.referer).hostname.replace(/^www\./, '')}`);
    } catch {
      parts.push('from an unknown link');
    }
  } else {
    parts.push('direct visit');
  }

  const place = [visit.city, visit.country].filter(Boolean).join(', ');
  if (place) parts.push(place);

  if (visit.userAgent) {
    parts.push([browserOf(visit.userAgent), platformOf(visit.userAgent)].filter(Boolean).join(' on '));
  }

  return parts.join(' · ');
}

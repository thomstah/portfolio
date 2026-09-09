import { describe, expect, it } from 'vitest';
import { describeVisit, isBot, shouldAlert } from './visitAlert';

describe('isBot', () => {
  it.each([
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Mozilla/5.0 (compatible; bingbot/2.0)',
    'facebookexternalhit/1.1',
    'Twitterbot/1.0',
    'curl/8.4.0',
    'python-requests/2.31.0',
    'Mozilla/5.0 (X11; Linux x86_64) HeadlessChrome/120.0.0.0',
    'Chrome-Lighthouse',
  ])('recognises %s as automated', (agent) => {
    expect(isBot(agent)).toBe(true);
  });

  it('treats a missing user agent as automated', () => {
    expect(isBot(undefined)).toBe(true);
    expect(isBot('')).toBe(true);
  });

  it.each([
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 Version/17.5 Mobile/15E148 Safari/604.1',
  ])('lets a real browser through', (agent) => {
    expect(isBot(agent)).toBe(false);
  });
});

describe('shouldAlert', () => {
  const seen = new Map<string, number>();
  const now = 1_000_000;

  it('alerts on a visitor it has not seen', () => {
    expect(shouldAlert('visitor-a', seen, now)).toBe(true);
  });

  it('stays quiet when the same visitor reloads', () => {
    const store = new Map([['visitor-a', now]]);
    expect(shouldAlert('visitor-a', store, now + 60_000)).toBe(false);
  });

  it('alerts again once the cooldown has passed', () => {
    const store = new Map([['visitor-a', now]]);
    expect(shouldAlert('visitor-a', store, now + 31 * 60_000)).toBe(true);
  });

  it('alerts for a different visitor during another visitor cooldown', () => {
    const store = new Map([['visitor-a', now]]);
    expect(shouldAlert('visitor-b', store, now + 60_000)).toBe(true);
  });

  it('forgets stale visitors so the map cannot grow without bound', () => {
    const store = new Map([['old', now], ['recent', now + 29 * 60_000]]);
    shouldAlert('new', store, now + 31 * 60_000);
    expect(store.has('old')).toBe(false);
    expect(store.has('recent')).toBe(true);
  });
});

describe('describeVisit', () => {
  it('names the referrer, which is the useful part', () => {
    const message = describeVisit({
      referer: 'https://www.linkedin.com/in/thommyxay/',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/131.0.0.0 Safari/537.36',
      city: 'Dallas',
      country: 'US',
    });
    expect(message).toContain('linkedin.com');
    expect(message).toContain('Dallas');
  });

  it('says direct when there is no referrer', () => {
    expect(describeVisit({ userAgent: 'Chrome/131' })).toContain('direct');
  });

  it('never includes an IP address', () => {
    const message = describeVisit({
      referer: 'https://example.com',
      userAgent: 'Chrome/131',
      city: 'Dallas',
      country: 'US',
      ip: '203.0.113.42',
    } as never);
    expect(message).not.toContain('203.0.113');
  });

  it('reports the browser and platform in plain words', () => {
    const message = describeVisit({
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) Version/17.5 Mobile Safari/604.1',
    });
    expect(message).toContain('Safari');
    expect(message).toContain('iPhone');
  });
});

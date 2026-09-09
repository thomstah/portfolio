'use client';

import { useEffect } from 'react';

/**
 * Tells the server a real person opened the page.
 *
 * Fires once per browser session so a reload or a return visit in the same tab
 * stays quiet, and requires JavaScript to run, which already filters the
 * simpler crawlers before the server-side check sees them.
 */
export function VisitBeacon() {
  useEffect(() => {
    const KEY = 'visit-reported';
    try {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, '1');
    } catch {
      // Private browsing can refuse storage; reporting twice is harmless.
    }

    void fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ referrer: document.referrer, path: window.location.pathname }),
      keepalive: true,
    }).catch(() => {
      // Never let analytics surface as an error to a visitor.
    });
  }, []);

  return null;
}

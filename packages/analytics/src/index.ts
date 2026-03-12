/**
 * Simple analytics abstraction (logs to console; can be swapped for Segment/GTM/GA later).
 */
export type TrackPayload = Record<string, unknown>;

export function track(eventName: string, payload?: TrackPayload): void {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('[analytics] track', eventName, payload ?? {});
  }
}

export type IdentifyTraits = Record<string, unknown>;

export function identify(userId: string, traits?: IdentifyTraits): void {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('[analytics] identify', userId, traits ?? {});
  }
}

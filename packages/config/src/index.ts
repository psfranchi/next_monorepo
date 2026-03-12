export const PLATFORM_NAME = 'Marketing Platform';

export const DEFAULT_LOCALE = 'en-US';

export const FEATURE_FLAGS = {
  analytics: true,
  forms: true,
  contentDates: true,
  apiData: true,
} as const;

export type FeatureFlags = typeof FEATURE_FLAGS;

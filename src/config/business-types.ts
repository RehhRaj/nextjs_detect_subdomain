// config/business-types.ts
export const VALID_BUSINESS_TYPES = ['school', 'restaurant', 'salon'] as const;

export type BusinessType = typeof VALID_BUSINESS_TYPES[number];

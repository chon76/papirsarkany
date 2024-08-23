import { createEnv} from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DATABASE_URL_UNPOOLED: z.string().url(),
    
    VENDOR_EMAIL_ADDRESS: z.string().email(),
    SENDGRID_API_KEY: z.string(),
    
    SITE_URL: z.string().url(),
    
    SANITY_API_TOKEN: z.string().optional(),
    
    FOXPOST_API_URL: z.string().url(),
    FOXPOST_API_USERNAME: z.string(),
    FOXPOST_API_PASSWORD: z.string(),
    FOXPOST_API_KEY: z.string(),
    
    VERCEL_ENV: z.enum(['preview', 'production', 'development']).optional(),
  },
  client: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
    NEXT_PUBLIC_SANITY_DATASET: z.string(),
    NEXT_PUBLIC_SANITY_API_VERSION: z.string().optional(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_URL_UNPOOLED: process.env.DATABASE_URL_UNPOOLED,
    
    VENDOR_EMAIL_ADDRESS: process.env.VENDOR_EMAIL_ADDRESS,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    
    SITE_URL: process.env.SITE_URL,
    
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    
    // LATER add sandbox cred (blocked by lack of Foxpost sandbox mode)
    FOXPOST_API_URL: process.env.FOXPOST_API_URL || 'https://foxpost.hu/',
    FOXPOST_API_USERNAME:
    process.env.FOXPOST_API_USERNAME || 'missing-sandbox-api-username',
    FOXPOST_API_PASSWORD:
    process.env.FOXPOST_API_PASSWORD || 'missing-sandbox-api-password',
    FOXPOST_API_KEY: process.env.FOXPOST_API_KEY || 'missing-sandbox-api-key',
    
    VERCEL_ENV: process.env.VERCEL_ENV,
  },
  skipValidation: Boolean(process.env.CI),
});

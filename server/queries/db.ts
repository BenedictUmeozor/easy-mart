'use server';

import { db } from '@/lib/drizzle';
import { unstable_cache } from 'next/cache';

export const getUser = unstable_cache(
  async (email: string) => {
    return await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });
  },
  ['user'],
  { revalidate: 3600, tags: ['user'] }
);

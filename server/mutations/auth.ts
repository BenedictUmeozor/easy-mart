'use server';

import { db } from '@/lib/drizzle';
import { users } from '@/lib/drizzle/schema';
import type { signupSchema } from '@/lib/zod';
import type { z } from 'zod';
import bcrypt from 'bcryptjs';

type SignupData = z.infer<typeof signupSchema>;

export const createUser = async (values: SignupData) => {
  try {
    const exists = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, values.email),
    });
    if (exists) throw new Error('User already exists');
    const hashedPassword = await bcrypt.hash(values.password, 10);
    values.password = hashedPassword;
    await db.insert(users).values(values);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

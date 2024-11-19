'use server';

import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/drizzle';
import type { profileSchema } from '@/lib/zod';
import { redirect } from 'next/navigation';
import type { z } from 'zod';
import bcrypt from 'bcryptjs';
import { users } from '@/lib/drizzle/schema';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

export const editProfile = async ({
  address,
  name,
  phoneNumber,
  currentPassword,
  newPassword,
}: z.infer<typeof profileSchema>) => {
  const session = await getAuthSession();

  if (!session || !session.user) return redirect('/login');

  try {
    const email = session.user.email!;

    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });

    if (!user) return redirect('/login');

    if (currentPassword && newPassword) {
      if (!user.password) {
        throw new Error('User does not have a password');
      }
      const isCorrectPassword = await bcrypt.compare(
        currentPassword,
        user.password!
      );

      if (!isCorrectPassword) {
        throw new Error('Incorrect password');
      }
    }

    const hashedPassword = newPassword
      ? await bcrypt.hash(newPassword, 10)
      : undefined;

    await db
      .update(users)
      .set({
        address,
        name,
        phoneNumber,
        ...(hashedPassword && { password: hashedPassword }),
      })
      .where(eq(users.email, email));

    revalidateTag('user');
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

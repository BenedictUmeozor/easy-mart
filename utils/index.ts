import { revalidateRoutes } from '@/server/queries';
import { signOut } from 'next-auth/react';

export const logout = () => {
  signOut().then(() => revalidateRoutes());
};

import NextAuth, { getServerSession, type NextAuthOptions } from 'next-auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './drizzle';
import GoogleProvider from 'next-auth/providers/google';
import { accounts, users } from './drizzle/schema';
import type { SessionWithUserId } from '@/interfaces';

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.userId = user.id;
      return token;
    },
    async session({ session, token }) {
      (session?.user as SessionWithUserId).userId = token.userId as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    newUser: '/account',
  },
  // debug: process.env.NODE_ENV === 'development',
};

export const getSession = async () => await getServerSession(authOptions);

export default NextAuth(authOptions);

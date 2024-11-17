declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    NEXTAUTH_SECRET: string;
    NEXT_BASE_URL: string;
    NEXT_PUBLIC_BASE_URL: string;
    NEXTAUTH_URL_INTERNAL: string;
    NEXTAUTH_URL: string;
    DATABASE_URL: string;
  }
}

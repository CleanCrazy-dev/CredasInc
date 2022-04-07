declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_AUTH0_ISSUER: string;
      NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
      AUTH0_CLIENT_SECRET: string;
      TRUST_SERVER_CERTIFICATE: string;
    }
  }
}

export {};

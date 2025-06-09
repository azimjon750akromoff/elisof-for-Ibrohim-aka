declare module "next-auth" {
  interface Session {
    user: {
      data: {
        access_token: string;
        refresh_token: string;
      };
    };
  }
}

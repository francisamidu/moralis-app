import NextAuth from "next-auth";
import { MoralisNextAuthProvider } from "@moralisweb3/next";

export default NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [MoralisNextAuthProvider()],
  // adding user info to the user session
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session(session, user) {
      (session as { user: unknown }).user = user;
      return session;
    },
    async redirect(url, baseUrl) {
      console.log(baseUrl)
      return `${baseUrl}/user`;
    },
  },
});

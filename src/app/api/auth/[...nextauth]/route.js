import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
  provider: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret : "ubjmhd9P8Y2vrmwrLWp8+0DyOGpp9NAIlcQPpupGH4I="
};

const handler = NextAuth(authOption)

export { handler as GET, handler as POST } ;

// const handler = NextAuth({
//   provider: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   secret: "ubjmhd9P8Y2vrmwrLWp8+0DyOGpp9NAIlcQPpupGH4I="
// });

// export { handler as GET, handler as POST };

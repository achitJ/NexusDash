import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
    throw new Error(
        "Missing env variables GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET"
    );
}

const handler = NextAuth({

    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret
        })
    ],
    secret: process.env.SECRET,
})

export { handler as GET, handler as POST }
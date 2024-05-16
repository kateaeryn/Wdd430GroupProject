import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUser } from "./app/lib/data";
import bcrypt from "bcryptjs";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                console.log("authorize called"); // Add console.log statement
                const user = await findUser(credentials?.email || "");
                if (user) {
                    const isValid = await bcrypt.compare(
                        credentials?.password || "",
                        user.hashedPassword
                    );
                    if (isValid) {
                        console.log("User authenticated"); // Add console.log statement
                        return {
                            id: user.id.toString(),
                            name: user.name,
                            email: user.email,
                            image: user.image,
                        };
                    }
                }
                console.log("User not authenticated"); // Add console.log statement
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            console.log("jwt called"); // Add console.log statement
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            console.log("session called"); // Add console.log statement
            if (token?.id) {
                session.user.id = token.id;
            }
            return session;
        },
    },
});

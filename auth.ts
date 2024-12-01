// pages/api/auth/[...nextauth].js
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { connectDb } from './lib/db';
import UserModel from './models/user_model';


export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt', // Use JWT for session management
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        Credentials({
            credentials: {
                email: { type: "email" },
                password: {  type: "password" },
            },
            authorize: async (credentials) => {
                const email = credentials.email as string 
                const password = credentials.password as string 

                console.log("Email: ", email);
                console.log("Password: ", password);

                try {
                    await connectDb();

                    const user = await UserModel.findOne({ email, provider: "credentials" }).select("+password");
                    if (!user) {
                        console.log("User not found");
                        return null;
                    }

                    const isMatch = await bcrypt.compare(password, user.password);
                    if (!isMatch) {
                        console.log("Invalid password");
                        return null;
                    }
                    
                    return user;
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            await connectDb();
            const existingUser = await UserModel.findOne({ email: user.email, provider: account?.provider });
            if (!existingUser) {
                await UserModel.create({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    provider: account?.provider,
                    providerId: account?.providerAccountId,
                   
                    
                });
            }
            return true;
        },
        async session({ session }) {
            if (session.user?.email) {
                const dbUser = await UserModel.findOne({ email: session.user.email });
                if (dbUser) {
                    session.user.id = dbUser._id.toString();
                } else {
                    console.warn("User not found in the database");
                }
            }
            return session;
        },
    },
});
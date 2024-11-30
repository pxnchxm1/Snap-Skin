"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

interface User {
    email: string;
    id: string;
    image?: string;
    name: string;
    pastHistory: Array<{
        id: string;
        productName: string;
        materialName: string;
        modelOrSize: string;
        productColor: string;
        productImage: string;
        _id: string;
    }>;
}

interface SessionData {
    user: User;
    setSession: React.Dispatch<React.SetStateAction<any>>;
}

interface Session {
    id: string;
    username: string;
    image?: string;
    email: string;
    pastHistory: Array<{
        id: string;
        productName: string;
        materialName: string;
        modelOrSize: string;
        productColor: string;
        productImage: string;
        _id: string;
    }>;
}

const InitialValues: SessionContextType = {
    session: null,
    setSession: () => {},
    fetchSession: async () => {}, // Ensure this is an async function
};

interface SessionContextType {
    session: Session | null;
    setSession: React.Dispatch<React.SetStateAction<any>>;
    fetchSession: () => Promise<void>; // Declare fetchSession as returning Promise<void>
}

export const SessionContext = createContext<SessionContextType>(InitialValues);

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null);

    const fetchSession = async (): Promise<void> => { // This should return a Promise<void>
        try {
            const response = await fetch("/api/session");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const sessionData: SessionData = await response.json();

            const session: Session = {
                username: sessionData.user.name,
                image: sessionData.user.image || undefined,
                id: sessionData.user.id,
                email: sessionData.user.email,
                pastHistory: sessionData.user.pastHistory,
            };

            setSession(session);
        } catch (error) {
            console.log("Error fetching session data:", error);
        }
    };

    useEffect(() => {
        fetchSession(); // This will run on mount and fetch the session data
    }, []);

    return <SessionContext.Provider value={{ session, setSession, fetchSession }}>{children}</SessionContext.Provider>;
};

export default SessionProvider;

"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

interface User {
    email: string;
    id: string;
    image?: string;
    name: string;
}

interface SessionData {
    user: User;
    setSession:React.Dispatch<React.SetStateAction<any>>;
}

interface Session {
    id: string;
    username: string;
    image?: string;
    email: string;
}

const InitialValues: SessionContextType = {
    session: null,
    setSession: () => {},
};

interface SessionContextType {
    session: Session | null;
    setSession:React.Dispatch<React.SetStateAction<any>>;
}

export const SessionContext = createContext<SessionContextType>(InitialValues);

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const [session, setSession] = useState<Session | null>(null);

    const fetchSession = async (): Promise<void> => {
        try {
            const response = await fetch("/api/session");
            if (!response.ok) {
                throw new Error("Network Response was not ok");
            }
            const sessionData: SessionData = await response.json();

            const session: Session = {
                username: sessionData.user.name,
                image: sessionData.user.image || undefined,
                id: sessionData.user.id,
                email: sessionData.user.email,
            };
            setSession(session);
        } catch (error) {
            console.log("Error fetching session data:", error);
        }
    };

   
    useEffect(() => {
        fetchSession();
    }, []);

    return <SessionContext.Provider value={{ session, setSession }}>{children}</SessionContext.Provider>;
};

export default SessionProvider;
"use client";

import { logout } from "@/app/action";
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
    handleLogout: () => void;
}

interface Session {
    id: string;
    username: string;
    image?: string;
    email: string;
}

const IntitialValues: SessionContextType = {
    session: null,
    handleLogout: async () => {},
};

interface SessionContextType {
    session: Session | null;
    handleLogout: () => Promise<void>;
}

export const SessionContext = createContext<SessionContextType>(IntitialValues);

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

    // const handleLogout = async (): Promise<void> => {
    //     console.log("logging out.....");
    //     await logout();
    //     console.log("Logged out, resetting session.");
    //     setSession(null);
    //     router.push("/");
    // };
    const handleLogout = async (): Promise<void> => {
        try {
            console.log("logout started")
            await logout();
            console.log("logged out");
            setSession(null);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };
    useEffect(() => {
        fetchSession();
    }, []);

    return <SessionContext.Provider value={{ session, handleLogout }}>{children}</SessionContext.Provider>;
};

export default SessionProvider;
"use client";

import { Product } from "@/models/product_model";
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
    setSession: React.Dispatch<React.SetStateAction<any>>;
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
    fetchSession: async () => {}, // Ensure this is an async function
    products : null,
    setProducts: () => {},
};

interface SessionContextType {
    session: Session | null;
    setSession: React.Dispatch<React.SetStateAction<any>>;
    fetchSession: () => Promise<void>; // Declare fetchSession as returning Promise<void>
    products : Product[] |null;
    setProducts : React.Dispatch<React.SetStateAction<Product[] | null>>;
}

export const SessionContext = createContext<SessionContextType>(InitialValues);

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null);
    const [products,setProducts] = useState< Product[] | null>(null);

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
            };

            setSession(session);
        } catch (error) {
            console.log("Error fetching session data:", error);
        }
    };
    const fetchProducts = async () :Promise<void> =>{
        try {
            const response = await fetch("/api/getProduct",{
                method : "GET",
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
                }
            const data = await response.json();
            setProducts(data.products);
            
 
        } catch (error) {
            console.log("Error fetching products data:", error);
        }
    }

    useEffect(() => {
        fetchSession(); // This will run on mount and fetch the session data
        fetchProducts();
    }, []);

    return <SessionContext.Provider value={{ session, setSession, fetchSession,products,setProducts}}>{children}</SessionContext.Provider>;
};

export default SessionProvider;

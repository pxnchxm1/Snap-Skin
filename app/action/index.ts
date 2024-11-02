"use server"
import { signIn, signOut } from "@/auth"

export const login = async(formData : FormData) : Promise<void>=>{
    const action = formData.get('action') as string    // google as string await signIn(action,{redirectTo:"/"})
    await signIn(action,{redirectTo : "/"})
}

export const logout = async (): Promise<void> => {
    await signOut({ redirectTo:"/" }); // Redirects to home page after logout
};


"use client";

import "@lottiefiles/lottie-player";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

const Login = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
        <section className="flex flex-col w-full min-h-screen items-center justify-center">
        <h1 className=" text-purple-700 font-semibold text-6xl items-center" >Welcome back</h1>
        <div className="flex flex-row justify-between  items-center py-4 gap-8 ">
        {isClient ? (
                <lottie-player autoplay loop mode="normal" src="https://lottie.host/805ddb78-d659-415d-8d9f-98555828a259/mJ2DtvbSOa.json" style={{ width: "450px", height: "500px" }}></lottie-player>
            ) : null}
           <div className="flex flex-col items-center justify-center gap-2">
           <form className=" justify-center items-center flex flex-col  ">
              
              <div className="flex flex-col justify-center items-center dark:text-white text-black gap-6 w-[300px] ">
              <input className="border rounded-full px-4 py-3  border-black dark:border-white w-full " type="email" placeholder="Email"/>
              <input className="border rounded-full px-4 py-3 border-black dark:border-white w-full " type="password" placeholder="Password"/> 
              <button className="text-2xl font-normal">Login</button>
              <span className=" text-purple-700 ">or</span>
              </div>
            </form>
            <form className=" justify-center items-center flex flex-row gap-6 ">
            <button type="submit"><Image src="/github.svg" alt="google" width={45} height={45} /></button>
            <button type="submit"><Image src="/google.svg" alt="google" width={45} height={45} /></button>
           
            </form>
           </div>
            

        </div>
        <h5 className=" text-black dark:text-white font-semibold text-xl items-center mt-2" >Dont have an account ? Create a new account .  <Link href="/signup">
        <span className=" text-purple-700 underline">Register </span></Link></h5>
        </section>
            
        </>
    );
};

export default Login;
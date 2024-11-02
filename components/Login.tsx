"use client";

import { login } from "@/app/action";
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
        <section className="flex flex-col w-full min-h-screen items-center justify-center md:gap-10 ">
        <h1 className=" text-purple-700 font-semibold text-4xl lg:text-5xl xl:text-6xl items-center mb-5 " >Welcome back</h1>
        <div className="flex flex-row justify-between  items-center py-4 gap-8 ">
        <div className="hidden lg:flex">
        {isClient ? (
                <lottie-player autoplay loop mode="normal" src="https://lottie.host/805ddb78-d659-415d-8d9f-98555828a259/mJ2DtvbSOa.json" style={{ width: "380px", height: "380px" }}></lottie-player>
            ) : null}
        </div>
           <div className="flex flex-col items-center justify-center gap-2">
           <form className=" justify-center items-center flex flex-col  ">
              
              <div className="flex flex-col justify-center items-center dark:text-white text-white  gap-6 w-[270px] lg:w-[300px]  ">
              <input className="border rounded-full px-4 py-3  border-black dark:border-white w-full " type="email" placeholder="Email"/>
              <input className="border rounded-full px-4 py-3 border-black dark:border-white w-full " type="password" placeholder="Password"/> 
              <button className="text-xl  dark:bg-purple-700 bg-black rounded-full font-normal w-full py-1">Login</button>
              <span className=" dark:text-white text-purple-700 ">or</span>
              </div>
            </form>
            <form className=" justify-center items-center flex flex-row gap-6 " action={login}>
            <button type="submit" name="action" value="github"><Image src="/github.svg" alt="github" width={40} height={40} /></button>
            <button type="submit" name="action" value="google"><Image src="/google.svg" alt="google" width={40} height={40}  /></button>
           
            </form>
           </div>
            

        </div>
        <div className=" w-[500px] flex items-center justify-center flex-row">
        <h4 className=" text-slate-600 font-semibold text-sm md:text-lg items-center justify-center mt-2" >Dont have an account ? Create a new account .  <Link href="/signup">
        <span className=" text-purple-700 underline">Register </span></Link></h4>
        </div>
        
        </section>
            
        </>
    );
};

export default Login;
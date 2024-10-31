"use client";

import "@lottiefiles/lottie-player";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

const SignUp = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
        <section className="flex flex-col w-full min-h-screen items-center justify-center">
        <h1 className=" text-purple-700 font-semibold text-6xl items-center" >Welcome</h1>
        <div className="flex flex-row justify-between  items-center py-4 gap-8 ">
        {isClient ? (
                <lottie-player autoplay loop mode="normal" src="https://lottie.host/828954c3-3a27-4c77-9763-8149d89ebba3/oPqYPkYIBT.json" style={{ width: "450px", height: "500px" }}></lottie-player>
            ) : null}
        <div className="flex flex-col items-center justify-center gap-2">
            <form className=" justify-center items-center flex flex-col  ">
                <div className="flex flex-col justify-center items-center dark:text-white text-black gap-6 w-[300px] ">
                    <input className="border rounded-full px-4 py-3  border-black dark:border-white w-full " type="email" placeholder="Email"/>
                    <input className="border rounded-full px-4 py-3 border-black dark:border-white w-full " type="password" placeholder="Password"/> 
                    <button className="text-2xl font-normal">Register</button>  <span className=" text-purple-700 ">or</span>
                </div>
            </form>
            <form className=" justify-center items-center flex flex-row gap-6 ">
                <button type="submit"><Image src="/github.svg" alt="google" width={45} height={45} /></button>
                <button type="submit"><Image src="/google.svg" alt="google" width={45} height={45} /></button>
            </form>
           </div>
            

        </div>
        <h5 className=" text-black dark:text-white font-semibold text-xl items-center mt-2" >
            Already have an account ? 
            <Link href="/login">
                <span className=" text-purple-700 underline"> Sign In </span></Link>
        </h5>
        </section>
            
        </>
    );
};

export default SignUp;
"use client";

// import "@lottiefiles/lottie-player";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// const LottiePlayer = dynamic(() => import('@lottiefiles/lottie-player'), { ssr: false });

const SignUp = () => {
    const [isClient, setIsClient] = useState(false);
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const router = useRouter();

    const handleRegister = async(e : React.FormEvent)=>{
        e.preventDefault();
        try{
            const response = await fetch('/api/credentialsignup',
                {method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({email,password})
                }
            );
            if(response.ok){
                console.log("Registered user successfully")
                router.push('/');
            }

        }catch(Err){
            console.log(Err);
        }
    }

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
        <section className="flex flex-col w-full min-h-screen items-center justify-center md:gap-10">
        <h1 className="text-purple-700 font-semibold text-4xl lg:text-5xl xl:text-6xl items-center mb-5" >Welcome</h1>
        <div className="flex flex-row justify-between  items-center py-4 gap-8 ">
        <div className="hidden lg:flex">
        {isClient ? (
                // <lottiePlayer autoplay
                //                 loop
                //                 mode="normal"
                //                 src="https://lottie.host/828954c3-3a27-4c77-9763-8149d89ebba3/oPqYPkYIBT.json"
                //                 style={{ width: "380px", height: "380px" }}
                //             ></lottiePlayer>
                <></>
            ) : null}
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
            <form onSubmit={handleRegister}  className=" justify-center items-center flex flex-col  ">
                <div className="flex flex-col justify-center items-center  gap-6 w-[270px] lg:w-[300px]   ">
                    <input onChange={(e)=>setEmail(e.target.value)} className="border rounded-full px-4 py-3  border-black dark:border-white w-full" type="email" placeholder="Email"/>
                    <input onChange={(e)=>setPassword(e.target.value)} className="border rounded-full px-4 py-3  border-black dark:border-white w-full " type="password" placeholder="Password"/> 
                    <button type="submit" className="  dark:bg-purple-700 bg-black text-white rounded-full font-normal w-full py-1">Register</button>  
                    <span className=" dark:text-white text-purple-700 ">or</span>
                </div>
            </form>
            <form className="  justify-center items-center flex flex-row gap-6  " >
                <button type="submit"><img src="/github.svg" alt="google" width={40} height={40} /></button>
                <button type="submit"><img src="/google.svg" alt="google" width={40} height={40} /></button>
            </form>
           </div>
            

        </div>
        <div className=" w-[500px] flex items-center justify-center flex-row">
        <h4 className="  text-slate-600 font-semibold text-sm md:text-lg items-center justify-center mt-2" >
            Already have an account ? 
            <Link href="/">
                <span className=" text-purple-700 underline"> Sign In </span></Link>
        </h4>
        </div>
        
        </section>
            
        </>
    );
};

export default SignUp;
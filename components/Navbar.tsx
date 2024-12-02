"use client"
import { logout } from "@/app/action";
import { SessionContext } from "@/context/SessionProvider";
import Link from "next/link";
import { useContext, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import ThemeToggler from "./ThemeToggler";

const Navbar :React.FC = () => {
  const [open,setOpen] = useState<boolean>(false);
  const { session, setSession } = useContext(SessionContext);

  const handleOpen = () : void => {
    setOpen((prev)=>!prev);
    };
  return (
    <div className="w-full h-20  drop-shadow-2xl  shadow-sm  bg-white dark:bg-black flex flex-row justify-between md:px-14 md:py-14 px-4 py-10">
        <div className="flex flex-row justify-between items-center">
          <Link href='/home'><h1 className=" lg:text-4xl text-2xl 2k:text-5xl text-black dark:text-white font-bold ">Snap<span className="text-purple-700 ">Skin</span></h1></Link>
        </div>
        <div  className="hidden  md:flex  justify-between items-center gap-4  lg:text-3xl text-2xl  2k:text-4xl flex-row">
          <ThemeToggler/>
          {session? (
                <form action={logout} className="flex flex-row ">
                            {session?.image ? <img src={session?.image} alt="profile" className="rounded-full" width={50} height={40} /> : 
                            <div className="bg-gray-800 border-dashed text-white border-purple-700 border-  [1px]   md:border-[2px] rounded-full h-10 w-10 md:h-14 md:w-14 flex flex-row items-center justify-center">{session.email? session.email.charAt(0).toUpperCase(): ''}</div>}
                            <Link href='/dashboard' className="px-6 justify-center items-center flex">
                                <div className=" px-4 py-2  items-center justify-center flex flex-row text-purple-700 font-medium text-xl lg:text-2xl 2k:text-3xl rounded-lg border border-purple-700 hover:text-white hover:bg-purple-700 dark:hover:bg-slate-900 ">
                                    Dashboard
                                </div>
                            </Link>
                            <button className="rounded-full px-4 py-2  font-semibold lg:text-3xl text-2xl 2k:text-5xl text-purple-700 dark:text-white" type="submit" >
                                Sign out
                            </button>        
                </form>)
          :
          (<><Link href="/"><button className="rounded-full px-4 py-2  font-semibold text-purple-700 dark:text-white">Login</button></Link></>)}
        </div>
        <div className=" flex justify-between items-center gap-4 md:hidden ">
        {!open && <HiOutlineMenuAlt3 className="relative" onClick={()=>handleOpen()}/>}
        {open && <IoMdClose  className="relative" onClick={()=>handleOpen()}/>}
        {open && 
          (<div className=" flex flex-col  top-16 right-4 absolute items-center justify-center gap-4 p-4 bg-white  dark:bg-purple-600 drop-shadow-lg  shadow-purple-600 ">
              <ThemeToggler/>
              {session ? (
                <form action ={logout} className="items-center justify-center flex flex-col gap-4">
                        {session.image ? <img src={session?.image} alt="profile" className="rounded-full " width={40} height={40} /> : <div className="bg-gray-800 border-dashed text-white border-purple-700 border-[1px] md:border-[2px] rounded-full h-10 w-10 md:h-14 md:w-14 flex flex-row items-center justify-center">{session.email? session.email.charAt(0).toUpperCase(): ''}</div>}
                        <Link href='/dashboard' className="px-2 justify-center items-center flex">
                                <div className=" px-4 py-2  items-center justify-center flex flex-row text-white font-medium text-xl rounded-lg border border-purple-700 hover:bg-purple-400 dark:hover:bg-slate-900 ">
                                    Dashboard
                                </div>
                            </Link>
                        <button type="submit" className=" text-sm  rounded-full font-semibold text-purple-700 dark:text-white"  >
                            Sign out
                        </button>
                </form>
              ):(
                <>
                <Link href="/"><button className=" text-sm  rounded-full font-semibold text-purple-700 dark:text-white">Login</button></Link>
              </>)}
          </div>)}

        </div>

        
    </div>
  )
}

export default Navbar

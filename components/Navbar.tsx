"use client"
import { logout } from "@/app/action";
import { SessionContext } from "@/context/SessionProvider";
import Image from "next/image";
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
    <div className="w-full h-20  drop-shadow-2xl shadow-black dark:shadow-purple-400 bg-white dark:bg-black flex flex-row justify-between md:px-14 md:py-14 px-4 py-10">
        <div className="flex flex-row justify-between items-center">
          <h1 className=" lg:text-4xl text-2xl text-black dark:text-white font-bold ">Snap<span className="text-purple-700 ">Skin</span></h1>
        </div>
        <div  className="hidden  md:flex  justify-between items-center gap-4  lg:text-3xl text-2xl  flex-row">
          <ThemeToggler/>
          {session? (<form action={logout} className="flex flex-row ">
            <Image src={session?.image || "/google.svg"} alt="profile" className="rounded-full" width={50} height={40} />
                        <button className="rounded-full px-4 py-2  font-semibold lg:text-3xl text-2xl text-purple-700 dark:text-white" type="submit" >
                            Sign out
                        </button>
                        
                       
          </form>)
          :
          (<><Link href="/login"><button className="rounded-full px-4 py-2  font-semibold text-purple-700 dark:text-white">Login</button></Link></>)}
        </div>
        <div className=" flex justify-between items-center gap-4 md:hidden ">
        {!open && <HiOutlineMenuAlt3 className="relative" onClick={()=>handleOpen()}/>}
        {open && <IoMdClose  className="relative" onClick={()=>handleOpen()}/>}
        {open && 
          (<div className=" flex flex-col  top-16 right-4 absolute items-center justify-center gap-4 p-4 bg-white  dark:bg-purple-600 drop-shadow-lg  shadow-purple-600 ">
              <ThemeToggler/>
              {session ? (
                <form action ={logout} className="items-center justify-center flex flex-col gap-4">
                <Image src={session?.image || "/google.svg"} alt="profile" className="rounded-full " width={40} height={40} />
                        <button type="submit" className=" text-sm  rounded-full font-semibold text-purple-700 dark:text-white"  >
                            Sign out
                        </button>
                </form>
              ):(
                <>
                <Link href="/login"><button className=" text-sm  rounded-full font-semibold text-purple-700 dark:text-white">Login</button></Link>
              </>)}
          </div>)}

        </div>

        
    </div>
  )
}

export default Navbar

import Link from "next/link"
import ThemeToggler from "./ThemeToggler"

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white dark:bg-black flex flex-row justify-between px-14 py-14">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl  text-black dark:text-white font-bold ">Snap<span className="text-purple-700 ">Skin</span></h1>
        </div>
        <div  className="flex flex-row justify-between items-center gap-4">
          <ThemeToggler/>
          <Link href="/login"><button className="rounded-full px-4 py-2 text-3xl font-semibold text-purple-700 dark:text-white">Login</button></Link>
        </div>

        
    </div>
  )
}

export default Navbar

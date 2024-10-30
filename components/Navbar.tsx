import ThemeToggler from "./ThemeToggler"

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white dark:bg-black flex flex-row justify-end px-10 py-10">
        <ThemeToggler/>
    </div>
  )
}

export default Navbar

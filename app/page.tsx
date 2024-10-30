import dynamic from "next/dynamic";


const Navbar =  dynamic(() => import("../components/Navbar"));
const HomePage = () => {
  return (
    <>
    <Navbar/>
    </>
  )
}

export default HomePage

import dynamic from "next/dynamic";


const Navbar =  dynamic(() => import("../../components/Navbar"));
const Home = dynamic(()=>import("../../components/Home"));
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default HomePage

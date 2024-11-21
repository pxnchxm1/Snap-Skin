import dynamic from "next/dynamic";


const Navbar =  dynamic(() => import("../../components/Navbar"));
const Home = dynamic(()=>import("../../components/Home"));
const Footer = dynamic(()=>import("../../components/footer"));
const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  )
}

export default HomePage

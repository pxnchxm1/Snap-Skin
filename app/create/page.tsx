
import dynamic from "next/dynamic"

const Navbar = dynamic(()=> import('../../components/Navbar'))

const page = () => {
  return (
    <>
      <Navbar/>
      <div className="w-full min-h-screen justify-center items-center text-center flex ">
        Welcome <br/> I am yet to do this screen . Be patient... 💗
      </div>
    </>
   
  )
}

export default page

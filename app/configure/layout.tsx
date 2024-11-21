
import dynamic from "next/dynamic"

const Navbar = dynamic(()=> import('../../components/Navbar'))
const Footer = dynamic(()=> import('../../components/footer'))
const StepsPage = dynamic(()=> import('../../components/steps'))

const layout = ({children }:{children :React.ReactNode}) => {
  return (
    <div className="w-full  items-center justify-center  flex flex-col bg-white dark:bg-black">
      <Navbar/>
      <StepsPage/>
      <div className="ring-1 ring-inset mt-2  ring-purple-700 rounded-xl  px-52 py-52 flex flex-col justify-center items-center">
      {children}
      </div>
      
      <Footer/>
    </div>
   
  )
}

export default layout                

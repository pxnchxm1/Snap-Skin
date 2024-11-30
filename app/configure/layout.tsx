
import dynamic from "next/dynamic"

const Navbar = dynamic(()=> import('../../components/Navbar'))
const Footer = dynamic(()=> import('../../components/footer'))
const StepsPage = dynamic(()=> import('../../components/steps'))

const layout = ({children }:{children :React.ReactNode}) => {
  return (
    <div className="w-full  items-center justify-between  flex flex-col bg-white dark:bg-black">
      <Navbar/>
      <StepsPage/>
      {children}
       
      <Footer/>
    </div>
   
  )
}

export default layout                

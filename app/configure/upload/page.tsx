
import dynamic from "next/dynamic"

const UploadPage = dynamic(()=> import('../../../components/configure/UploadPage'))
const page = () => {
  return (
    <div className="min-h-[65vh] justify-center items-center flex flex-col">
       <UploadPage/>
    </div>
   
  )
}

export default page

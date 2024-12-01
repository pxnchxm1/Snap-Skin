
import dynamic from "next/dynamic"

const UploadPage = dynamic(()=> import('../../../components/configure/UploadPage'))
const page = () => {
  return (
    <UploadPage/>
  )
}

export default page

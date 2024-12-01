
import dynamic from "next/dynamic"

const ReviewPage = dynamic(()=>import('../../../components/configure/ReviewPage'))


const page = () => {
  return (
    <ReviewPage/>
   
  )
}

export default page

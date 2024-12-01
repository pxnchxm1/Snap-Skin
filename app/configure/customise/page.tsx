
import dynamic from 'next/dynamic'

const CustomisePage = dynamic(()=>import('../../../components/configure/CustomisePage'))
const page = () => {
  return (
    <CustomisePage/>
  )
}

export default page

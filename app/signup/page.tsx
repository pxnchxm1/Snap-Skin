import dynamic from "next/dynamic";
import SignUp from "../../components/SignUp";


const Login = dynamic(()=>import ("../../components/SignUp"));
const  signup = () => {

  return (
    <SignUp/>
  )
}

export default signup


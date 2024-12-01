
import dynamic from "next/dynamic";

const Login = dynamic(()=>import ("../components/Login"));
const  LoginPage = () => {
  return (
    <Login/>
  )
}

export default LoginPage


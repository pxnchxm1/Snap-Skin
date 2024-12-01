"use client"
import dynamic from "next/dynamic";
import SignUp from "../../components/SignUp";


const Login = dynamic(()=>import ("../../components/SignUp"),{ssr:false});
const signup = () => {
  return (
    <SignUp/>
  )
}
export default signup


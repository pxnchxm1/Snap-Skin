"use client"
import dynamic from "next/dynamic";

const Login = dynamic(()=>import ("../components/Login"),{ssr:false});
const  page = () => {
  return (
    <Login/>
  )
}

export default page


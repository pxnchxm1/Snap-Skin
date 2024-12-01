"use client"
import dynamic from "next/dynamic";

const Login = dynamic(()=>import ("../components/Login"));
const  login = () => {

  return (
    <Login/>
  )
}

export default login


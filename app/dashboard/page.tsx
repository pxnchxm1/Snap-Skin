"use client"
import dynamic from 'next/dynamic'


const Dashboard = dynamic(()=>import('@/components/Dashboard'))
const page = () => {
  return (
    <Dashboard/>
  )
}

export default page

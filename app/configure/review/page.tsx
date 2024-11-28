"use client"
import { configureContext } from "@/context/ConfigureProvider";
import dynamic from "next/dynamic";
import { useContext } from "react";


const CustomisedImage = dynamic(()=>import('@/components/configure/CustomisedImage'));

const page = () => {
  const {uploadedImageUrl} = useContext(configureContext);

  return (
    <div className="p-4">
      <img src={uploadedImageUrl} alt="" className="h-96 w-96"></img>
      
    </div>
  )
}

export default page

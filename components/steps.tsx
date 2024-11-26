"use client"
import { configureContext } from "@/context/ConfigureProvider";
import { useContext } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdDashboardCustomize, MdViewInAr } from "react-icons/md";

const steps = () => {
     
    const {uploadSuccess,setUploadSuccess,reviewSuccess,setReviewSuccess,customiseSuccess,setCustomiseSuccess} = useContext(configureContext);
    const Steps = [
        { 
            title : 'Upload Your Image',
            description: 'Upload your custom images here! ',
            url :'/upload' ,
            icon :<IoCloudUploadSharp  className="h-8 w-8 lg:h-14 lg:w-14"/>,
            active : uploadSuccess,
            
        },
        { 
            title : 'Customise your product',
            description: 'Select your favourite product and customise image here! ',
            url :'/customise' ,
            icon :<MdDashboardCustomize   className="h-8 w-8 lg:h-14 lg:w-14"/>,
            active : customiseSuccess,

        },
        { 
            title : 'Review Product',
            description: 'See the end result of your custom product here! ',
            url :'/review' ,
            icon :<MdViewInAr  className="h-8 w-8 lg:h-14 lg:w-14"/>,
            active : reviewSuccess,
        },
    
    ];
  return (
    <div className="w-full flex flex-col p-2 md:p-10  justify-center items-center">
       <div className="flex flex-col xl:flex-row gap-1 md:gap-2  p-3   ">
        {Steps.map((step, index) => (
            <div key={index} className={`flex flex-col p-1 md:px-10  items-start justify-center border-b-4 md:border-b-8  ${step.active ? 'border-b-green-600' :' border-b-gray-700'} `}>
                <div className="flex flex-row items-center justify-center">
                <div className="flex justify-center p-2 text-gray-500 ">{step.icon}</div>
                   <div className="flex flex-col p-2 items-start justify-center ">
                        <h2 className={ `font-semibold text-sm md:text-md text-purple-700`}>{step.title}</h2>
                        <p className={ ` md:text-md hidden md:flex text-gray-500`}>{step.description}</p>
                   </div>
                </div>
                
                
            </div>
                ))}
        </div>
            
    </div>
  )
}

export default steps

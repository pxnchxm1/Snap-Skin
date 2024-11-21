"use client"
import { configureContext } from "@/context/ConfigureProvider";
import { useContext } from "react";

const Steps = [
    { 
        title : 'Upload Your Image',
        description: 'Upload your custom images here! ',
        url :'/upload' 
    },
    { 
        title : 'Customise your product',
        description: 'Select your favourite product and customise image here! ',
        url :'/customise' 
    },
    { 
        title : 'Review Product',
        description: 'See the end result of your custom product here! ',
        url :'/review' 
    },
   
];
const steps = () => {
  const {uploadSuccess,setUploadSuccess,reviewSuccess,setReviewSuccess,customiseSuccess,setCustomiseSuccess} = useContext(configureContext);
  return (
    <div className="w-full flex flex-col p-10  justify-center items-center">
    <ol className="flex flex-col md:flex-row gap-2  p-3 ">
        {Steps.map((step, index) => (
            <div key={index} className="flex flex-col p-5 ">
                <div className="flex flex-row ">
                   <img src="/ss.png" alt="imagetha" className="p-2 h-20 w-24"></img>
                   <div className="flex flex-col p-2 ">
                        <h2 className="">{step.title}</h2>
                        <p>{step.description}</p>
                   </div>
                </div>
                
                
            </div>
                ))}
                </ol>
            
    </div>
  )
}

export default steps

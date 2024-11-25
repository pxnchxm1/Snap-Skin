"use client"
import { createContext, useState } from 'react';

interface configureContextType {
    uploadSuccess:boolean,
    setUploadSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    customiseSuccess:boolean,
    setCustomiseSuccess:React.Dispatch<React.SetStateAction<boolean>>,
    reviewSuccess:boolean,
    setReviewSuccess:React.Dispatch<React.SetStateAction<boolean>>
    uploadedImageUrl: string, // Array to store uploaded image URLs
    setUploadedImageUrl: React.Dispatch<React.SetStateAction<string>> ,
    imageUploaded : boolean,
    setimageUploaded :React.Dispatch<React.SetStateAction<boolean>>

}
const InitialValues: configureContextType = {
    uploadSuccess: false,
    setUploadSuccess: () => {},
    customiseSuccess: false,
    setCustomiseSuccess:()=>{},
    reviewSuccess:false,
    setReviewSuccess:()=>{},
    uploadedImageUrl: "", // Initialize the images array as empty
    setUploadedImageUrl: () => {},
    imageUploaded:false,
    setimageUploaded : ()=>{}

};

export const configureContext = createContext<configureContextType>(InitialValues);


const ConfigureProvider = ({children}:{children:React.ReactNode}) => {
    const [uploadSuccess,setUploadSuccess] = useState<boolean>(false);
    const [customiseSuccess,setCustomiseSuccess] = useState<boolean>(false);
    const [reviewSuccess,setReviewSuccess] = useState<boolean>(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");
    const [imageUploaded,setimageUploaded] = useState<boolean>(false);
    
    

    return (
        <configureContext.Provider value={{imageUploaded,setimageUploaded,uploadSuccess,setUploadSuccess,customiseSuccess,setCustomiseSuccess,reviewSuccess,setReviewSuccess,uploadedImageUrl,setUploadedImageUrl}}>
            {children}
        </configureContext.Provider>
)
}

export default ConfigureProvider

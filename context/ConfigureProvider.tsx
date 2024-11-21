"use client"
import { createContext, useState } from 'react';

interface configureContextType {
    uploadSuccess:boolean,
    setUploadSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    customiseSuccess:boolean,
    setCustomiseSuccess:React.Dispatch<React.SetStateAction<boolean>>,
    reviewSuccess:boolean,
    setReviewSuccess:React.Dispatch<React.SetStateAction<boolean>>

}
const InitialValues: configureContextType = {
    uploadSuccess: false,
    setUploadSuccess: () => {},
    customiseSuccess: false,
    setCustomiseSuccess:()=>{},
    reviewSuccess:false,
    setReviewSuccess:()=>{},
};

export const configureContext = createContext<configureContextType>(InitialValues);


const ConfigureProvider = ({children}:{children:React.ReactNode}) => {
    const [uploadSuccess,setUploadSuccess] = useState<boolean>(false);
    const [customiseSuccess,setCustomiseSuccess] = useState<boolean>(false);
    const [reviewSuccess,setReviewSuccess] = useState<boolean>(false);

    return (
        <configureContext.Provider value={{uploadSuccess,setUploadSuccess,customiseSuccess,setCustomiseSuccess,reviewSuccess,setReviewSuccess}}>
            {children}
        </configureContext.Provider>
)
}

export default ConfigureProvider

"use client"
import React, { createContext, useState } from "react";

interface CustomProductContextType {
    color : string,
    size: string,
    model:string,
    product:string,
    caseMaterial:string,
    merchMaterial: string,
    mugMaterial: string,
    setColor : React.Dispatch<React.SetStateAction<string>>,
    setSize :React.Dispatch<React.SetStateAction<string>>,
    setModel :React.Dispatch<React.SetStateAction<string>>,
    setProduct :React.Dispatch<React.SetStateAction<string>>,
    setCaseMaterial :React.Dispatch<React.SetStateAction<string>>,
    setMerchMaterial :React.Dispatch<React.SetStateAction<string>>,
    setMugMaterial :React.Dispatch<React.SetStateAction<string>>,
}

const InitialValues : CustomProductContextType = {
    color : "",
    size: "",
    model:"",
    product:"",
    caseMaterial:"",
    merchMaterial: "",
    mugMaterial: "",
    setColor : () => {},
    setSize : () => {},
    setModel : () => {},
    setProduct : () => {},
    setCaseMaterial : () => {},
    setMerchMaterial : () => {},
    setMugMaterial : () => {},
}
export const CustomProductContext = createContext<CustomProductContextType>(InitialValues);

const CustomProductProvider = ({children} : {children : React.ReactNode}) => {
    const [color , setColor ]= useState<string>('');
    const [size , setSize ]= useState<string>('');
    const [model, setModel] = useState<string>('');
    const [product, setProduct] = useState<string>('');
    const [caseMaterial,setCaseMaterial] = useState<string>('');
    const [merchMaterial,setMerchMaterial] = useState<string>('');
    const [mugMaterial,setMugMaterial] = useState<string>('');

    return (
        <CustomProductContext.Provider 
        value={{
        color,size,model,product,caseMaterial,merchMaterial,mugMaterial,
        setColor,setSize,setModel,setProduct,setCaseMaterial,setMerchMaterial,setMugMaterial
        }}>
            {children}
    </CustomProductContext.Provider>
    );
   
}
export default CustomProductProvider;
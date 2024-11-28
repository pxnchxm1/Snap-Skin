"use client"
import React, { createContext, useState } from 'react';


interface imageSizeContextType {
   ih:number,
   setih : React.Dispatch<React.SetStateAction<number>>,
   iw:number,
   setiw : React.Dispatch<React.SetStateAction<number>>,
   ib:number,
   setib : React.Dispatch<React.SetStateAction<number>>,
   it:number,
   setit : React.Dispatch<React.SetStateAction<number>>,
   ir:number,
   setir : React.Dispatch<React.SetStateAction<number>>,
   il:number,
   setil : React.Dispatch<React.SetStateAction<number>>,
   cover : boolean,
   setCover : React.Dispatch<React.SetStateAction<boolean>>,
}

const InitialValues : imageSizeContextType = {
   ih : 1,
   setih:()=>{},
   iw : 1,
   setiw:()=>{},
   ib : 0,
   setib:()=>{},
   it : 0,
   setit:()=>{},
   il : 0,
   setil:()=>{},
   ir : 0,
   setir:()=>{},
   cover : false,
   setCover:()=>{},
}
export const imageSizeContext = createContext<imageSizeContextType>(InitialValues);

const ImageSizeProvider = ({children} : {children : React.ReactNode}) => {
    const [ih , setih ]= useState<number>(1);
    const [iw , setiw ]= useState<number>(1);
    const [ib , setib ]= useState<number>(0);
    const [it , setit ]= useState<number>(0);
    const [il , setil ]= useState<number>(0);
    const [ir , setir ]= useState<number>(0);
    const [cover , setCover ]= useState<boolean>(false);
   
  return (
  
   <imageSizeContext.Provider 
    value={{ih,setih,iw,setiw,it,ib,il,ir,setit,setib,setir,setil,cover,setCover }}>
        {children}
    </imageSizeContext.Provider>
  
   
    );
}
export default ImageSizeProvider

"use client"
import { configureContext } from "@/context/ConfigureProvider";
import { CustomProductContext } from "@/context/CustomProductProvider";
import dynamic from "next/dynamic";
import { useContext, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { CgColorPicker } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

const CustomImage = dynamic(()=>import('../../../components/configure/CustomisedImage'))

const page = () => {
  
  const {product,setProduct,color,setColor,size,setSize,model,setModel,mugMaterial,setMugMaterial,caseMaterial,setCaseMaterial,merchMaterial,setMerchMaterial} = useContext(CustomProductContext);
  const [pickColor,setPickColor] = useState(false);
  const [drop, setDrop] = useState<boolean>(false);
  const [merchMaterialDrop, setMerchMaterialDrop] = useState<boolean>(false);
  const [caseMaterialDrop,setCaseMaterialDrop] = useState<boolean>(false);
  const [cupMaterialDrop, setCupMaterialDrop] = useState<boolean>(false);
  const availableProducts = ["Merch", "Case", "Cup"];
  const sizes = ["XS","S","M","L","XL","XXL"];
  const availableModels = [
    {
        name: "IPhone 15",
    },
    {
        name: "IPhone 14",
    },
    {
        name: "IPhone 13",
    },
    {
        name: "IPhone 12",
    }
];
const availableMerchMaterials = [
  {
      name: "Cotton",
  },
  {
      name: "Nylon",
  },
  {
      name: "Woolen",
  },
  {
      name: "Polyster",
    }
];
const availableCupMaterials = [
  {
      name: "Ceramic",
  },
  {
      name: "Glass",
  },
  {
      name: "Steel",
  },
  {
      name: "Plastic",
    }
];
const availableCaseMaterials = [
  {
      name: "Silicon",
  },
  {
      name: "Glass",
  },
  {
      name: "Plastic",
  },
];
const handleCaseMaterialSelect = (name: string): void => {
  setCaseMaterial(name);
  setCaseMaterialDrop(false);
    };
  const handleModelSelect = (name: string): void => {
    setModel(name);
    setDrop(false);
    };
const handlMerchMaterialSelect = (name: string): void => {
  setMerchMaterial(name);
  setMerchMaterialDrop(false);
    };
const handleCupMaterialSelect = (name: string): void => {
  setMugMaterial(name);
  setCupMaterialDrop(false);};
  const availableColors = [
   
    {
      "name" :"Black",
      "code" : "#000000"
    },
    { 
      name :"White",
      code : "#FFFFFF"
    },
   
    {
      name :"Green",
      code : "#104D10FF"
    },
    {
      name :"Brown",
      code : "#964B00"
    },   
  ]
  const {uploadedImageUrl} = useContext(configureContext);
 
  return (
    <div className="flex flex-col lg:flex-row  justify-center  items-stretch md:justify-between  bg-gray-100 dark:bg-slate-900 ">
      <section className="flex flex-col w-full border-dashed border-[2px] border-purple-700 justify-center items-center p-2 h-full ">
         <CustomImage/>
      </section>
      <section className="flex flex-col  justify-start items-start md:p-4 p-2 overflow-y-auto  gap-4   bg-white h-full dark:bg-black ">
            <div className="font-semibold text-md md:text-xl lg:text-2xl border-b-gray-300 border-b-[2px] pb-4"> Customise Your Product </div>
            <div className="font-semibold text-sm md:text-md lg:text-xl border-b-gray-300 border-b-[1px] pb-2"> Pick a product </div>
            <div className="flex flex-row justify-center items-center border-[1px] border-purple-700 ">
                {availableProducts.map((item,index)=>{
                  return(
                    <div key={index} onClick={()=>setProduct(item)} className={`cursor-pointer gap-2 p-3  dark ${item === product ? 'bg-purple-700 text-white' : 'bg-transparent'}`}>
                      {item}
                  </div>)
                })}

            </div>
          
            <div className="font-semibold text-sm md:text-md lg:text-xl border-b-gray-300 border-b-[1px] pb-2"> Pick a color </div>
            <div className="grid  grid-cols-3  md:grid-cols-4 justify-start items-start gap-4">
              {availableColors.map((c,i)=> {
                return(
                    <div key={i} className="py-2  font-medium flex flex-col items-center justify-center gap-2">
                      <div>{c.name}</div>
                      <div className=" p-1 rounded-full border-[1px] border-black dark:border-purple-700 ">
                          <div onClick={()=>setColor(c.name)} className="p-4 h-3 w-3 md:h-8 md:w-8 border-[1px] border-black dark:border-purple-700  rounded-full " style={{background:c.code}}>  
                          </div>
                      </div>
                      
                    </div>
                  )})
                }

            </div>
            <div className="flex flex-row justify-start items-start gap-2">
              <CgColorPicker className="h-6 md:h-10 cursor-pointer w-6 md:w-10  rounded-full p-1 " onClick={()=>setPickColor((prev)=>!prev)} />
                {pickColor ? <HexColorPicker style={{height:150,width:150}} color={color} onChange={setColor} />:<></>}
            </div>
            <h3 className="flex flex-row gap-2 justify-end items-center">Color : <div className="h-4 w-8 p-2 border-black dark:border-white border-[1px] " style={{background:color}}></div></h3>

            {product && (<>
              <div className="font-semibold text-sm md:text-md lg:text-xl border-b-gray-300 border-b-[1px] pb-2"> Pick a Material </div>
              
              {product==="Merch" && 
                <div className="flex flex-col gap-4 font-bold ">
                    <div className="relative">
                        <div onClick={() =>  setMerchMaterialDrop((prev) => !prev)} className="border-2 border-purple-700 text-sm px-4 py-2 cursor-pointer w-full flex items-center justify-between">
                           
                            <span className="flex flex-row items-center  gap-4 justify-between">
                                <p>{merchMaterial === "" ? "Select Material" : merchMaterial}</p>
                                <IoMdArrowDropdown />
                            </span>
                        </div>
                        {merchMaterialDrop && (
                            <div className="absolute left-0 right-0 bg-white border-2 border-gray-200 mt-1 z-30 text-sm">
                                {availableMerchMaterials.map((item, index) => (
                                    <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={() => handlMerchMaterialSelect(item.name)}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                }
                 {product==="Case" && 
                      <div className="flex flex-col gap-4 font-bold ">
                      <div className="relative">
                          <div onClick={() =>  setCaseMaterialDrop((prev) => !prev)} className="border-2 border-purple-700 text-sm px-4 py-2 cursor-pointer w-full flex items-center justify-between">
                             
                              <span className="flex flex-row items-center justify-between gap-4">
                              <p>{caseMaterial === "" ? "Select Material" : caseMaterial}</p>
                                  <IoMdArrowDropdown />
                              </span>
                          </div>
                          {caseMaterialDrop && (
                              <div className="absolute left-0 right-0 bg-white border-2 border-gray-200 mt-1 z-30 text-sm">
                                  {availableCaseMaterials.map((item, index) => (
                                      <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={() => handleCaseMaterialSelect(item.name)}>
                                          {item.name}
                                      </div>
                                  ))}
                              </div>
                          )}
                      </div>
                  </div>
                     
                }
                {product==="Cup" && 
                      <div className="flex flex-col gap-4 font-bold ">
                      <div className="relative">
                          <div onClick={() =>  setCupMaterialDrop((prev) => !prev)} className="border-2 border-purple-700 text-sm px-4 py-2 cursor-pointer w-full flex items-center justify-between">
                             
                              <span className="flex flex-row items-center justify-between gap-4">
                              <p>{mugMaterial === "" ? "Select Material" : mugMaterial}</p>
                                  <IoMdArrowDropdown />
                              </span>
                          </div>
                          {cupMaterialDrop && (
                              <div className="absolute left-0 right-0 bg-white border-2 border-gray-200 mt-1 z-30 text-sm">
                                  {availableCupMaterials.map((item, index) => (
                                      <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={() => handleCupMaterialSelect(item.name)}>
                                          {item.name}
                                      </div>
                                  ))}
                              </div>
                          )}
                      </div>
                  </div>
                }
             

            </>)}

            {product && (<>
              {product=="Case" && <div className="font-semibold text-sm md:text-md lg:text-xl border-b-gray-300 border-b-[1px] pb-2"> Pick the model </div>}
              {product=="Merch" && <div className="font-semibold text-sm md:text-md lg:text-xl border-b-gray-300 border-b-[1px] pb-2"> Pick the size </div>}
              <div className="">
              {product==="Merch" && 
                  <div className="flex flex-row justify-center items-center border-[1px] border-purple-700  px-4 py-2 ">
                  {sizes.map((item,index)=>{
                    return(
                      <div key={index} onClick={()=>setSize(item)} className={`cursor-pointer gap-2 p-3  dark ${item === size ? 'bg-purple-700 text-white' : 'bg-transparent'}`}>
                        {item}
                    </div>)
                  })}
  
              </div>
                      
                }
                 {product==="Case" && 
                  <div className="flex flex-col gap-4 font-bold ">
                  <div className="relative">
                      <div onClick={() =>  setDrop((prev) => !prev)} className=" border-2 border-purple-700 text-sm px-4 py-2 cursor-pointer w-full flex items-center justify-between">
                          <span className="flex flex-row items-center justify-between gap-4">
                          <p>{model === "" ? "Select The Model" : model}</p>

                              <IoMdArrowDropdown />
                          </span>
                      </div>
                      {drop && (
                          <div className="absolute left-0 right-0 bg-white border-2 border-gray-200 mt-1 z-30 text-sm">
                              {availableModels.map((item, index) => (
                                  <div key={index} className="px-4 py-2 cursor-pointer hover:bg-purple-400" onClick={() => handleModelSelect(item.name)}>
                                      {item.name}
                                  </div>
                              ))}
                          </div>
                      )}
                  </div>
              </div>
                     
                }
               
              </div>

            </>)}
            

      </section>
    </div>
  )
}

export default page

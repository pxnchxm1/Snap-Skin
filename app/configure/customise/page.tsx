"use client"
import { configureContext } from "@/context/ConfigureProvider";
import { CustomProductContext } from "@/context/CustomProductProvider";
import { useContext, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { CgColorPicker } from "react-icons/cg";


const page = () => {
  
  const {product,setProduct,color,setColor,size,setSize,model,setModel,mugMaterial,setMugMaterial,caseMaterial,setCaseMaterial,merchMaterial,setMerchMaterial} = useContext(CustomProductContext);
  const [pickColor,setPickColor] = useState(false);
  const availableProducts = ["Merch", "Case", "Cup"];
  const sizes = ["XS","S","M","L","XL","XXL"];
  console.log(mugMaterial)
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
    <div className="flex flex-col md:flex-row  justify-center p-2 items-center md:w-[58%] ">
      <section className="flex flex-col h-[44rem] w-[20rem] justify-center items-center p-6 border-dashed border-[2px] border-purple-700 dark:bg-slate-900  ">
        <img className="h-52 w-52 p-4" src={uploadedImageUrl} alt="image"></img>
      </section>
      <section className="flex flex-col justify-start items-start px-2 py-4 md:py-6  md:p-6  gap-4  border-dashed border-[2px] border-purple-700  ">
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
            <div className="grid  grid-cols-3  md:grid-cols-4 justify-start items-start gap-1">
              {availableColors.map((c,i)=> {
                return(
                    <div key={i} className="py-2  font-medium flex flex-col items-center justify-center gap-2">
                      <div>{c.name}</div>
                      <div className=" p-1 rounded-full border-[1px] border-black dark:border-purple-700 ">
                          <div onClick={()=>setColor(c.name)} className="p-4 h-4 w-4 md:h-8 md:w-8 border-[1px] border-black dark:border-purple-700  rounded-full " style={{background:c.code}}>  
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
              <div className="px-4 py-2  border-purple-700 border-[2px]">
              {product==="Merch" && 
                      <select  className="outline-none border-none font-medium px-4 py-2" title="Cup" onChange={(e)=>setMerchMaterial(e.target.value)}>
                        <option value="" disabled selected>Select Material</option>
                        <option  value="Cotton">Cotton</option>
                        <option value="Nylon">Nylon</option>
                        <option value="Polyster">Polyster</option>
                      </select>
                }
                 {product==="Case" && 
                      <select  className="outline-none border-none font-medium px-4 py-2" title="Cup" onChange={(e)=>setCaseMaterial(e.target.value)}>
                        <option value="" disabled selected>Select Material</option>
                        <option  value="Silicon">Silicon</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Glass">Glass</option>
                      </select>
                }
                {product==="Cup" && 
                      <select  className="outline-none border-none font-medium px-4 py-2" title="Cup" onChange={(e)=>setMugMaterial(e.target.value)}>
                        <option value="" disabled selected>Select Material</option>
                        <option  value="Ceramic">Ceramic</option>
                        <option value="Glass">Glass</option>
                        <option value="Metal">Metal</option>
                      </select>
                }
              </div>

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
                 <div className="px-4 py-2  border-purple-700 border-[2px]">
                     <select  className="outline-none border-none font-medium px-4 py-2" title="Cup" onChange={(e)=>setCaseMaterial(e.target.value)}>
                        <option value="" disabled selected>Select model</option>
                        <option  value="iphone">iphone</option>
                        <option value="Samsung">Samsung</option>
                      </select>
                 </div>
                     
                }
               
              </div>

            </>)}
            

      </section>
    </div>
  )
}

export default page

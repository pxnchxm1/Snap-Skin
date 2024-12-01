"use client"
import { configureContext } from "@/context/ConfigureProvider";
import { CustomProductContext } from "@/context/CustomProductProvider";
import { SessionContext } from "@/context/SessionProvider";
import { imageSizeContext } from "@/context/imageSizeProvider";
import html2canvas from "html2canvas";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";


const ProductImage = dynamic(()=>import('@/components/configure/FinalProduct'));

const ReviewPage = () => {
    const {uploadedImageUrl,setReviewSuccess,setUploadSuccess,setCustomiseSuccess} = useContext(configureContext);
    const {ih,iw,it,ib,ir,il,cover} = useContext(imageSizeContext);
    const {color,product,caseMaterial,merchMaterial,mugMaterial,model,size} = useContext(CustomProductContext);
    const {session,fetchSession} = useContext(SessionContext);
    const router = useRouter();

    const [showDialog,setShowDialog] = useState<boolean>(false);

    const handleReset = () => {
      router.push('/home');
      setReviewSuccess(false);
      setCustomiseSuccess(false);
      setUploadSuccess(false);
      if(typeof window !== 'undefined'){
          setTimeout(()=>{window.location.reload();},2000);
    }
 

    }

    const downloadImage = async () => {
      const element = document.getElementById("product-image");
      if (element) {
        const canvas = await html2canvas(element);
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = `${product}-customized-image.png`;
        link.click();

        
        try{
          const response = await fetch('/api/productUpload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                id : session?.id,
                productName :product,
                materialName : product=="Merch" ? merchMaterial: product=="Case"? caseMaterial : mugMaterial,
                modelOrSize :product=="Merch" ? size: product=="Case"? model : '',
                productColor : color,
                productImage : image,
      
            })
          });
          if(response.ok){
            console.log("data uploaded");
            
          }else{
            console.log("data not uploaded")
          }
          await fetchSession();


        }catch(error){
          console.log(error);
        }

        setReviewSuccess(true);
        setShowDialog(true);
        
      }
    };

  return (
    <div className="p-4 flex flex-col md:h-[70vh] justify-center items-center relative">
            <div className="p-4 flex flex-col md:flex-row  gap-4 justify-center items-center dark:bg-slate-900  ">
                <section  id="product-image"  className="p-2 justify-center items-center flex w-[250px] md:w-[300px] lg:w-[400px] xl:w-[450px]">
                    <ProductImage/>
                </section>
                <section className="p-2 flex flex-col gap-2 justify-center items-center ">
                    <div className="flex flex-col justify-center items-start">
                        <h1 className="text-2xl font-bold text-purple-700">Your {product} Summary </h1>
                        <h1 className="text-md lg:text-lg text-gray-700">Customise your product with your favourite prints. </h1>
                        <div className="mt-8 flex flex-col gap-2 justify-center items-center text-ssm  sm:text-sm md:text-lg  lg:text-xl 2xl:text-2xl text-gray-500">
                                        <div className="flex flex-col gap-2 justify-center items-start">
                                            <div className="flex flex-row gap-2 "><TiTick className="text-purple-700"/><h6>High quality durable material. </h6></div>
                                            <div className="flex flex-row gap-2 "><TiTick className="text-purple-700"/><h6>User friendly. </h6></div>
                                            <div className="flex flex-row gap-2 "><TiTick className="text-purple-700"/><h6>2 year warranty. </h6></div>
                                        </div>  
                        </div>
                        <div className=" gap-2 flex flex-col justify-center items-start text-gray-600 mt-4 text-md font-medium lg:text-2xl">
                          <div>Material : {product=="Merch" ? merchMaterial : product=="Case"? caseMaterial: mugMaterial}</div>
                          <div>{product=="Merch" ? "Merch Size " : "Model"} : {product=="Merch" ? size : model}</div>
                          <div>Color : {color}</div>
                        </div>
                    </div>
                    <div onClick={downloadImage} className="rounded-md p-4 text-white hover:bg-purple-600  bg-purple-700 px-4 gap-4 py-2 flex flex-row justify-center items-center font-semibold">Get Image 
                      <PiDownloadSimpleBold className="h-6 w-6"/>
                    </div>
                  
                </section>
                
            
          </div>

          {showDialog && (
        <div className=" inset-3 rounded-lg bg-white bg-opacity-95 dark:bg-slate-900 dark:bg-opacity-90  flex-col flex justify-center items-center absolute z-50">
          <div className="flex flex-row items-end justify-end">
            <IoCloseSharp className="h-8 w-8 text-black dark:text-white justify-end items-end" onClick={()=>setShowDialog(false)}/>

          </div>
          <div className="p-4 flex flex-col items-center gap-4">
            <h2 className="text-4xl font-bold text-green-600">Download Successful </h2>
            <div className="h-44 w-44  object-contain">
              <ProductImage/>
            </div>
            <p className="mt-4 text-gray-700">Your customized product image has been downloaded.</p>
            
            <button  onClick={handleReset} className=" bg-green-600 dark:bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-600">Continue
            </button>
            
                  
          </div>
        </div>
      )}

    </div>
    
  )
}

export default ReviewPage

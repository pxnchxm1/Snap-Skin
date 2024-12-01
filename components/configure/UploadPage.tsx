"use client"
import { configureContext } from '@/context/ConfigureProvider';
import { CldUploadWidget } from 'next-cloudinary';
import Link from 'next/link';
import { useContext } from 'react';
import { PiImagesSquareThin } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";



const UploadPage = () => {
   
 
  const {uploadSuccess,setUploadSuccess,reviewSuccess,setReviewSuccess,customiseSuccess,setCustomiseSuccess,uploadedImageUrl,setUploadedImageUrl,imageUploaded,setimageUploaded} = useContext(configureContext);

  const ondeleteimage = () =>{
    setimageUploaded(false);
    setCustomiseSuccess(false);
    setReviewSuccess(false);
    setUploadedImageUrl("");
    setUploadSuccess(false);

  }

  const onUploadImage= async(result:any):Promise<void>=>{
   try{

    const imageUrl = result?.info?.secure_url;
    setUploadedImageUrl(imageUrl);

   }
   catch{
    console.log('Error uploading image');
   }
    
   
  }


   
  return (
    
    <div  className='border-[2px] mt-2  border-dashed border-purple-700 rounded-xl   justify-center  flex flex-col gap-4 center items-center '>
      <div>
      {imageUploaded ? 
      <div className='flex flex-col items-center justify-center p-6'>
        <img  className='h-[12rem] w-[12rem]  lg:h-[32rem] lg:w-[32rem] p-4 ' src={uploadedImageUrl} alt="example"/>
        <div className='flex fle-row justify-end items-center gap-5'>
        <RiDeleteBinLine  className='h-8 w-8 text-red-700' onClick={ondeleteimage}/>
        <Link href='/configure/customise' className='rounded px-6 py-2 text-white bg-purple-700' onClick={()=> setUploadSuccess(true)}>
          Next
        </Link>
    </div>

      </div>:
      <CldUploadWidget uploadPreset="zxbc68eg" onSuccess={onUploadImage}  onClose={()=>setimageUploaded(true)} 
        
>
        {({ open }) => {
    return (
      <button className='items-center flex flex-col  justify-center gap-4 bg-gray-300 dark:bg-gray-700 text-purple-700 p-5 rounded-lg' onClick={() => open()}>
        <PiImagesSquareThin  className=' h-24 w-24'/>
        <h4 className=' font-thin font-xl '>Upload an Image</h4> 
      </button>
    );
  }}
</CldUploadWidget>}
    
    </div>
    
   
    </div>
    
  )
}

export default UploadPage

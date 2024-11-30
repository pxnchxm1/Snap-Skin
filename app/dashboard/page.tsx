"use client"
import { SessionContext } from "@/context/SessionProvider";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";


const Navbar = dynamic(()=>import('@/components/Navbar'))
const Footer = dynamic(()=>import('@/components/footer'))

const page = () => {

    const {session,products,setProducts} = useContext(SessionContext);
    const [filterdata,setFilterData] =useState<any[]>([]);
   
    

   

    const handleDelete= async(id : string | number ): Promise<void>=>{
        console.log("delete button clicked");
        // try{
        //     const res = await fetch ('/api/delete',
        //         {   method:'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(
        //                 {id}
        //             )
        //         }
        //     );


        // }catch(err){
        //     console.log(err);
        // }

    }
    useEffect(()=>{
        if(session?.id){
            setFilterData( (products || [])?.filter(p => p.user.toString() === session?.id ));

        }
       
    },[products,session]);

    return (
        <div className="bg-white dark:bg-black justify-between min-h-screen flex flex-col">
            <Navbar/>
            <div className="px-4">
            
                <div className="flex flex-col items-center justify-center mb-6 ">
                    <div className="text-purple-700 p-2 text-center font-semibold text-xl xl:text-3xl">User Dashboard</div>
                </div>
                {session && (
                    <>
                        <div className="text-purple-700 p-4 mt-4 items-start justify-start flex flex-col px-2 md:px-8 xl:px-14 gap-5  rounded-xl">
                            <div className="font-semibold text-xl md:text-3xl text-purple-700">User Details </div>
                            <section className="text-purple-700 p-4 items-start justify-start flex flex-col  w-full dark:bg-slate-900 bg-gray-200 font-semibold text-md md:text-2xl rounded-xl ">
                                <div className="flex flex-row gap-1 md:gap-2 py-2  justify-start items-start">
                                            <div>
                                                <img src={session.image} alt="profileimg" className="h-10 w-10 md:h-14 md:w-14 xl:md-16 rounded-full border-gray-600 p-1 border-dashed  border-[1px] md:border-[2px]" />
                                            </div>
                                            <div className="flex flex-col items-start justify-center gap-2 px-2 text-gray-600 font-normal  text-sm lg:text-xl hover:text-gray-500">
                                                    <div>UserName : {session.username}</div>
                                                    <div>Email : {session.email}</div>
                                            </div>
                                </div>
                                
                            </section>  
                        </div>
                    
                        <section className="text-purple-700 p-4 mt-4 items-start justify-start flex flex-col px-2 md:px-8 xl:px-14 gap-5  rounded-xl ">
                            <div className="font-semibold text-xl md:text-3xl text-purple-700">Past Customizations </div>
                                <div className=" flex flex-col w-full">
                                    {filterdata?.map((item,index)=>
                                        <div className="flex flex-row justify-start items-center gap-2 h-[22vh] md:h-[18vh] my-2  ">
                                            <section className="dark:bg-slate-900 bg-gray-200 my-2 flex-row flex justify-start items-center rounded-lg p-2 lg:p-4 w-full h-full ">
                                                    <div className={`flex flex-row md:mx-4 justify-center items-center border-[2px] border-gray-400 bg-gray-400 ml-4`} >
                                                        <img src={item.productImage} alt="productimg" className="h-20 w-20  lg:h-40 lg:w-40 p-4"/>
                                                    </div>
                                                    <div className="flex flex-col items-start justify-center gap-1 md:gap-2 px-4 py-2 md:px-2 text-gray-600 text-ssm md:text-sm lg:text-xl hover:text-gray-500 mx-2 md:mx-4">
                                                        <div className=""><span className="font-semibold ">Product : </span> {item.productName}</div>
                                                        {item.productName !="Cup" &&(<div className=""><span className="font-semibold "> {item.productName=="Merch"?"Size":item.productName=="Case"?"Model":""}  </span> : {item.modelOrSize}</div>)}
                                                        <div className=""><span className="font-semibold ">Material : </span>{item.materialName}</div>
                                                        <div className=""><span className="font-semibold ">Color : </span>{item.productColor}</div>
                                                    </div>
                                                
                                            </section>
                                            <div onClick={()=>handleDelete(item.id)} className="hidden md:flex hover:dark:bg-slate-800 hover:p-3 dark:bg-slate-900 bg-gray-200 my-2 flex-row justify-center items-center rounded-lg h-full p-2 md:p-4">
                                                    <img src="/delimage.svg" alt="delete" className="md:p-4 p-1 h-28 w-28 lg:h-32 lg:w-32" />
                                            </div>
                                            <img  onClick={()=>handleDelete(item.id)}  src="/delred.svg" alt="delete" className="h-10 w-10 p-1 md:hidden" />
                                            
                                        </div>)
                                    }
                            </div>
                        </section>
                </>)
                
                }
            </div>
            <Footer/>
        </div>
        
    );
    
}

export default page

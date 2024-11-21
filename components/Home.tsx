
import Image from "next/image";
import Link from "next/link";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { TiTick } from "react-icons/ti";


const Home = () => {
    return (
        <div className="flex flex-col  gap-10 bg-white dark:bg-black w-full items-center justify-center p-6">
            <div className='flex md:flex-row flex-col  gap-6  '>
                <section className="flex flex-col justify-center items-start gap-10 p-4 mt-6 mb-6">
                    <h1 className="text-xl md:text-2xl lg:text-4xl 2xl:text-6xl font-medium text-start ">
                        Create Your <span className="text-purple-700 font-semibold"> Own Custom Products  </span> <br/>Today !
                    </h1>
                    <h6 className="text-gray-500  text-sm sm:text-md md:text-lg 2xl:text-3xl text-start  ">Bring your memories to life with personalized merchandise!
                        <br/>
                    Transform your photos into custom cases, mugs, cups, and more.
                    </h6>
                    <div className="flex flex-col gap-2 justify-center items-start text-ssm  sm:text-sm md:text-lg lg:text-xl 2xl:text-2xl text-gray-500">
                        <div className="flex flex-row gap-2 justify-center items-center"><TiTick className="text-purple-700"/><h6>High-quality, durable products that showcase your favorite moments.
</h6></div>
                        <div className="flex flex-row gap-2 justify-center items-center"><TiTick className="text-purple-700"/><h6>Perfect for modern devices and easy to design.
                        </h6></div>
                        <div className="flex flex-row gap-2 justify-center items-center"><TiTick className="text-purple-700"/><h6>Create your own unique merchandise today!  </h6></div>
                    </div>
                    <div className="flex flex-row gap-8 items-start justify-between">
                        <Image src="/profiles.png" alt="profiles" width={90} height={40}></Image>
                        <div className="flex flex-col justify-center items-start text-gray-500">
                            <div className="flex flex-row gap-1 justify-start items-center font-medium">
                                <IoMdStar className="text-purple-700"/>
                                <IoMdStar className="text-purple-700"/>
                                <IoMdStar className="text-purple-700"/>
                                <IoMdStar className="text-purple-700 "/>
                                <IoMdStarHalf className="text-purple-700 mr-3"/>
                                <h6 className="text-gray-700 dark:text-white  ">500+</h6>
                            </div>
                            5-Star Reviews
                        </div>
                    
                    </div>
                </section>

                <section className="p-5  flex flex-row 2xl:hidden">
                <div className="flex flex-col gap-4">
                        <Image className="  " src="/apple.png" alt="" width={300} height={250}></Image>
                        <Image className="  " src="/tshirt.png" alt="" width={300} height={250}></Image>
                    </div>
                </section>
                <section className="p-5  2xl:flex flex-row hidden ">
                    <div className="flex flex-col gap-4">
                        <Image className="  " src="/apple.png" alt="" width={300} height={250}></Image>
                        <Image className="  " src="/tshirt.png" alt="" width={300} height={250}></Image>
                    </div>
                    

                </section>
            </div>
            <div className="flex flex-col mt-14 md:mt-28 gap-6  p-10">
                    <h1 className="text-xl md:text-2xl lg:text-4xl 2xl:text-6xl font-medium text-center mb-14 ">
                        What Our <span className="text-purple-700 font-semibold">Customer </span> Says ?
                    </h1>
                    <div className="flex md:flex-row justify-between items-center flex-col  p-6 ml-9 mr-9 md:gap-16  gap-8">
                        <section className="flex flex-col justify-center text-center gap-4 p-8 text-gray-900 xl:w-[40%] text-sm  md:text-md 2xl:text-xl shadow drop-shadow-3xl dark:shadow-purple-600  ">
                        <div className="flex flex-row gap-1 justify-center text-xl 2xl:text-2xl items-center font-medium">
                                <IoMdStar className="text-purple-700"/>
                                <IoMdStar className="text-purple-700"/>
                                <IoMdStar className="text-purple-700"/>
                                <IoMdStar className="text-purple-700 "/>
                                <IoMdStarHalf className="text-purple-700 mr-3"/>
                            
                            </div>
                            <h6 className="text-gray-500  text-sm sm:text-md md:text-lg 2xl:text-3xl text-center  ">
                            "I've always wanted merchandise that reflects my personality, and SnapSkin made it possible. The quality is amazing, and the design tool is so user-friendly. I'm so happy with my custom product!"
                            </h6>
                            <div className="flex flex-row justify-center items-center gap-5">
                                <Image src="/girlprofile.png" alt="profile1" width={45} height={45}></Image>
                                <div className="flex flex-col justify-center items-start">
                                    <h6 className=" text-sm sm:text-md md:text-lg dark:text-gray-500">
                                        Emily
                                    </h6>
                                    <div className="flex flex-row gap-2  text-sm md:text-md 2xl:text-xl text-center justify-center items-center">
                                    <TiTick className="text-purple-700"/>
                                        <h6 className="text-gray-500  ">verified purchase</h6>
                                    </div>   
                                </div>
                            </div>
                        </section>

                        <section className="flex flex-col justify-center text-center gap-4 p-8 text-gray-900 xl:w-[40%] text-sm  md:text-md 2xl:text-xl shadow drop-shadow-3xl dark:shadow-purple-600  ">
                        <div className="flex flex-row gap-1 justify-center text-xl 2xl:text-2xl items-center font-medium">
                                <IoMdStar className="text-purple-700"/>
                                <IoMdStar className="text-purple-700"/>
                                <IoMdStar className="text-purple-700"/>
                                <IoMdStar className="text-purple-700 "/>
                                <IoMdStarHalf className="text-purple-700 mr-3"/>
                            
                            </div>
                            <h6 className="text-gray-500  text-sm sm:text-md md:text-lg 2xl:text-3xl text-center  ">
                                "Creating my own phone case with snapskin was great experience! The platform is incredibly easy to navigate, allowing me to upload my favourite images and customize everything just the way i wanted. I highly recommend snap skin. "
                            </h6>
                            <div className="flex flex-row justify-center items-center gap-5">
                                <Image src="/menprofile.png" alt="profile1" width={45} height={45}></Image>
                                <div className="flex flex-col justify-center items-start">
                                    <h6 className=" dark:text-gray-500 text-sm sm:text-md md:text-lg 2">
                                        Jonathan
                                    </h6>
                                    <div className="flex flex-row gap-2  text-sm md:text-md 2xl:text-xl text-center justify-center items-center">
                                    <TiTick className="text-purple-700"/>
                                        <h6 className="text-gray-500  ">verified purchase</h6>
                                    </div>
                                    
                                </div>

                            </div>


                        </section>


                    </div>

            </div>
            <div className="flex flex-col mt-14 md:mt-28 gap-6  p-10 items-center justify-center">
                    <h1 className="text-xl md:text-2xl lg:text-4xl 2xl:text-6xl font-medium text-center mb-14 ">
                        Upload your photos <br/>and <span className="text-purple-700 font-semibold">Get your own custom </span> products now 
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                        <Image  src="/horse.jpg" alt="cover" width={200} height={250}></Image>
                        <Image className=" md:rotate-0 rotate-90 dark:hidden" src="/black-arrow-icon-png.webp" alt="cover" width={100} height={150}></Image>
                        <Image className="md:rotate-0 rotate-90  bg-black hidden dark:flex" src="/white_arrow.png" alt="coverwhite" width={100} height={150}></Image>
                            <div className="relative pointer-events-none z-50 overflow-hidden">
                                <Image className="pointer-events-none z-50" src="/phone-template.png" alt="cover" width={200} height={250}></Image>
                                    <div className="absolute -z-10 inset-0 rounded-full">
                                        <img  className="min-w-full min-h-full rounded-3xl dark:p-1" src="/horse_phone.jpg" alt="phonecover"></img>
                                    </div>
                            </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                        <Image src="/ss.png" alt="cover" width={200} height={250}></Image>
                        <Image className=" md:rotate-0 rotate-90 dark:hidden" src="/black-arrow-icon-png.webp" alt="cover" width={100} height={150}></Image>
                        <Image className="md:rotate-0 rotate-90  bg-black hidden dark:flex" src="/white_arrow.png" alt="coverwhite" width={100} height={150}></Image>
                            <div className="relative pointer-events-none z-50 overflow-hidden">
                                <Image className="pointer-events-none z-50" src="/shirtblack.png" alt="cover" width={300} height={280}></Image>
                                    <div className="absolute -z-10 inset-0 rounded-full">
                                        <img  className="min-w-full min-h-full rounded-3xl p-20 mt-8" src="/ss.png" alt="phonecover"></img>
                                    </div>
                            </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-2 justify-center items-center text-ssm  sm:text-sm md:text-lg lg:text-xl 2xl:text-2xl text-gray-500">
                        <div className="flex flex-col gap-2 justify-start items-start">
                            <div className="flex flex-row gap-2 "><TiTick className="text-purple-700"/><h6>High quality durable material. </h6></div>
                            <div className="flex flex-row gap-2 "><TiTick className="text-purple-700"/><h6>Modern models supported. </h6></div>
                            <div className="flex flex-row gap-2 "><TiTick className="text-purple-700"/><h6>User friendly. </h6></div>
                        </div>  
                    </div>
                    <Link href="/configure/upload" className="rounded px-4 py-2 bg-purple-700 text-white  mt-5 ">
                        Create your custom product
                    </Link>
                    

            </div>
        </div>
)
}

export default Home

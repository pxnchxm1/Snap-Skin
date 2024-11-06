
import Image from "next/image";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { TiTick } from "react-icons/ti";
const Home = () => {
    return (
    <div className='w-full bg-white dark:bg-black flex md:flex-row flex-col  gap-10 justify-center items-center p-6'>

        <section className="flex flex-col justify-center items-start gap-5 p-2 mt-4">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-medium text-start ">
                Create a <span className="text-purple-700 font-semibold"> One-of-a-Kind </span> <br/>Phone Case Today !
            </h1>
            <h6 className="text-gray-500  text-sm sm:text-md md:text-lg text-start  ">Capture your favourite memories with your own case.
                <br/>SnapSkin allows you to protect your memories
            </h6>
            <div className="flex flex-col gap-2 justify-center items-start text-ssm  sm:text-sm md:text-lg lg:text-xl text-gray-500">
                <div className="flex flex-row gap-2 justify-center items-center"><TiTick className="text-purple-700"/><h6>High quality durable material. </h6></div>
                <div className="flex flex-row gap-2 justify-center items-center"><TiTick className="text-purple-700"/><h6>Modern models supported. </h6></div>
                <div className="flex flex-row gap-2 justify-center items-center"><TiTick className="text-purple-700"/><h6>User friendly. </h6></div>
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

        <section className="p-5  flex flex-row">
            <Image className="  " src="/apple.png" alt="" width={250} height={200}></Image>
        </section>
    


    </div>
)
}

export default Home

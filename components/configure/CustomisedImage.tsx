import { configureContext } from '@/context/ConfigureProvider';
import { CustomProductContext } from '@/context/CustomProductProvider';
import { useContext, useState } from 'react';

import Cropper from "react-easy-crop";
import { getCroppedImg } from "../../components/configure/CropImages";


const CustomisedImage = () => {
    const {color,product} = useContext(CustomProductContext);
    const {uploadedImageUrl,setUploadedImageUrl} = useContext(configureContext);

    const [ih, setih] = useState(1);
    const [iw, setiw] = useState(1);
    const [it,setit] = useState(0);
    const [ib,setib] = useState(0);
    const [il,setil] = useState(0);
    const [ir,setir] = useState(0);
    const [cover,setCover] = useState<boolean>(false);


  // Handle change of the slider value
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setih(Number(event.target.value));
  };
  const handleSliderWidthChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setiw(Number(event.target.value));
  };
  const handleSlidertopChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setit(Number(event.target.value));
  };
  const handleSliderbottomChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setib(Number(event.target.value));
  };
  const handleSliderleftChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setil(Number(event.target.value));
  };
  const handleSliderrightChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setir(Number(event.target.value));
  };
  const handleCover = ()=>{
    setCover(!cover);
    setib(0);
    setil(0);
    setir(0);
    setit(0);
    
  }

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);

    const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleCrop = async () => {
        try {
            const croppedImage = await getCroppedImg(uploadedImageUrl, croppedAreaPixels);
            setCroppedImage(croppedImage);
            setUploadedImageUrl(croppedImage);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
        <div className={` justify-center flex items-center flex-col` }>
            {!croppedImage ? (
                <div className='flex flex-col justify-center items-center p-2'>
                    <div className="relative w-60 h-60">
                        <Cropper image={uploadedImageUrl} crop={crop} zoom={zoom} aspect={9 / 16} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete} />
                    </div>
                    <button onClick={handleCrop} className="absolute  bg-purple-700 rounded-md px-4 py-2 text-white ">
                    Apply Crop
                </button>
                </div>
                ) : (
                    <div className='justify-center items-center flex flex-col gap-4 xl:h-[100vh] 2xl:h-[120vh] p-4  '>
                        <div className="relative pointer-events-none z-50  md:w-[50%] overflow-hidden"  style={{background:color}} >
                            {/* Product image */}
                            <img src={ 
                                        product === "Merch" ? '/tshirtsketch.png' : 
                                        product === "Case" ? '/iphone13.png' : 
                                        '/cup.png' 
                                        }  className="pointer-events-none   z-50 select-none" alt="productimage" /> 
                            {/* Custom image*/}
                            <div className={`absolute -z-40  inset-0   flex justify-center items-center`} style={{top:it,bottom:ib,left:il,right:ir}}>
                                <img className={`${cover ? 'min-h-full min-w-full object-cover':''}`} style={{ height:ih, width:iw}} src={uploadedImageUrl} alt="imgurl" />
                            </div>
                        </div>
                        <section className=' flex flex-col gap-2 items-start justify-center p-4'>
                                
                               
                                <div className='flex flex-row gap-2  '>
                                        <div >
                                            <h2 > Set height : {ih} %</h2>
                                            <input 
                                            title="a"
                                            type="range" 
                                            min="100" 
                                            max="1000" 
                                            value={ih} 
                                            onChange={handleSliderChange} 
                                            className="slider " 
                                            />
                                        </div>
                                        <div >
                                            <h2 > Set width : {iw} %</h2>
                                            <input 
                                            title="a"
                                            type="range" 
                                            min="100" 
                                            max="1000" 
                                            value={iw} 
                                            onChange={handleSliderWidthChange} 
                                            className="slider" 
                                            />
                                        </div>
                                        <div className='flex flex-row gap-4 justify-center items-center'>
                                                <div className="font-semibold text-sm md:text-md xl:text-xl"> Cover Image  </div>
                                                <input style={{height:30, width:30}} title="c" type='radio' value="cover" onClick={handleCover}/>
                                        </div>
                                </div>
                                <div className='flex flex-row gap-2  '>
                                        <div >
                                            <h2 > Move Down : {it} %</h2>
                                            <input 
                                            title="a"
                                            type="range" 
                                            min="1" 
                                            max="200" 
                                            value={it} 
                                            onChange={handleSlidertopChange} 
                                            className="slider" 
                                            />
                                        </div>
                                        <div >
                                            <h2 > Move Up: {ib} %</h2>
                                            <input 
                                            title="a"
                                            type="range" 
                                            min="1" 
                                            max="200" 
                                            value={ib} 
                                            onChange={handleSliderbottomChange} 
                                            className="slider" 
                                            />
                                        </div>
                                        <div >
                                            <h2 > Move Left : {ir} %</h2>
                                            <input 
                                            title="a"
                                            type="range" 
                                            min="1" 
                                            max="200" 
                                            value={ir} 
                                            onChange={handleSliderrightChange} 
                                            className="slider" 
                                            />
                                        </div>
                                        <div >
                                            <h2 > Move Right : {il} %</h2>
                                            <input 
                                            title="a"
                                            type="range" 
                                            min="1" 
                                            max="200" 
                                            value={il} 
                                            onChange={handleSliderleftChange} 
                                            className="slider" 
                                            />
                                        </div>
                                </div>
                        
                        </section>
                    </div>
                    
                )}

        </div>
        
        </>
    )
}

export default CustomisedImage

import { configureContext } from '@/context/ConfigureProvider';
import { CustomProductContext } from '@/context/CustomProductProvider';
import { imageSizeContext } from '@/context/imageSizeProvider';
import { useContext } from 'react';

const FinalProduct = () => {
    const {uploadedImageUrl} = useContext(configureContext);
    const {ih,iw,it,ib,ir,il,cover} = useContext(imageSizeContext);
    const {color,product,caseMaterial,merchMaterial,mugMaterial,model,size} = useContext(CustomProductContext);
  return (
    <div>
         <div className="relative pointer-events-none z-20 bg-opacity-55 overflow-hidden"  style={{background:color}} >
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
      
    </div>
  )
}

export default FinalProduct

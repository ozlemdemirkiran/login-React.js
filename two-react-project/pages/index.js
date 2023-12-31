import LeftContent from "@/components/LeftContent";
import RightContent from "@/components/RightContent";
import Img1 from '../public/resimsol.svg';
import Image from "next/image";

export default function Home() {
  return (
    <>  
      <div className="bg-black h-screen">
      <Image className='absolute left-3 bottom-1/4 p-2' src={Img1} alt='yildiz'/>
        
        <div className="flex justify-center items-center bg-white rounded-3xl h-screen p-2">
          <LeftContent/>
          <RightContent/>
        </div>

      </div>
    </>
  )
}

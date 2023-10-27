import LeftContent from "@/components/LeftContent";
import RightContent from "@/components/RightContent";
import Img1 from '../public/duck.jpg';

export default function Home() {
  return (
    <>  
      <div className="bg-black h-screen">
      <img className='absolute left-3 bottom-1/4 p-2 bg-orange-400' src={Img1} alt="yildiz"/>
        
        <div className="flex justify-center items-center bg-white rounded-3xl h-screen p-2">
          <LeftContent/>
          <RightContent/>
        </div>

      </div>
    </>
  )
}

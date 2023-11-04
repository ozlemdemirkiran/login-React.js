
import Img2 from '../public/resimsag.svg';
import Image from 'next/image';


export default function RightContent() {
    return (
      <>
        <div className="bg-slate-600  w-1/2 p-2">
          <Image className="" src={Img2} alt='karakter'/>
        </div>
      </>
    )
  }
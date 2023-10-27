import LeftContent from "@/components/LeftContent";
import RightContent from "@/components/RightContent";

export default function Home() {
  return (
    <>  
      <div className="bg-black w-full">
        <div className="bg-white">
          Ana ekran
          <LeftContent/>
          <RightContent/>
        </div>
      </div>
    </>
  )
}

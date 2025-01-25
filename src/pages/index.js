
import BottleContainer from "@/components/BottleContainer";
import BottleTypes from "@/components/BottleTypes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HydrationEssentials from "@/components/HydrationEssentials";
import Timeline from "@/components/Timeline";
import Timeline1 from "@/components/Timeline1";

export default function Home () {
  return (
     <div>
       <Header/>
      
       <BottleContainer/>
       <BottleTypes/>
   
       <div style={{ marginTop: '200px' }}> {/* Adjust the value as needed */}
    <HydrationEssentials />
  </div>
  <div className=" bg-white">
      <Timeline1 />
    </div>
  <div style={{ marginTop: '520px' }}> {/* Adjust the value as needed */}
    <Footer />
  </div>
     </div>
  )
}
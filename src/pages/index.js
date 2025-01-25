import BottleContainer from "@/components/BottleContainer";
import BottleTypes from "@/components/BottleTypes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HydrationEssentials from "@/components/HydrationEssentials";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div>
      <Header />

      <BottleContainer />
      <BottleTypes />

      <div style={{ marginTop: "200px" }}>
        <HydrationEssentials />
      </div>
      <div className=" bg-white">
        <Timeline />
      </div>
      <div style={{ marginTop: "520px" }}>
        <Footer />
      </div>
    </div>
  );
}

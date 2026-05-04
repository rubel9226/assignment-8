import Banner from "@/Components/Banner";
import FeaturedBooks from "@/Components/FeaturedBooks";
import MarqueeComponent from "@/Components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedBooks />
      <MarqueeComponent />
    </div>
  );
}

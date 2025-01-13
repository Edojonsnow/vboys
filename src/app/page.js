import Cookout from "@/components/Cookout";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Midpage from "@/components/Midpage";
import Nav from "@/components/Nav";
import VbVirtual from "@/components/VbVirtual";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Cookout />
      <Midpage />
      <Events />
      <VbVirtual imageSrc="/footer-pic.png" mobileSrc="/vbvirtual-mobile.svg" />
      <Footer />
    </div>
  );
}

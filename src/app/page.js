import Cookout from "@/components/Cookout";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import VbVirtual from "@/components/VbVirtual";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Cookout />
      <Events />
      <VbVirtual />
      <Footer />
    </div>
  );
}

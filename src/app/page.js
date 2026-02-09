import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import VideoGallery from "@/components/VideoGallery";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Events />
      <VideoGallery />
      <Footer />
    </div>
  );
}

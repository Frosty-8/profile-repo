import Image from "next/image";
import { Footer,HeroSection , Navbar,Aboutme,ProjectSection,EmailSection,Achievements} from "./components/index"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] " >
      <Navbar />
      <div className="container mt-24 md:mt-36 mx-auto px-12 py-4">
        <HeroSection />
        <Achievements />
        <Aboutme />
        <ProjectSection />
        <EmailSection />
        
        <Footer />
      </div>
    
    </main>
  );
}

import { Navbar } from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
// import { Features } from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import HowItWorks from "./components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Pricing />
        <Contact />
        {/* <Features /> */}
      </main>
      <Footer />
    </div>
  );
}

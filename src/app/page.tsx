import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import Features from "@/components/features";
import Quality from "@/components/quality";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <Quality />
      <ContactSection />
      <Footer />
    </div>
  );
}

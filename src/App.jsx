import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Safety from "./components/Safety";
import LocationContact from "./components/LocationContact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-[var(--paper)]">
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Gallery />
        <Safety />
        <LocationContact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

import HeroSection from './_components/HeroSection';
import Benefits from  './_components/Benefits';
import HowItWorks from  './_components/HowItWorks';
import Testimonials from  './_components/Testimonials';
import FAQ from  './_components/FAQ';
import CTA from  './_components/CTA';
import Footer from  './_components/Footer';
import Header from './_components/Header';


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

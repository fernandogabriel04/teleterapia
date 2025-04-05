import HeroSection from './_components/HeroSection';
import Benefits from  './_components/Benefits';
import HowItWorks from  './_components/HowItWorks';
import Testimonials from  './_components/Testimonials';
import FAQ from  './_components/FAQ';
import CTA from  './_components/CTA';
import Header from './_components/Header';
import FooterSection from './_components/FooterSection';


export default function Home() {
  return (
    <>
    <div className='px-[2.5rem]'>
      <Header />
      <HeroSection />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
    <FooterSection />
    </>
  );
}

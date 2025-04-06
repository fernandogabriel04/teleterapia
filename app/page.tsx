import HeroSection from './_components/HeroSection';
import Benefits from  './_components/Benefits';
import HowItWorks from  './_components/HowItWorks';
import Testimonials from  './_components/Testimonials';
import FAQ from  './_components/FAQ';
import Header from './_components/Header';
import FooterSection from './_components/FooterSection';
import VideoSection from './_components/VideoSection';
import NewsSection from './_components/NewsSection';
import SecureSection from './_components/SecureSection';


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <Benefits />
        <VideoSection />
        <SecureSection />
        <HowItWorks />
        <NewsSection />
        <FAQ />
        <Testimonials />
      </div>
      <FooterSection />
    </>
  );
}

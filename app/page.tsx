import HeroSection from './_components/HeroSection';
import Benefits from  './_components/Benefits';
import Header from './_components/Header';
import FooterSection from './_components/FooterSection';
import VideoSection from './_components/VideoSection';
import NewsSection from './_components/NewsSection';
import SecureSection from './_components/SecureSection';
import FAQ from './_components/FAQ';
import Testimonials from './_components/Testimonials';

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <Benefits />
        <VideoSection />
        <SecureSection />
        <NewsSection />
        <FAQ/>
        <Testimonials/>
      </div>
      <FooterSection />
    </>
  );
}

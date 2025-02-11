import Head from 'next/head';
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
      <Head>
        <title>Teleterapia Gratuita</title>
        <meta name="description" content="Acesse a teleterapia gratuita e receba atendimento psicológico sem custos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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

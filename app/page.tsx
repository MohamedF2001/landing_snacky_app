import Hero from './components/Hero';
import ScreenshotCarousel from './components/ScreenshotCarousel';
import Features from './components/Features';
import StatsBar from './components/StatsBar';
import HowItWorks from './components/HowItWorks';
import DownloadSection from './components/DownloadSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="landing-page">
      <Hero />
      <ScreenshotCarousel />
      <Features />
      {/* <StatsBar /> */}
      <HowItWorks />
      <DownloadSection />
      <FAQ />
      <Footer />
    </main>
  );
}
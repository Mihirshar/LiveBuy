import { Header, Footer } from '../components/layout';
import {
  Hero,
  HowItWorks,
  LiveNow,
  FeaturedMarkets,
  WhyItWorks,
  JoinInfluencer,
} from '../components/landing';

export function Landing() {
  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <LiveNow />
        <FeaturedMarkets />
        <WhyItWorks />
        <JoinInfluencer />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;

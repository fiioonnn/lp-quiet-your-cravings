import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Science from "@/components/Science";
import Results from "@/components/Results";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Problem />
      <Science />
      <Results />
      <CTA />
      <Footer />
    </main>
  );
}

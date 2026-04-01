import { CTA } from "./components/home/cta";
import { Features } from "./components/home/features";
import { Hero } from "./components/home/hero";
import { HowItWorks } from "./components/home/how-it-works";
import { Testimonials } from "./components/home/testimonials";
import Container from "./components/layout/container";


export default function Home() {
  return (
    <Container>
     <Hero/>
     <Features/>
     <HowItWorks/>
     <Testimonials/>
     <CTA/>
    </Container>
  )
}
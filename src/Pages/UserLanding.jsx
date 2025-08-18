import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import NearByBikes from "../Components/ListBikes";
import HowItWorks from "../Components/HowItWorks";
import Footer from "../Components/Footer";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";

export default function UserLanding({ theme }) {
  return (
    <>
      <Navbar theme={theme} />
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <NearByBikes />
      <Footer />
    </>
  );
}

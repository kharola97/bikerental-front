import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import NearByBikes from "../Components/ListBikes";
import HowItWorks from "../Components/HowItWorks";

export default function UserLanding() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <NearByBikes />
    </>
  );
}

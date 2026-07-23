import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Company from "../Components/Company";
import Carousel from "../Components/Carousel";
import GalleryView from "../Components/GalleryView";
import UpcomingEvents from "../Components/Home/UpcomingEvents";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Testimonials from "../Components/Home/Testimonials";
import Partners from "../Components/Home/Partners";
import CTASection from "../Components/ui/CTASection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <UpcomingEvents />
      <Company />
      <Carousel />
      <GalleryView />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <CTASection
        title="Ready to Create Your Next Landmark Event?"
        subtitle="Let's bring your vision to life with unforgettable exhibition experiences."
        buttonLabel="Start Your Project"
        buttonTo="/contact"
      />
      <Footer />
    </>
  );
};

export default Home;

import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";
import GalleryView from "../Components/GalleryView";
import Footer from "../Components/Footer";
import Company from "../Components/Company";

const Home = () => {
  return (
    <>
      <Hero />
      <Company />
      <Carousel />
      <GalleryView />

      <Footer />
    </>
  );
};

export default Home;

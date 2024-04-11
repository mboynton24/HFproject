import Head from "next/head";
import Hero from "../components/LandingPage/hero";
import Navbar from "../components/LandingPage/navbar";
import SectionTitle from "../components/LandingPage/sectionTitle";

import { benefitOne, benefitTwo } from "../components/LandingPage/data";
import Video from "../components/LandingPage/video";
import Benefits from "../components/LandingPage/benefits";
import Footer from "../components/LandingPage/footer";
import Faq from "../components/LandingPage/faq";
import PopupWidget from "../components/LandingPage/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>DrinkTracker</title>
        <meta
          name="description"
          content="DrinkTracker is an analytics app bringing all of your personal goals toward drinking in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="DrinkTracker Benefits"
        title="Achieve Your Goals">
        Whether you're aiming to cut down, quit, or simply adopt a healthier lifestyle, our app has you covered. With personalized plans tailored to your needs and preferences, reaching your drinking goals has never been easier.
      </SectionTitle>
      <Benefits data={benefitOne} />
      
      <Footer />
    </>
  );
}

export default Home;
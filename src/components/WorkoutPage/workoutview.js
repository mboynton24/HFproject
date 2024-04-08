import Head from "next/head";
import Navbar from "../components/navbar";
import { useRouter } from 'next/router';

import Container from "../components/container";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import WorkoutInfo from "../components/workoutInfo";

const WorkoutView = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>GetBulky</title>
        <meta
          name="description"
          content="GetBulky is a fitness app bringing all of your personal training needs in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <WorkoutInfo workoutID = {id} />

      <Container>
        <div className="flex flex-col justify-center"></div>
      </Container>
      <Footer />
      <PopupWidget />
    </>
  );
}

export default WorkoutView;
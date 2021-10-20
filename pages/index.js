import Head from "next/head";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import BottomBanner from "../components/BottomBanner";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

export const getStaticProps = async () => {
  const exploreData = await fetch("https://jsonkeeper.com/b/QEUZ").then((res) =>
    res.json()
  );

  const cardsData = await fetch("https://jsonkeeper.com/b/W793").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};

export default function Home({ exploreData, cardsData }) {
  const [hidden, setHidden] = useState("");
  return (
    <div onLoad={() => setHidden("hidden")}>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/images/airbnb.png" />
      </Head>

      <div className={`w-[100%] h-[100vh] fixed bg-white z-50 ${hidden}`}>
        <div className="flex items-center justify-center h-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
            className="w-[25%] animate-pulse "
          />
        </div>
      </div>

      <Header />
      <TopBanner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3 ">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <BottomBanner
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

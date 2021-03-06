import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoBanner from "../components/InfoBanner";
import Map from "../components/Map";

const buttons = [
  "Cancellation Flexibility",
  "Type of Place",
  "Price",
  "Room and Beds",
  "More filters",
];

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://jsonkeeper.com/b/Q16P").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
};

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <>
      <Head>
        <title>Airbnb | {location}</title>
        <link rel="icon" href="/images/airbnb.png" />
      </Head>

      <div className="h-screen">
        <Header placeholder={`${location} | ${range} | ${guests}`} />

        <main className="flex">
          <section className="flex-grow pt-14 px-6">
            <p className="text-xs font-medium">
              300+ Stays -{" "}
              <span className="bg-red-400 text-white py-2 px-3 mx-2 rounded-full  cursor-pointer hover:shadow-xl transition duration-300">
                {range}
              </span>{" "}
              - for
              <span className="bg-red-400 text-white py-2 px-3 mx-2 rounded-full  cursor-pointer hover:shadow-xl transition duration-300">
                {guests} guests
              </span>
            </p>
            <h1 className="text-3xl font-semibold mt-5 mb-6">
              Stays in {location}
            </h1>
            <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              {buttons.map((buttonText, index) => (
                <button key={index} className="button">
                  {buttonText}
                </button>
              ))}
            </div>
            <div className="flex flex-col">
              {searchResults.map(
                ({ img, location, description, title, star, price, total }) => (
                  <InfoBanner
                    key={img}
                    img={img}
                    location={location}
                    description={description}
                    title={title}
                    star={star}
                    price={price}
                    total={total}
                  />
                )
              )}
            </div>
          </section>
          <section className="hidden xl:inline-flex min-w-[600px]">
            <Map searchResults={searchResults} />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Search;

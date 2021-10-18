import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

const buttons = [
  "Cancellation Flexibility",
  "Type of Place",
  "Price",
  "Room and Beds",
  "More filters",
];

const Search = () => {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${guests}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {guests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {buttons.map((buttonText, index) => (
              <button key={index} className="button">
                {buttonText}
              </button>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [guests, setGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-40 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 " />
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <div className="hidden sm:inline-flex">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#fd5b61"]}
              onChange={handleSelect}
            />
          </div>
          <div className="sm:hidden">
            <DateRange
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#fd5b61"]}
              onChange={handleSelect}
            />
          </div>
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold ">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 outline-none text-red-400 text-lg"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500 font-semibold py-3 md:mx-20  rounded-full transition duration-300 shadow-md hover:shadow-xl"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-white bg-red-400 rounded-full py-3 md:mx-20 font-semibold transition duration-300 shadow-md hover:shadow-xl"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

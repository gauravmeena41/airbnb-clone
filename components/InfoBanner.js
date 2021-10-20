import { HeartIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";

const InfoBanner = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="info-card-main">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon
            className="h-7 cursor-pointer text-gray-400"
            style={{ color: liked && "red" }}
            onClick={() => setLiked(!liked)}
          />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="text-gray-500 pt-2 text-sm flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl mb-2 font-semibold  text-white bg-red-400 px-5 py-2 rounded-full ">
              {price}
            </p>
            <p className=" text-right text-gray-500 ">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;

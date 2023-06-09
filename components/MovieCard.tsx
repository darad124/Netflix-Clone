import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import {useRouter} from "next/router"
import useInfoModal from "@/hooks/useInfoModalStore";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface MovieCardsProps {
  data: Record<string, any>;
}
const MovieCard: React.FC<MovieCardsProps> = ({ data }) => {
  const router = useRouter()
  const {openModal} = useInfoModal()
  return (
    <div className="relative group bg-zinc-pp col-span h-[12vw]">
    <img
      className="object-cover w-full transition delay-300 rounded-md shadow-xl cursor-pointer duration group-hover:opacity-90 sm:group-hover:opacity-0 h-[12vw]"
      src={data.thumbnailUrl}
      alt="Thumbnail"
    />
    <div className="absolute top-0 z-10 invisible w-full transition duration-200 scale-0 opacity-0 sm:visible delay-300 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:opacity-100 group-hover:translate-x-[2vw]">
      <img
        className="object-cover w-full transition shadow-xl cursor-pointer rounded-t-md duration h-[12vw]"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div className="absolute w-full p-2 transition rounded-b shadow-md z-index bg-zinc-700 lg:p-4-md">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full cursor-pointer lg:w-10 lg:h-10 hover:bg-neutral-300" 
          onClick={()=>router.push(`/watch/${data?.id}`)}>
            <BsFillPlayFill size={30} />
          </div>
          <FavoriteButton movieId={data?.id}/>
          <div onClick={()=>openModal(data?.id)} className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
        </div>
        <p className="mt-4 font-semibold text-green-400">
          New <span className="text-white">2023</span>
        </p>
        <div className="flex flex-row items-center gap-2 mt-4">
          <p className="text-sm text-white lg:text-lg">{data.duration}</p>
        </div>
        <div className="flex flex-row items-center gap-2 mt-4">
          <p className="text-sm text-white lg:text-lg">{data.genre}</p>
        </div>
      </div>
    </div>
  </div>
  
  );
};
export default MovieCard;

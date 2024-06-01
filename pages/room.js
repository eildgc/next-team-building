import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import LayoutDesk from "@/components/layout.jsx/layoutDesk";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

// TODO copy link
// TODO create user, users

export default function Room() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("/api/cards").then((response) => setCards(response.data));
  }, []);

  const OPTIONS = { dragFree: true };
  const slideElements = cards.map((card, index) => (
    <div className="grid-start-1 shrink" key={index}>
      <div className="w-72 md:w-96 h-40 p-8 bg-sky-950 border border-sky-900 rounded-md text-sky-50 relative">
        <span className="absolute z-10 top-0 right-0 pr-6 pt-2">
          {index + 1}
        </span>
        {card.description}
      </div>
    </div>
  ));
  return (
    <LayoutDesk>
      <div className="w-full flex flex-col md:flex-row gap-4 md:px-4 py-4 justify-center">
        <aside className="w-full md:w-1/3 rounded-xl flex flex-row flex-wrap md:flex-col gap-4 row-span-1 content-center bg-sky-950 p-8 border border-sky-900">
          <div className="w-full">
            <h3 className="text-sky-100 font-bold text-lg">Equipo</h3>
            <Link
              href="/join"
              className="flex items-center underline decoration-1 gap-1 hover:text-blue-300 text-sm text-sky-600 font-semibold"
            >
              Enlace al room
            </Link>
          </div>
          <div className="flex justify-start items-center gap-2 rounded-lg bg-sky-50 p-2">
            <svg
              className="w-4 md:w-10 h-4 md:h-10 fill-current text-teal-500"
              viewBox="0 0 24 24"
            >
              <path d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm.729-5.569a4.002 4.002 0 0 0 7.763 0l-1.941-.485a2 2 0 0 1-3.882 0z" />
            </svg>
            <p className="text-sm text-sky-950">Eldani</p>
            <Image
              unoptimized
              className="w-8 transition ease-in-out hover:scale-125 ml-auto"
              src="./assets/icon/ic--round-close.svg"
              alt=""
              width={8}
              height={8}
            />
          </div>
          <div className="flex justify-start items-center gap-2 rounded-lg bg-sky-50 p-2">
            <svg
              className="w-4 md:w-10 h-4 md:h-10 fill-current text-sky-500"
              viewBox="0 0 24 24"
            >
              <path d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm.729-5.569a4.002 4.002 0 0 0 7.763 0l-1.941-.485a2 2 0 0 1-3.882 0z" />
            </svg>

            <p className="text-sm text-sky-950">Luis</p>
            <Image
              unoptimized
              className="w-8 transition ease-in-out hover:scale-125 ml-auto"
              src="./assets/icon/ic--round-close.svg"
              alt=""
              width={8}
              height={8}
            />
          </div>
          <div className="flex justify-start items-center gap-2 rounded-lg bg-sky-50 p-2">
            <svg
              className="w-4 md:w-10 h-4 md:h-10 fill-current text-teal-500"
              viewBox="0 0 24 24"
            >
              <path d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm.729-5.569a4.002 4.002 0 0 0 7.763 0l-1.941-.485a2 2 0 0 1-3.882 0z" />
            </svg>

            <p className="text-sm text-sky-950">Usuario1</p>
            <Image
              unoptimized
              className="w-8 transition ease-in-out hover:scale-125 ml-auto"
              src="./assets/icon/ic--round-close.svg"
              alt=""
              width={8}
              height={8}
            />
          </div>
        </aside>
        <div className="flex flex-col gap-8 md:pl-10">
          <EmblaCarousel slides={slideElements} options={OPTIONS} />
        </div>
      </div>
    </LayoutDesk>
  );
}

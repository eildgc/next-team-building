import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import LayoutDesk from "@/components/layout.jsx/layoutDesk";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import MainCard from "@/components/mainCard";
import { useSession } from "next-auth/react";
import LoginButton from "@/components/LoginButton";
import Card from "@/components/card/Card";
import UserList from "@/components/user/user";

export default function Room() {
  const [cards, setCards] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    axios.get("/api/cards").then((response) => setCards(response.data));
  }, []);

  const OPTIONS = { dragFree: true };
  const slideElements = cards.map((card, index) => (
    <MainCard key={index} description={card.description} counter={index + 1} />
  ));

  const users = [
    {
      username: "Luis",
      avatar: "https://loremflickr.com/320/240",
    },
    {
      username: "Shiroe",
      avatar: "https://loremflickr.com/320/240",
    },
    {
      username: "Gojo",
      avatar: "https://loremflickr.com/320/240",
    },
    {
      username: "Tomoe",
      avatar: "https://loremflickr.com/320/240",
    },
    {
      username: "Stark",
      avatar: "https://loremflickr.com/320/240",
    },
  ];

  if (status === "authenticated") {
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
            <UserList initialUsers={users} />
          </aside>
          <div className="flex flex-col gap-8 md:pl-10">
            <EmblaCarousel slides={slideElements} options={OPTIONS} />
          </div>
        </div>
      </LayoutDesk>
    );
  } else {
    return (
      <LayoutDesk>
        <div className="flex justify-center items-center mt-40">
          <Card>
            <p>Por favor identíficate para continuar</p>
            <LoginButton
              className={
                "w-full md:w-1/2 p-1 mx-auto rounded-lg border-b border-sky-800 bg-gradient-to-r from-sky-900 to-sky-500 hover:bg-gradient-to-l text-center text-gray-100 py-4 text-sm md:text-base"
              }
            />
          </Card>
        </div>
      </LayoutDesk>
    );
  }
}

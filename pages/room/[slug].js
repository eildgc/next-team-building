import { useRouter } from "next/router";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import LayoutDesk from "@/components/layout.jsx/layoutDesk";
import axios from "axios";
import { useState, useEffect } from "react";
import MainCard from "@/components/mainCard";
import { useSession } from "next-auth/react";
import UserList from "@/components/user/user";
import PrintCards from "@/components/print/PrintCards";
import CopyCurrentURL from "@/components/copyCurrentURL";

const Room = () => {
  const { data: status } = useSession();
  const router = useRouter();
  const { slug } = router.query;
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    axios.get("../api/cards").then((response) => setCards(response.data));
  }, []);

  const OPTIONS = { dragFree: true };
  const slideElements = cards.map((card, index) => (
    <MainCard key={index} description={card.description} counter={index + 1} />
  ));

  const users = [
    {
      username: "Luis",
      avatar: "https://loremflickr.com/32/32",
    },
    {
      username: "Shiroe",
      avatar: "https://loremflickr.com/32/32",
    },
    {
      username: "Gojo",
      avatar: "https://loremflickr.com/32/32",
    },
    {
      username: "Tomoe",
      avatar: "https://loremflickr.com/32/32",
    },
    {
      username: "Stark",
      avatar: "https://loremflickr.com/32/32",
    },
  ];

//   if (status === "authenticated") {
    return (
      <LayoutDesk>
        <h1>Room: {slug}</h1>
        <div className="w-full flex flex-col md:flex-row gap-4 md:px-4 py-4 justify-center">
          <aside className="w-full md:w-3/12 rounded-xl flex flex-row flex-wrap md:flex-col gap-4 row-span-1 content-center bg-sky-950 p-8 border border-sky-900">
            <div className="w-8/12">
              <h3 className="text-sky-100 font-bold text-lg">Equipo</h3>
              <CopyCurrentURL />
            </div>
            <UserList initialUsers={users} />
          </aside>
          <div className="flex flex-col gap-8 md:pl-10">
            <div className="ml-auto">
              <PrintCards cards={cards} />
            </div>
            <EmblaCarousel slides={slideElements} options={OPTIONS} />
          </div>
        </div>
      </LayoutDesk>
    );
//   } else {
//     return (
//       <LayoutDesk>
//         <h1>Room: {slug}</h1>

//         <div className="flex justify-center items-center mt-40">
//           <Card>
//             <p>Por favor identíficate para continuar</p>
//             <LoginButton
//               className={
//                 "w-full md:w-1/2 p-1 mx-auto rounded-lg border-b border-sky-800 bg-gradient-to-r from-sky-900 to-sky-500 hover:bg-gradient-to-l text-center text-gray-100 py-4 text-sm md:text-base"
//               }
//             />
//           </Card>
//         </div>
//       </LayoutDesk>
//     );
//   }
};

export default Room;

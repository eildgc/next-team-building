import { useSession, signIn } from "next-auth/react";
import Card from "./card/Card";
import Button from "./ui/button/Button";
import Image from "next/image";
import { useRouter } from 'next/router';

const generateRandomSlug = () => {
  return Math.random().toString(36).substring(2, 10);
};

export default function CreateRoom({ btnMessage = "Crear sala" }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const createRoom = () => {
    const slug = generateRandomSlug();
    router.push(`/room/${slug}`);
  };

  if (session) {
    return (
      <>
        <div className="flex flex-col w-full items-center gap-4">
          <div className="w-full h-64 flex flex-col gap-4 items-center justify-center bg-sky-950 border border-sky-900 rounded-lg p-8 md:ml-14">
              <p>Identificado como:</p>
            <div className="flex w-28 items-center">
              <Image
                unoptimized
                width={10}
                height={8}
                className="w-12 transition ease-in-out hover:scale-125 mr-auto rounded-full object-cover"
                src={session.user.image}
                alt={session.user.username}
              />
              {session.user.name}
            </div>
            <button
              className={
                "w-48 p-1 mx-auto rounded-lg border-b border-sky-800 bg-gradient-to-r from-sky-900 to-sky-500 hover:bg-gradient-to-l text-center text-gray-100 py-4 text-sm md:text-base"
              } onClick={createRoom}
            >
              <span>{btnMessage}</span>
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Card>
        <p class="text-center text-sky-100">Identifícate para crear una sala</p>
        <Button
          onClick={() => signIn()}
          className={
            "w-full font-bold md:w-1/2 p-1 mx-auto rounded-lg border-b border-sky-800 bg-gradient-to-r from-sky-900 to-sky-500 hover:bg-gradient-to-l text-center text-gray-100 py-4 text-sm md:text-base"
          }
        >
          Identifícate
        </Button>
      </Card>
    </>
  );
}

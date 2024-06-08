import { useSession, signIn, signOut } from "next-auth/react";
import Card from "./card/Card";
import Button from "./ui/button/Button";
import UserContainer from "./user/user";
import Image from "next/image";

export default function CreateRoom({ btnMessage = "Crear sala" }) {
  const { data: session } = useSession();
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
            <Button
              href="/room"
              className={
                "w-48 p-1 mx-auto rounded-lg border-b border-sky-800 bg-gradient-to-r from-sky-900 to-sky-500 hover:bg-gradient-to-l text-center text-gray-100 py-4 text-sm md:text-base"
              }
            >
              <span>{btnMessage}</span>
            </Button>
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

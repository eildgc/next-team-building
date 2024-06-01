import { useSession, signIn, signOut } from "next-auth/react";
import Card from "./card/Card";
import Button from "./ui/button/Button";

export default function CreateRoom({ className }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div>
          Identificado como {session.user.name}
          <img src={session.user.image} alt={session.user.name} />
        </div>
        <Button
          href="/room"
          className={
            "w-full md:w-1/2 p-1 mx-auto rounded-lg border-b border-sky-800 bg-gradient-to-r from-sky-900 to-sky-500 hover:bg-gradient-to-l text-center text-gray-100 py-4 text-sm md:text-base"
          }
        >
          <span>Crear sala</span>
        </Button>
      </>
    );
  }
  return (
    <>
      <Card>
        <p class="text-center text-sky-100">Identifícate para crear una sala</p>
        <Button onClick={() => signIn()} className={"w-full font-bold md:w-1/2 p-1 mx-auto rounded-lg border-b border-sky-800 bg-gradient-to-r from-sky-900 to-sky-500 hover:bg-gradient-to-l text-center text-gray-100 py-4 text-sm md:text-base"}>
          Identifícate
        </Button>
      </Card>
    </>
  );
}

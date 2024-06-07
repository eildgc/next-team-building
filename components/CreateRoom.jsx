import { useSession, signIn, signOut } from "next-auth/react";
import Card from "./card/Card";
import Button from "./ui/button/Button";
import UserContainer from "./user/user";

export default function CreateRoom({ btnMessage = "Crear sala" }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="flex flex-col">
          <UserContainer src={session.user.image} alt={session.user.name}/>
          {session.user.name}
        </div>
        <Button
          href="/room"
          className={
            "w-full md:w-1/2 p-1 mx-auto rounded-lg border-b border-sky-800 bg-gradient-to-r from-sky-900 to-sky-500 hover:bg-gradient-to-l text-center text-gray-100 py-4 text-sm md:text-base"
          }
        >
          <span>{btnMessage}</span>
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

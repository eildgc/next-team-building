import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginButton({className}) {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex gap-2">
        <Image className="rounded-full overflow-hidden object-cover" unoptimized width={16} height={16} src={session.user.image} alt={session.user.name} />
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <>
      <button onClick={() => signIn()} className={className}>Identifícate</button>
    </>
  )
}
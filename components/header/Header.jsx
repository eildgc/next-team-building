import Image from "next/image";
import Link from "next/link";
import LoginButton from "../LoginButton";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="w-full h-16 flex items-center text-sky-100 font-bold px-4 py-6">
      <Link href="/" className="w-1/2 h-1/2 md:w-full md:h-20">
        <Image
          unoptimized
          src={`/assets/litech-32x32.png`}
          width={32}
          height={32}
          alt="logo"
        />
      </Link>
      <ul className="w-full flex gap-4 md:gap-10 items-center justify-center md:justify-end text-sm">
        <li className="w-18">
          <Link
            href="/"
            className="hover:underline hover:decoration-sky-300 py-4"
          >
            Inicio
          </Link>
        </li>
        <li className="w-18">
          <Link
            href="/pricing"
            className="hover:underline hover:decoration-sky-300 py-4"
          >
            Pricing
          </Link>
        </li>
        <li>
          <LoginButton
            className={"hover:underline hover:decoration-sky-300 py-4"}
          />
        </li>
        <li className="w-18">
          <a
            className="w-6 h-6 hover:underline hover:decoration-sky-950"
            href="https://github.com/eildgc/team-building"
            target="_blank"
          >
            <svg
              className="animate-bounce text-sky-50 hover:text-slate-600 hover:animate-none ease-in-out fill-current h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
}

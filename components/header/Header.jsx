import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center text-sky-100 font-bold px-4 py-6">
      <Link href="/" className="w-1/2 h-1/2 md:w-full md:h-full">
          <svg className="w-8 md:w-14 h-8 md:h-14" fill="none">
            <path
              fill="#D9D9D9"
              stroke="#2B599B"
              stroke-width="4"
              d="M32.737 20h-9.632L19 27.579 23.105 35h9.632L37 27.579 32.737 20Z"
            />
            <path
              stroke="#2B9B73"
              stroke-width="4"
              d="M32.737 2h-9.632L19 9.579 23.105 17h9.632L37 9.579 32.737 2Z"
            />
            <path
              stroke="#2B599B"
              stroke-width="4"
              d="M15.974 12H6.877L3 18.568 6.877 25h9.097L20 18.568 15.974 12ZM48.974 12h-9.097L36 18.568 39.877 25h9.097L53 18.568 48.974 12Z"
            />
            <path
              stroke="#9B2B90"
              stroke-width="4"
              d="M15.974 29H6.877L3 36.074 6.877 43h9.097L20 36.074 15.974 29Z"
            />
            <path
              stroke="#2B599B"
              stroke-width="4"
              d="M32.737 38h-9.632L19 45.074 23.105 52h9.632L37 45.074 32.737 38Z"
            />
            <path
              stroke="#2B9B73"
              stroke-width="4"
              d="M48.974 29h-9.097L36 36.074 39.877 43h9.097L53 36.074 48.974 29Z"
            />
          </svg>
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

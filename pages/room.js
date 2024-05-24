import LayoutDesk from "@/components/layout.jsx/layoutDesk";
import Link from "next/link";

export default function Room() {
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
            <p className="text-sm">Eldani</p>
            <img
              className="w-8 transition ease-in-out hover:scale-125 ml-auto"
              src="./assets/icon/ic--round-close.svg"
              alt=""
            />
          </div>
          <div className="flex justify-start items-center gap-2 rounded-lg bg-sky-50 p-2">
            <svg
              className="w-4 md:w-10 h-4 md:h-10 fill-current text-sky-500"
              viewBox="0 0 24 24"
            >
              <path d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm.729-5.569a4.002 4.002 0 0 0 7.763 0l-1.941-.485a2 2 0 0 1-3.882 0z" />
            </svg>

            <p className="text-sm">Luis</p>
            <img
              className="w-8 transition ease-in-out hover:scale-125 ml-auto"
              src="./assets/icon/ic--round-close.svg"
              alt=""
            />
          </div>
          <div className="flex justify-start items-center gap-2 rounded-lg bg-sky-50 p-2">
            <svg
              className="w-4 md:w-10 h-4 md:h-10 fill-current text-teal-500"
              viewBox="0 0 24 24"
            >
              <path d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm.729-5.569a4.002 4.002 0 0 0 7.763 0l-1.941-.485a2 2 0 0 1-3.882 0z" />
            </svg>

            <p className="text-sm">Usuario1</p>
            <img
              className="w-8 transition ease-in-out hover:scale-125 ml-auto"
              src="./assets/icon/ic--round-close.svg"
              alt=""
            />
          </div>
        </aside>
        <div className="flex flex-col gap-8 md:pl-10">
          <div className="w-full flex flex-col">
            <h1 className="text-xl text-sky-100">Tarjetas</h1>
            <p className="text-sky-100 text-sm md:text-base">
              A continuación, con tu equipo elijan una tarjeta sobre la que
              trabajar en esta sesión. Recuerda respetar los turnos de cada
              integrante de tu equipo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 grow">
            <div className="w-full grid-start-1 shrink">
              <div className="w-full">
                <div className="w-72 md:w-96 h-40 p-8 bg-sky-950 border border-sky-900 rounded-md mx-auto text-sky-50">
                  ¿Cuál valor has trabajado en los últimos 2 meses? Agrega una
                  descripción de como lo has aplicado.
                </div>
              </div>
            </div>
            <div className="w-full md:col-start-3">
              <div className="w-full">
                <div className="w-72 md:w-96 h-40 p-8 bg-sky-950 border border-sky-900 rounded-md mx-auto text-sky-50">
                  Alguna cualidad que te gustaría que tu equipo te reconociera
                </div>
              </div>
            </div>
            <div className="w-full md:row-start-2 md:col-span-4">
              <div className="w-full">
                <div className="w-72 md:w-96 h-40 p-8 bg-sky-950 border border-sky-900 rounded-md mx-auto text-sky-50">
                  Por turnos, reconoce el trabajo, cualidades y actitudes del
                  integrante del equipo elegido
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDesk>
  );
}

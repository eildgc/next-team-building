export default function Room() {
  return (
    <div class="w-full flex flex-col md:flex-row gap-4 md:px-4 py-4 justify-center">
      <aside class="w-full md:w-1/3 rounded-xl flex flex-row flex-wrap md:flex-col gap-4 row-span-1 content-center bg-sky-950 p-8 border border-sky-900">
        <div class="w-full">
          <h3 class="text-sky-100 font-bold text-lg">Equipo</h3>
          <a
            href="./join.html"
            class="flex items-center underline decoration-1 gap-1 hover:text-blue-300 text-sm text-sky-600 font-semibold"
          >
            Enlace al room
            <svg class="w-4 h-4 fill-current" viewBox="0 0 256 256">
              <path d="M216 28H88a12 12 0 0 0-12 12v36H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-36h36a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-60 176H52V100h104Zm48-48h-24V88a12 12 0 0 0-12-12h-68V52h104Z" />
            </svg>
          </a>
        </div>
        <div class="flex justify-start items-center gap-2 rounded-lg bg-sky-50 p-2">
          <svg
            class="w-4 md:w-10 h-4 md:h-10 fill-current text-teal-500"
            viewBox="0 0 24 24"
          >
            <path d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm.729-5.569a4.002 4.002 0 0 0 7.763 0l-1.941-.485a2 2 0 0 1-3.882 0z" />
          </svg>
          <p class="text-sm">Eldani</p>
          <img
            class="w-8 transition ease-in-out hover:scale-125 ml-auto"
            src="./assets/icon/ic--round-close.svg"
            alt=""
          />
        </div>
        <div class="flex justify-start items-center gap-2 rounded-lg bg-sky-50 p-2">
          <svg
            class="w-4 md:w-10 h-4 md:h-10 fill-current text-sky-500"
            viewBox="0 0 24 24"
          >
            <path d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm.729-5.569a4.002 4.002 0 0 0 7.763 0l-1.941-.485a2 2 0 0 1-3.882 0z" />
          </svg>

          <p class="text-sm">Luis</p>
          <img
            class="w-8 transition ease-in-out hover:scale-125 ml-auto"
            src="./assets/icon/ic--round-close.svg"
            alt=""
          />
        </div>
        <div class="flex justify-start items-center gap-2 rounded-lg bg-sky-50 p-2">
          <svg
            class="w-4 md:w-10 h-4 md:h-10 fill-current text-teal-500"
            viewBox="0 0 24 24"
          >
            <path d="M7.39 16.539a8 8 0 1 1 9.221 0l2.083 4.76a.5.5 0 0 1-.459.701H5.765a.5.5 0 0 1-.459-.7zm.729-5.569a4.002 4.002 0 0 0 7.763 0l-1.941-.485a2 2 0 0 1-3.882 0z" />
          </svg>

          <p class="text-sm">Usuario1</p>
          <img
            class="w-8 transition ease-in-out hover:scale-125 ml-auto"
            src="./assets/icon/ic--round-close.svg"
            alt=""
          />
        </div>
      </aside>
      <div class="flex flex-col gap-8 md:pl-10">
        <div class="w-full flex flex-col">
          <h1 class="text-xl text-sky-100">Tarjetas</h1>
          <p class="text-sky-100 text-sm md:text-base">
            A continuación, con tu equipo elijan una tarjeta sobre la que
            trabajar en esta sesión. Recuerda respetar los turnos de cada
            integrante de tu equipo.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 grow">
          <div class="w-full grid-start-1 shrink">
            <div class="w-full">
              <div class="w-72 md:w-96 h-40 p-8 bg-sky-950 border border-sky-900 rounded-md mx-auto text-sky-50">
                ¿Cuál valor has trabajado en los últimos 2 meses? Agrega una
                descripción de como lo has aplicado.
              </div>
            </div>
          </div>
          <div class="w-full md:col-start-3">
            <div class="w-full">
              <div class="w-72 md:w-96 h-40 p-8 bg-sky-950 border border-sky-900 rounded-md mx-auto text-sky-50">
                Alguna cualidad que te gustaría que tu equipo te reconociera
              </div>
            </div>
          </div>
          <div class="w-full md:row-start-2 md:col-span-4">
            <div class="w-full">
              <div class="w-72 md:w-96 h-40 p-8 bg-sky-950 border border-sky-900 rounded-md mx-auto text-sky-50">
                Por turnos, reconoce el trabajo, cualidades y actitudes del
                integrante del equipo elegido
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

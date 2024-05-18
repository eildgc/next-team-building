export default function Card({ children }) {
  return (
    <div class="w-full md:w-2/6 flex flex-col gap-4 items-center justify-center bg-sky-950 border border-sky-900 rounded-lg p-8 md:ml-14">
      {children}
    </div>
  );
}

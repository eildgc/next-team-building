import Button from "@/components/ui/button/Button";
import LayoutDesk from "@/components/layout.jsx/layoutDesk";

export default function Pricing() {
  return (
    <LayoutDesk>
      <div className="w-full md:w-2/6 flex flex-col gap-4 items-center justify-between bg-sky-500 border border-sky-900 rounded-lg px-14 mx-auto">
        <h2 className="text-lg font-bold self-start mt-8 mb-4">APOYO AL PROYECTO</h2>
        <Button
          className={
            "w-full md:w-1/2 p-1 mx-auto rounded-lg border border-sky-200 bg-sky-700 hover:bg-sky-950 text-center text-gray-100 py-4 text-sm md:text-base cursor-pointer place-self-end"
          }
        >
          Aporta hoy
        </Button>
        <ul className="pt-8 pb-16">
          <li>Tu aportación brinda vida al proyecto</li>
          <li>Obtén una insigna por tu participación</li>
          <li>Mantén tu sala creada por más tiempo</li>
          <li>Adquiere nuestra infinita gratitud</li>
        </ul>
      </div>
    </LayoutDesk>
  );
}

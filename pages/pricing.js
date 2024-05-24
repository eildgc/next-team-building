import Button from "@/components/Button";
import LayoutDesk from "@/components/layout.jsx/layoutDesk";

export default function Pricing() {
  return (
    <LayoutDesk>
      <div className="w-full md:w-2/6 flex flex-col gap-4 items-center h-96 justify-between bg-sky-600 border border-sky-900 rounded-lg p-8 mx-auto">
        <h2 className="text-lg font-bold">APOYO AL PROYECTO</h2>
        <div>
          <p>Tu aportación brinda vida al proyecto</p>
          <p>Obtén una insigna por tu participación</p>
          <p>Mantén tu sala creada por más tiempo</p>
          <p>Adquiere nuestra infinita gratitud</p>
        </div>
        <Button
          className={
            "w-full md:w-1/2 p-1 mx-auto rounded-lg border-b border-sky-800 bg-sky-700 hover:bg-sky-950 text-center text-gray-100 py-4 text-sm md:text-base cursor-pointer place-self-end"
          }
        >
          Aporta hoy
        </Button>
      </div>
    </LayoutDesk>
  );
}

import Button from "@/components/button";
import toast, { Toaster } from "react-hot-toast";

export default function demo() {
  const notify = () => toast.success("Hello");
  const warning = () => toast.error("something bad");


  return (
    <>
      <div className="flex w-full p-96 space-x-4">
        <Button onClick={notify}>Notify me</Button>
        <Button onClick={warning}>bad</Button>

      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            color: "#713200",
          },
          success: {
            iconTheme: {
              primary: "blue",
              secondary: "white",
            },
          },
        }}
      />
    </>
  );
}

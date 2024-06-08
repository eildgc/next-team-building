import Link from "next/link";

const CopyCurrentURL = () => {
 
  const copyURLToClipboard = (e) => {
    e.preventDefault();
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        alert("URL del room copiada al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar la URL: ", err);
      });
  };
  return (
    <div>
      <Link
        href="/"
        className="flex items-center underline decoration-1 gap-1 hover:text-blue-300 text-sm text-sky-600 font-semibold" onClick={copyURLToClipboard}
      >
        Copiar enlace al room
      </Link>
    </div>
  );
};

export default CopyCurrentURL;

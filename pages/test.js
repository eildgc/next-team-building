import { useState, useEffect } from "react";
import axios from "axios";
import LayoutDesk from "@/components/layout.jsx/layoutDesk";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Test() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const sendEmail = async () => {
    const data = {
      name: "kira",
      email: "suki_nb@hotmail.com",
      message: "Pongase las pilas",
    };
    await axios.post("/api/mail", data);
    toast.success("Email sent");
  };

  return (
    <LayoutDesk>
      <input type="email" placeholder="Email" className="text-black px-2" />
      <button onClick={sendEmail} className="px-2 py-2 bg-pink-200">
        Send email
      </button>

      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Mockup products</h1>
        <p>Testing page</p>
      </div>
      <div className="text-white flex flex-wrap gap-4">
        {products &&
          products.length > 0 &&
          products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-sky-700 rounded-xl p-8 w-5/12 mx-auto"
            >
              <h2 className="font-bold text-xl">{product.title}</h2>
              <p>{product.description}</p>
              <p className="text-amber-200 text-xl font-bold whitespace-nowrap text-center">
                Price: {product.price}
              </p>
              <Image
                unoptimized
                src={product.image}
                alt={product.title}
                width={200}
                height={260}
                className="m-auto pt-2 object-contain"
              />
            </div>
          ))}
      </div>
    </LayoutDesk>
  );
}

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Header/>
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  );
}

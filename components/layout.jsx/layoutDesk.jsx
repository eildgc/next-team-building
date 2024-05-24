import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function LayoutDesk({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

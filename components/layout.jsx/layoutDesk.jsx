import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function LayoutDesk({ children }) {
  return (
    <>
      <Header />
      <div className="w-full mt-8 px-10">{children}</div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <Footer />
    </>
  );
}

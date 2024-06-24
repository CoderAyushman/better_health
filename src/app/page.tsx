import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import First from "./components/First";
export default function Home() {
  return (
    <div className="mt-32">
      <First />
      <Footer />
    </div>
  );
}

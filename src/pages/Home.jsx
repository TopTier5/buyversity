import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import Testimonial from "../components/Testimonial";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState(""); 

  return (
    <>
      <Navbar />
      <Hero onSearch={setSearchTerm} />
      <ProductGrid searchTerm={searchTerm} />
      <Testimonial />
      <Footer />
    </>
  );
}

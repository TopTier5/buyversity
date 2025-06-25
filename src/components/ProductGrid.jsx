import { useState } from "react";
import ProductCard from "./ProductCard";
import laptop from "../assets/images/laptop.jpg";
import headphone from "../assets/images/headphone.jpg";
import camera from "../assets/images/polaroid.jpg";
import nike from "../assets/images/nike1.jpg";
import cooker from "../assets/images/ricecooker1.jpg";
import jacket from "../assets/images/jeansjacket.jpg";
import book1 from "../assets/images/book1.jpeg";
import iphonexr from "../assets/images/iphonexr.jpg";
import sneakerbox from "../assets/images/sneakerbox.jpeg";
import basketball from "../assets/images/basketball.jpg"
import gymshorts from "../assets/images/gymshorts.jpg"
import useSWR from "swr";
import { apiFetcher } from "../api/client";



export default function ProductGrid({ searchTerm = "" }) {

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const { data: products = [] , error, isLoading } = useSWR("/adverts", apiFetcher);


    // const products = [
    //      {
    //         image: laptop,
    //         title: "MacBook Air M1 2020",
    //         price: " 8,000.00",
    //         vendor: "Tech Zone",
    //         condition: "Used",
    //         category: "Electronics",
    //         date: "01/02/2025"
    //     },

    //     {
    //         image: nike,
    //         title: "Nike Running Shoe",
    //         price: " 300.00",
    //         vendor: "Bismark Adjei",
    //         condition: "New",
    //         category: "Clothing & Accessories",
    //         date: "31/02/2025"
    //     },

    //     {
    //         image: cooker,
    //         title: "Electric Cooker",
    //         price: " 500.00",
    //         vendor: "Yasmine Appiah",
    //         condition: "New",
    //         category: "Hostel Essential",
    //         date: "21/03/2025"
    //     },
      
    //      {
    //         image: headphone,
    //         title: "Noise Cancelling Headphones",
    //         price: " 150.00",
    //         vendor: "Benjamin Asante",
    //         condition: "New",
    //         category: "Electronics",
    //         date: "12/02/2025"
    //     },

    //       {
    //         image: jacket,
    //         title: "Jeans Jacket",
    //         price: " 100.00",
    //         vendor: "Richard Ofori",
    //         condition: "New",
    //         category: "Clothing & Accessories",
    //         date: "11/03/2025"
    //     },
    //      {
    //         image: camera,
    //         title: "Polaroid Camera",
    //         price: " 250.00",
    //         vendor: "Yasmin Djan",
    //         condition: "New",
    //         category: "Electronics",
    //         date: "21/03/2025"
    //     },
    //      {
    //         image: gymshorts,
    //         title: "Gym Shorts",
    //         price: " 150.00",
    //         vendor: "Abigail Nkrumah",
    //         condition: "New",
    //         category: "Sports",
    //         date: "30/03/2025"
    //     },
    //     {
    //         image: book1,
    //         title: "Poor Economics",
    //         price: " 85.00",
    //         vendor: "Justice Agyemang",
    //         condition: "Used",
    //         category: "Books",
    //         date: "05/04/2025"
    //     },
    //     {
    //         image: iphonexr,
    //         title: "Iphone XR",
    //         price: " 2,000.00",
    //         vendor: "Darius Tech",
    //         condition: "New",
    //         category: "Electronics",
    //         date: "18/04/2025"
    //     },
    //      {
    //         image: sneakerbox,
    //         title: "Sneaker Accessory Box",
    //         price: " 250.00",
    //         vendor: "Daniel Asare",
    //         condition: "New",
    //         category: "Hostel Essentials",
    //         date: "23/05/2025"
    //     },
    //      {
    //         image: basketball,
    //         title: "Wilson NCAA Baskeball",
    //         price: " 200.00",
    //         vendor: "Desmond Asare",
    //         condition: "New",
    //         category: "Sports",
    //         date: "17/05/2025"
    //     },
    // ]


   const filteredProducts = products.filter((item) => {
  const matchCategory =
    selectedCategory === "All Categories" ||
    item.category === selectedCategory;

     const matchSearch =
    searchTerm.trim() === "" ||
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase());

  return matchCategory && matchSearch;
});




if (isLoading) {
    return (
      <div className="flex justify-center items-center">
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p className="text-center text-xl">something went wrong</p>
      </div>
    );
  }

    return (

         <section className="py-10 px-5 w-[90%] mx-auto">
            <div className="flex flex-wrap gap-3 mb-8">
                {["All Categories", "Electronics", "Clothing & Accessories", "Hostel Essentials", "Books","Sports", "Other"].map((category, index) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full border font-bold text-xs cursor-pointer px-3 py-2 ${
                            selectedCategory === category
                                ? "bg-purple-600 text-white"
                                : "bg-white text-purple-600 hover:bg-purple-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {filteredProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        vendor={product.vendor}
                        condition={product.condition}
                        category={product.category}
                        date={product.date}
                    />
                ))}
            </div>
        </section>
    )
}
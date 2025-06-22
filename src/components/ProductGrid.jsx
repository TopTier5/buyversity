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



export default function ProductGrid() {
     const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const products = [
         {
            image: laptop,
            title: "MacBook Air M1 2020",
            price: " 8,000.00",
            vendor: "Tech Zone",
            condition: "Used",
            category: "Electronics"
        },

        {
            image: nike,
            title: "Nike Running Shoe",
            price: " 300.00",
            vendor: "Bismark Adjei",
            condition: "New",
            category: "Clothing & Accessories"
        },

        {
            image: cooker,
            title: "Electric Cooker",
            price: " 500.00",
            vendor: "Yasmine Appiah",
            condition: "New",
            category: "Hostel Essentials"
        },
      
         {
            image: headphone,
            title: "Noise Cancelling Headphones",
            price: " 150.00",
            vendor: "Benjamin Asante",
            condition: "New",
            category: "Electronics"
        },

          {
            image: jacket,
            title: "Jeans Jacket",
            price: " 100.00",
            vendor: "Richard Ofori",
            condition: "New",
            category: "Clothing & Accessories"
        },
         {
            image: camera,
            title: "Polaroid Camera",
            price: " 250.00",
            vendor: "Yasmin Djan",
            condition: "New",
            category: "Electronics"
        },

        {
            image: book1,
            title: "Poor Economics",
            price: " 85.00",
            vendor: "Justice Agyemang",
            condition: "Used",
            category: "Books"
        },
        {
            image: iphonexr,
            title: "Iphone XR",
            price: " 2,000.00",
            vendor: "Darius Tech",
            condition: "New",
            category: "Electronics"
        },
         {
            image: sneakerbox,
            title: "Sneaker Accessory Box",
            price: " 250.00",
            vendor: "Daniel Asare",
            condition: "New",
            category: "Hostel Essentials"
        },
    ]


    const filteredProducts =
        selectedCategory === "All Categories"
            ? products
            : products.filter((product) => product.category === selectedCategory);


    return (

         <section className="py-10 px-5 w-[90%] mx-auto">
            <div className="flex flex-wrap gap-3 mb-8">
                {["All Categories", "Electronics", "Clothing & Accessories", "Hostel Essentials", "Books", "Other"].map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full border font-bold text-xs px-3 py-2 ${
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
                    />
                ))}
            </div>
        </section>
    )
}
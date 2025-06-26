import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import useSWR from "swr";
import ProductCard from "./ProductCard";
import { apiFetcher } from "../api/client";
import camera from "../assets/images/polaroid.jpg";
import jeansjacket from "../assets/images/jeansjacket.jpg";

export default function ProductGrid({ searchTerm = "" }) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const location = useLocation();


  const dummyProducts = [
    {
      image: camera,
      title: "Polaroid Camera",
      price: "250.00",
      vendor: "Yasmin Djan",
      condition: "New",
      category: "Electronics",
      date: "2025-03-21",
      _id: "local-dummy-1",
    },

    {
      image: jeansjacket,
      title: "Jeans Jacket",
      price: "150.00",
      vendor: "Kofi Agyemang",
      condition: "New",
      category: "Clothing & Accessories",
      date: "2025-04-10",
      _id: "local-dummy-2",
    },
  ];

  useEffect(() => {
    setSelectedCategory("All Categories");
  }, [location.pathname]);

  const { data, error, isLoading } = useSWR("/adverts", apiFetcher);

  const apiProducts = Array.isArray(data?.data) ? data.data : [];
  const products = [...dummyProducts, ...apiProducts];


  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20">
        Loading products…
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20">
        <div className="text-xl text-red-600 mb-4">Something went wrong.</div>
      </div>
    );


  const filteredProducts = products.filter((item) => {
    const matchCategory =
      selectedCategory === "All Categories" || item.category === selectedCategory;

    const matchSearch =
      searchTerm.trim() === "" ||
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vendor?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });


  return (
    <section className="py-10 px-5 w-[90%] mx-auto">

      <div className="flex flex-wrap gap-3 mb-8">
        {[
          "All Categories",
          "Electronics",
          "Clothing & Accessories",
          "Hostel Essentials",
          "Books",
          "Sports",
          "Other",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full border font-bold text-xs cursor-pointer px-3 py-2 transition-colors ${selectedCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 hover:bg-purple-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {filteredProducts.length ? (
          filteredProducts.map((p, idx) => (
            <ProductCard key={p._id || p.id || idx} product={p} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">
            No items found.
            {searchTerm && (
              <span className="block text-sm">
                Try adjusting your search or category filter.
              </span>
            )}
          </p>
        )}
      </div>
    </section>
  );
}

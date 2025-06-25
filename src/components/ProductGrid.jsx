import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import useSWR from "swr";
import ProductCard from "./ProductCard";
import { apiFetcher } from "../api/client";

export default function ProductGrid({ searchTerm = "" }) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const location = useLocation();

  
  useEffect(() => {
    setSelectedCategory("All Categories");
  }, [location.pathname]); 

  const {data: products = [], error, isLoading} = useSWR("/adverts", apiFetcher);

  

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

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-lg">Loading products...</div>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20">
        <div className="text-xl text-red-600 mb-4">Something went wrong.</div>
        <button 
          onClick={handleRefresh}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Try Again
        </button>
      </div>
    );

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
            className={`rounded-full border font-bold text-xs cursor-pointer px-3 py-2 transition-colors ${
              selectedCategory === cat
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
          filteredProducts.map((product, idx) => (
            <ProductCard
              key={product._id || product.id || idx}
              product={product}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            <p className="text-lg mb-2">No items found.</p>
            {searchTerm && (
              <p className="text-sm">Try adjusting your search or category filter.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
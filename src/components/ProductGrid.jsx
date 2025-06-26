import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import useSWR from "swr";
import { toast } from "sonner";
import ProductCard from "./ProductCard";
import { apiFetcher, apiClient } from "../api/client";

// Set up axios interceptor for authorization
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default function ProductGrid({ searchTerm = "" }) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const location = useLocation();

  useEffect(() => {
    setSelectedCategory("All Categories");
  }, [location.pathname]);

  const { data, error, isLoading } = useSWR("/adverts", apiFetcher, {
    onError: (error) => {
      if (error?.response?.status === 401) {
        toast.error("Authentication required", {
          description: "Please log in to view products"
        });
      } else if (error?.response?.status === 500) {
        toast.error("Server error", {
          description: "Something went wrong on our end. Please try again later."
        });
      } else {
        toast.error("Failed to load products", {
          description: "Please check your connection and try again"
        });
      }
    }
  });

  // Handle the response data structure
  const products = Array.isArray(data) ? data : [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        <span className="ml-3 text-gray-600">Loading products…</span>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20">
        <div className="text-xl text-gray-600 mb-4">
          Unable to load products
        </div>
        <button 
          onClick={() => {
            window.location.reload();
            toast.loading("Refreshing products...");
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
        >
          Try Again
        </button>
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
          filteredProducts.map((p, idx) => (
            <ProductCard key={p._id || p.id || idx} product={p} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            {isLoading ? (
              <span>Loading products...</span>
            ) : (
              <>
                <p className="text-lg mb-2">No items found.</p>
                {searchTerm && (
                  <span className="block text-sm">
                    Try adjusting your search or category filter.
                  </span>
                )}
                {products.length === 0 && !searchTerm && (
                  <span className="block text-sm">
                    No products are currently available.
                  </span>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
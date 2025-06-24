import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero5.jpg";

const slides = [
  {
    image: hero1,
    title: "Shop Electronics",
    subtitle: "Upgrade your tech life with quality electronics",
  },
  {
    image: hero2,
    title: "Clothing & Accessories",
    subtitle: "Discover trendy outfits and must-have styles",
  },
  {
    image: hero3,
    title: "Hostel Essentials",
    subtitle: "Everything you need for comfortable campus living",
  },
  {
    image: hero4,
    title: "Books",
    subtitle: "Find trendy and academic books to suit your study",
  },
  {
    image: hero5,
    title: "Sports",
    subtitle: "Gear up with the best sportswear and equipment for an active lifestyle",
  },
];

export default function Hero({ onSearch }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (onSearch && typeof onSearch === "function") {
      onSearch(searchInput.trim());
    }
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-[#f1f6ff]">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-full">
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-blue-900/30 z-10" />
          </div>
        ))}
      </div>

      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-2">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg mb-6">
          {slides[currentIndex].subtitle}
        </p>

        <div className="flex gap-2 bg-white rounded-md px-2 py-2 items-center max-w-md w-full shadow-md">
          <input
            type="text"
            placeholder="Search for anything..."
            className="flex-grow px-3 py-1 rounded-md focus:outline-none text-black"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1 px-4 py-2 rounded-md text-sm cursor-pointer"
          >
            <Search size={16} />
          </button>
        </div>
      </div>

      <button
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
        className="absolute z-30 left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer text-purple-700 hover:bg-purple-100"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
          )
        }
        className="absolute z-30 right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer text-purple-700 hover:bg-purple-100"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

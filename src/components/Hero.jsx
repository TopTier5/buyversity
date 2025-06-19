import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";

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
        title: "Kitchen & Cooking",
        subtitle: "Essential tools to enhance your cooking experience",
    },
    {
        image: hero4,
        title: "Books",
        subtitle: "Find trendy and academic books to suit your study",
    },
];



export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[currentIndex];



    return (

        <div className="relative w-full h-[500px] overflow-hidden">

            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt={`slide-${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-blue-900/30 z-10"></div>


            <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl font-bold mb-2">{currentSlide.title}</h1>
                <p className="text-lg mb-6">{currentSlide.subtitle}</p>


                <div className="flex gap-2 bg-white rounded-md px-2 py-2 items-center max-w-md w-full shadow-md">
                    <input
                        type="text"
                        placeholder="Search for anything..."
                        className="flex-grow px-3 py-1 rounded-md focus:outline-none text-black"
                    />
                    <button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1 px-4 py-2 rounded-md text-sm">
                        <Filter size={16} /> Filter
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
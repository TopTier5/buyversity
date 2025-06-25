import UserNavbar from "../components/UserNavbar";
import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import camera from "../assets/images/polaroid.jpg";
import camera1 from "../assets/images/camera1.jpg"
import { useSearchParams } from "react-router";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { useEffect } from "react";



const dummyProduct = {
  title: "Polaroid Camera",
  price: " 250.00",
  category: "Electronics",
  images: [camera, camera1],
  description: "Classic film camera in excellent condition. This beautiful polaroid camera has been well-maintained. Perfect for photography enthusiasts or collectors.",
  date: "2024-01-15",
  vendor: {
    name: "Yasmin Djan",
    location: "University of Ghana, Legon",
    email: "yasmind211@gmail.com",
    phone: "+233 255 684 987",
  },
};




export default function ProductDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === data.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? data.images.length - 1 : prev - 1
    );
  };


















  const [searchParams] =useSearchParams()
  const id = searchParams.get("id")  

  const  {data, isLoading, error} = useSWR(`/adverts/.id/${id}`, apiFetcher);

  useEffect(() => {
    scrollTo(0,0)
  }, [id]);

  if (isLoading ) {
    return(
      <div>
        <p>loading event detail...</p>
      </div>
    );
  }

  if (error) {
      return(
        <div>
          <p>something went wrong</p>
        </div>
      );
      
    }



  return (
    <>

      <UserNavbar />
      <section className="bg-purple-200 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">

          <div className="flex-1">
            <div className="relative">
              <img
                src={data.images[currentImageIndex]}
                alt={data.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              {data.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 rounded-full p-2 shadow-md"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 rounded-full p-2 shadow-md"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <div className="mt-6 bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {data.title}
                </h2>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {data.category}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                📅 Posted on {data.date}
              </p>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>


          <div className="w-full md:w-80 space-y-6">

            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-2xl font-bold text-gray-800">
                GH₵ {data.price}
              </p>
            </div>


            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">📇 Vendor Information</h4>
              <p className="text-gray-700">
                <strong>Name:</strong> {data.vendor.name}
              </p>
              <p className="flex items-center gap-2 text-gray-600 mt-2">
                <MapPin size={16} /> {data.vendor.location}
              </p>
              <p className="flex items-center gap-2 text-gray-600 mt-2">
                <Mail size={16} /> {data.vendor.email}
              </p>
              <p className="flex items-center gap-2 text-gray-600 mt-2">
                <Phone size={16} /> {data.vendor.phone}
              </p>
            </div>


            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Safety Tips</h4>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Meet in a public place</li>
                <li>Inspect items before purchase</li>
                <li>Do not share personal info</li>
                <li>Trust your instincts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
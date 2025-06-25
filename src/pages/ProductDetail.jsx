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

  const [searchParams] = useSearchParams();
  const advertId = searchParams.get("id");
  const { data: advert, error, isLoading, } = useSWR(`/adverts/${advertId}`, apiFetcher);


  const images = advert?.images ?? [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => setCurrentImageIndex(0), [advertId, images.length]);

  const nextImage = () =>
    setCurrentImageIndex((p) =>
      images.length ? (p === images.length - 1 ? 0 : p + 1) : 0
    );
  const prevImage = () =>
    setCurrentImageIndex((p) =>
      images.length ? (p === 0 ? images.length - 1 : p - 1) : 0
    );


  if (isLoading) {
    return (

      <div className="p-10">Loading…</div>

    );
  }

  if (error) {
    return (

      <div className="p-10 text-red-600">Something went wrong</div>

    );
  }

  if (!advert) {
    return (
      <div className="p-10 text-red-600">Advert not found.</div>
    );
  }

  return (
    <>
      <UserNavbar />
      <section className="bg-purple-200 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">


          <div className="flex-1">
            <div className="relative">
              {images.length > 0 && (
                <img
                  src={images[currentImageIndex]}
                  alt={advert.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              )}

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-purple-700 rounded-full p-2 shadow-md"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-purple-700 rounded-full p-2 shadow-md"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <div className="mt-6 bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {advert.title}
                </h2>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {advert.category}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-4">📅 Posted on {advert.date}</p>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{advert.description}</p>
            </div>
          </div>


          <div className="w-full md:w-80 space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-2xl font-bold text-gray-800">GH₵ {advert.price}</p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">📇 Vendor Information</h4>
              <p className="text-gray-700"><strong>Name:</strong> {advert.vendor.name}</p>
              <p className="flex items-center gap-2 text-gray-600 mt-2"><MapPin size={16} /> {advert.vendor.location}</p>
              <p className="flex items-center gap-2 text-gray-600 mt-2 break-all"><Mail size={16} /> {advert.vendor.email}</p>
              <p className="flex items-center gap-2 text-gray-600 mt-2"><Phone size={16} /> {advert.vendor.phone}</p>
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
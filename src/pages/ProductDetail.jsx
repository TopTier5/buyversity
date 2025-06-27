import UserNavbar from "../components/UserNavbar";
import { useState, useEffect } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router";
import useSWR from "swr";
import { toast } from "sonner";
import { apiFetcher, imageBaseURL } from "../api/client";

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const advertId = searchParams.get("id");

  // Redirect if no ID provided
  useEffect(() => {
    if (!advertId) {
      toast.error("Invalid product", {
        description: "No product ID provided"
      });
      navigate("/");
    }
  }, [advertId, navigate]);

  const { data, error, isLoading } = useSWR(
    advertId ? `/adverts/${advertId}` : null, 
    apiFetcher,
    {
      onError: (error) => {
        if (error?.response?.status === 404) {
          toast.error("Product not found", {
            description: "This product may have been removed or doesn't exist"
          });
        } else if (error?.response?.status === 401) {
          toast.error("Authentication required", {
            description: "Please log in to view product details"
          });
        } else {
          toast.error("Failed to load product", {
            description: "Please check your connection and try again"
          });
        }
      }
    }
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle image processing
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    return imageBaseURL ? `${imageBaseURL}/${imagePath}` : imagePath;
  };

  const getProductImages = () => {
    if (!data) return [];
    
    // Handle different possible image field structures
    if (data.images && Array.isArray(data.images)) {
      return data.images.map(img => getImageUrl(img)).filter(Boolean);
    }
    if (data.image) {
      return [getImageUrl(data.image)].filter(Boolean);
    }
    if (data.imageUrl) {
      return [getImageUrl(data.imageUrl)].filter(Boolean);
    }
    return [];
  };

  const images = getProductImages();

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [advertId, images.length]);

  const nextImage = () =>
    setCurrentImageIndex((p) =>
      images.length ? (p === images.length - 1 ? 0 : p + 1) : 0
    );
    
  const prevImage = () =>
    setCurrentImageIndex((p) =>
      images.length ? (p === 0 ? images.length - 1 : p - 1) : 0
    );

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  // Format price
  const formatPrice = (price) => {
    if (!price) return "0.00";
    const cleanPrice = String(price).replace(/[^\d.-]/g, '');
    const numPrice = parseFloat(cleanPrice);
    return isNaN(numPrice) ? "0.00" : numPrice.toFixed(2);
  };

  if (isLoading) {
    return (
      <>
        <UserNavbar />
        <section className="bg-purple-200 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              <span className="ml-3 text-gray-600">Loading product details...</span>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error || !data) {
    return (
      <>
        <UserNavbar />
        <section className="bg-purple-200 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="text-center py-20">
              <div className="text-xl text-gray-600 mb-4">
                Unable to load product details
              </div>
              <button 
                onClick={() => {
                  window.location.reload();
                  toast.loading("Refreshing product details...");
                }}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mr-4"
              >
                Try Again
              </button>
              <button 
                onClick={() => navigate("/user-page")}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Go Back Home
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  const product = data;

  return (
    <>
      <UserNavbar />
      <section className="bg-purple-200 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
          {/* Product Images */}
          <div className="flex-1">
            <div className="relative">
              {images.length > 0 ? (
                <>
                  <img
                    src={images[currentImageIndex]}
                    alt={product.title || product.name || "Product image"}
                    className="w-full h-96 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = "/placeholder-image.jpg";
                    }}
                  />
                  
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-purple-700 rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-purple-700 rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                      >
                        ›
                      </button>
                    </>
                  )}
                  
                  {/* Image indicators */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="mt-6 bg-white shadow rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {product.title || product.name || "Untitled Product"}
                </h2>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category || "Other"}
                </span>
              </div>
              
              <p className="text-gray-500 text-sm mb-4">
                📅 Posted on {formatDate(product.date || product.createdAt)}
              </p>
              
              {product.condition && (
                <p className="text-gray-500 text-sm mb-4">
                  🏷️ Condition: <span className="font-semibold">{product.condition}</span>
                </p>
              )}
              
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description || "No description available."}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-80 space-y-6">
            {/* Price */}
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-2xl font-bold text-gray-800">
                GH₵ {formatPrice(product.price)}
              </p>
            </div>

            {/* Vendor Information */}
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">
                📇 Vendor Information
              </h4>
              
              <p className="text-gray-700 mb-2">
                <strong>Name:</strong> {product.vendor?.name || product.seller?.name || product.vendorName || "Unknown"}
              </p>
              
              {(product.vendor?.location || product.location) && (
                <p className="flex items-center gap-2 text-gray-600 mt-2">
                  <MapPin size={16} /> {product.vendor?.location || product.location}
                </p>
              )}
              
              {(product.vendor?.email || product.email) && (
                <p className="flex items-center gap-2 text-gray-600 mt-2 break-all">
                  <Mail size={16} /> {product.vendor?.email || product.email}
                </p>
              )}
              
              {(product.vendor?.phone || product.phone) && (
                <p className="flex items-center gap-2 text-gray-600 mt-2">
                  <Phone size={16} /> {product.vendor?.phone || product.phone}
                </p>
              )}
            </div>

            {/* Safety Tips */}
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
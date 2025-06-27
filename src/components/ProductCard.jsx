import { Eye } from "lucide-react";
import { Link } from "react-router";
import { imageBaseURL } from "../api/client";

export default function ProductCard({ product = {} }) {
  const {
    _id,
    id,
    image,
    imageUrl,
    images, 
    title,
    name, 
    price,
    vendor,
    seller, 
    condition,
    category,
    date,
    createdAt, 
    updatedAt,
  } = product;

  const getImageUrl = () => {
    if (image) {
      
      if (image.startsWith('http')) return image;
      
      return imageBaseURL ? `${imageBaseURL}/${image}` : image;
    }
    if (imageUrl) {
      if (imageUrl.startsWith('http')) return imageUrl;
      return imageBaseURL ? `${imageBaseURL}/${imageUrl}` : imageUrl;
    }
    if (images && Array.isArray(images) && images.length > 0) {
      const firstImage = images[0];
      if (firstImage.startsWith('http')) return firstImage;
      return imageBaseURL ? `${imageBaseURL}/${firstImage}` : firstImage;
    }
    return "/placeholder-image.jpg"; 
  };

  const thumb = getImageUrl();
  const productId = _id || id || "";
  const productTitle = title || name || "Untitled Product";
  const productVendor = vendor || seller || "Unknown Seller";
  const productCondition = condition || "Used";
  
  
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
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

  const productDate = formatDate(date || createdAt || updatedAt);

  
  const formatPrice = (price) => {
    if (!price) return "0.00";
   
    const cleanPrice = String(price).replace(/[^\d.-]/g, '');
    const numPrice = parseFloat(cleanPrice);
    return isNaN(numPrice) ? "0.00" : numPrice.toFixed(2);
  };

  const formattedPrice = formatPrice(price);

  if (!productId) {
    return (
      <div className="bg-[#f1f6ff] rounded-md shadow-md p-4 w-full">
        <div className="w-full h-40 bg-gray-200 animate-pulse rounded-md mb-3" />
        <div className="h-4 bg-gray-200 animate-pulse rounded mb-2" />
        <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-200 animate-pulse rounded w-1/2" />
      </div>
    );
  }

  return (
    <section className="bg-[#f1f6ff]">
      <div className="bg-[#f1f6ff] rounded-md shadow-md hover:shadow-purple-400 transition-shadow duration-300 p-4 w-full">
        <span
          className={`relative top-2 left-2 text-xs font-bold px-2 py-1 rounded-full ${
            productCondition.toLowerCase() === "new"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {productCondition}
        </span>

        <img
          src={thumb}
          alt={productTitle}
          className="w-full h-40 object-cover rounded-md mb-3"
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg"; 
          }}
        />

        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold line-clamp-1" title={productTitle}>
            {productTitle}
          </h3>
          <span className="text-[10px] bg-purple-100 text-purple-600 hover:bg-purple-200 px-2 py-[2px] rounded-full font-semibold cursor-pointer">
            {category || "Other"}
          </span>
        </div>

        <p className="text-primary font-bold mb-1">GH₵{formattedPrice}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex flex-col">
            <p>
              Sold by: <span className="font-medium">{productVendor}</span>
            </p>
            <p>
              Date Posted: <span className="font-medium">{productDate}</span>
            </p>
          </div>

          <Link to={`/product-detail?id=${productId}`}>
            <button className="text-purple-600 hover:text-purple-800 transition-colors duration-200 cursor-pointer flex flex-row text-xs gap-2">
              <Eye size={15} /> View Details
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
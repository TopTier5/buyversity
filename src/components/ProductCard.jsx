import { Eye } from "lucide-react";
import { Link } from "react-router";

export default function ProductCard({ product = {} }) {

  const {
    _id,
    id,
    image,
    imageUrl,
    title,
    price,
    vendor,
    condition,
    category,
    date,
  } = product;

  const thumb = image || imageUrl || "";
  const productId = _id || id || "";


  if (!productId) {
    return (
      <div className="w-full h-40 bg-gray-200 animate-pulse rounded-md" />
    );
  }

  return (
    <section className="bg-[#f1f6ff]">
      <div className="bg-[#f1f6ff] rounded-md shadow-md hover:shadow-purple-400 transition-shadow duration-300 p-4 w-full">
        <span
          className={`relative top-2 left-2 text-xs font-bold px-2 py-1 rounded-full ${(condition || "").toLowerCase() === "new"
            ? "bg-green-100 text-green-600"
            : "bg-yellow-100 text-yellow-600"
            }`}
        >
          {condition}
        </span>

        <img
          src={thumb}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-3"
        />

        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <span className="text-[10px] bg-purple-100 text-purple-600 hover:bg-purple-200 px-2 py-[2px] rounded-full font-semibold cursor-pointer">
            {category}
          </span>
        </div>

        <p className="text-primary font-bold mb-1">GH₵{price}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex flex-col">
            <p>
              Sold by: <span className="font-medium">{vendor}</span>
            </p>
            <p>
              Date Posted: <span className="font-medium">{date}</span>
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

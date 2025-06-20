import { Eye } from "lucide-react";


export default function ProductCard({ image, title, price, vendor, condition, category }) {
    return (

        <section className="bg-[#f1f6ff]">
            
        <div className="bg-[#f1f6ff] rounded-md shadow-md hover:shadow-purple-400 transition-shadow duration-300 p-4 w-full">
            <span
                className={`relative top-2 left-2 text-xs font-bold px-2 py-1 rounded-full 
                    ${condition === "New" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
            >
                {condition}
            </span>

            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-3" />
           <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className="text-[10px] bg-purple-100 text-purple-600 hover:bg-purple-200 px-2 py-[2px] rounded-full font-semibold cursor-pointer">
                    {category}
                </span>
            </div>
            <p className="text-primary font-bold mb-1">GHc{price}</p>
           <div className="flex items-center justify-between text-sm text-gray-500">
                <p>
                    Sold by: <span className="font-medium">{vendor}</span>
                </p>
                <button className="text-purple-600 hover:text-purple-800 transition-colors duration-200 cursor-pointer">
                    <Eye size={18} />
                </button>
            </div>
        </div>

        </section>
    );
}
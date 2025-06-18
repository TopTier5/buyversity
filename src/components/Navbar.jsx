import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";




export default function Navbar() {

     const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    if (selected !== "") {
      navigate(`/category/${selected.toLowerCase().replace(/\s+/g, '-')}`);
      e.target.value = ""; 
    }

  };



    return (
        <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
            <div className="flex items-center gap-2 ml-15">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-md font-bold text-xl cursor-pointer">
                    B</div>
                <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    BuyVersity</span>
            </div>
            <div className="flex items-center gap-4">
                <button className="text-purple-700 hover:text-black text-sm">Home</button>
                <button className="text-purple-700 hover:text-black text-sm">About</button>
                <div className="relative">
      <select
        defaultValue=""
        onChange={handleCategoryChange}
        className="text-purple-700 text-sm appearance-none"
      >
        <option value="" disabled hidden>All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing & Accessories">Clothing & Accessories</option>
        <option value="Kitchen & Cooking">Kitchen & Cooking</option>
        <option value="Books">Books</option>
        <option value="Others">Others</option>
      </select>
      </div>


                <button className="flex items-center gap-1 border border-purple-300 px-4 py-2 rounded-md text-purple-700 hover:text-black cursor-pointer">
                    <ShoppingCart size={16} /></button>
                <button className="border border-purple-300 px-5 py-2 rounded-md text-purple-700 hover:text-black cursor-pointer">Login</button>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:text-black cursor-pointer">
                    Sign Up</button>

            </div>
        </nav>
    );
}
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
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
                <select className="text-purple-700 text-sm">
                    <option disabled selected hidden>All Categories</option>
                    <option>Electronics</option>
                    <option>Clothing & Accessories</option>
                    <option>Kitchen & Cooking</option>
                    <option>Books</option>
                    <option>Others</option>
                </select>


                <button className="flex items-center gap-1 border border-purple-300 px-4 py-2 rounded-md text-purple-700 hover:text-black cursor-pointer">
                    <ShoppingCart size={16} /></button>
                <button className="border border-purple-300 px-5 py-2 rounded-md text-purple-700 hover:text-black cursor-pointer">Login</button>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:text-black cursor-pointer">
                    Sign Up</button>

            </div>
        </nav>
    );
}
import { useNavigate } from "react-router";
import { Link } from "react-router";


export default function Navbar() {

    return (
        <nav className="bg-white shadow-sm px-4 md:px-6 py-3">
  <div className="flex items-center justify-between flex-wrap">
   
    <div className="flex items-center gap-2">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-md font-bold text-xl cursor-pointer">
        <Link to="/">B</Link>
        
      </div>
      <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
        BuyVersity
      </span>
    </div>

   
    <div className="hidden md:flex items-center gap-4">
      <button className="text-purple-700 hover:text-black text-sm"><Link to="/">
      Home</Link></button>
      <button className="text-purple-700 hover:text-black text-sm"><Link to="/about">
      About</Link>
         </button>


      <button className="flex items-center gap-1 border border-purple-300 px-3 py-1 rounded-md text-purple-700 hover:text-black text-sm">
        <Link to="/register">Become A Vendor</Link>
        
      </button>
      <button className="border border-purple-300 px-3 py-1 rounded-md text-purple-700 hover:text-black text-sm">
        <Link to="/login">Login</Link>
        
      </button>
      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-md font-semibold hover:text-black text-sm">
      <Link to="/register">Sign Up</Link>
        
      </button>
    </div>

   
    <div className="md:hidden mt-4 w-full">
      <div className="flex flex-col gap-2">
        <button className="text-purple-700 hover:text-black text-sm text-left">
          <Link to="/">
        Home
        </Link></button>
        <button className="text-purple-700 hover:text-black text-sm text-left">
          <Link to="/about">
        About
        </Link>
          </button>

        <button className="flex items-center gap-1 border border-purple-300 px-3 py-1 rounded-md text-purple-700 hover:text-black text-sm">
           <Link to="/register">Become A Vendor</Link>
        </button>
        <button className="border border-purple-300 px-3 py-1 rounded-md text-purple-700 hover:text-black text-sm">
         <Link to="/login">Login</Link>
        </button>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-md font-semibold hover:text-black text-sm">
           <Link to="/register">Sign Up</Link>
        </button>
      </div>
    </div>
  </div>
</nav>
    );
}
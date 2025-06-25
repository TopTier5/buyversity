import { Link } from "react-router"






export default function LoginNavbar() {
    return (
        <nav className="bg-white shadow-sm px-4 md:px-6 py-3">
            <div className="flex items-center justify-between flex-wrap">

                <div className="flex items-center gap-2">
                        <Link to="/" >
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-md font-bold text-xl cursor-pointer">
                         B 
                    </div>
                        </Link>
                         
                    <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                        BuyVersity
                    </span>
                </div>


                <div className="hidden md:flex items-center gap-4">
                    <Link to="/">
                    
                    <button className="text-purple-700 hover:text-black text-sm cursor-pointer">
                        Home</button>
                    </Link>

                    <Link to="/about">
                    
                    <button className="text-purple-700 hover:text-black text-sm cursor-pointer">
                        About
                    </button>
                    </Link>
                    

                    <Link to="/vendor-form">
                    
                    <button className="flex items-center gap-1 border border-purple-300 px-3 py-1 rounded-md text-purple-700 hover:text-black text-sm cursor-pointer">
                        Become A Vendor

                    </button>
                    </Link>
                    
                    
                </div>


                <div className="md:hidden mt-4 w-full">
                    <div className="flex flex-col gap-2">
                        <Link to="/">
                        <button className="text-purple-700 hover:text-black text-sm text-left cursor-pointer">Home</button>
                        
                        </Link>
                        
                        <Link to="/about">
                        <button className="text-purple-700 hover:text-black text-sm text-left cursor-pointer">
                            About</button>
                        </Link>


                        <Link to="/vendor-dashboard" >
                        
                        <button className="flex items-center gap-1 border border-purple-300 px-3 py-1 rounded-md text-purple-700 hover:text-black text-sm cursor-pointer">
                            Become A Vendor
                        </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}
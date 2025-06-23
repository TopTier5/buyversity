import { ArrowLeft } from "lucide-react"
import { Link } from "react-router";






export default function UserNavbar() {
    return(
        <>
        
         <nav className="flex justify-between py-7 px-6 bg-white shadow-xl">
            <Link to="/">
            
             <div className="flex items-center gap-2 ml-4 sm:ml-6 md:ml-10  ">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-gradient-to-r
                  from-purple-600 to blue-600 rounded cursor-pointer" />
                    <h1 className="font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600 cursor-pointer">Back to Marketplace</h1>
                </div>
            </Link>
           </nav>
        </>
                   
    );
}
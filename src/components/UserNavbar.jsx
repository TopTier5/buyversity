import { ArrowLeft} from "lucide-react"
import { User } from "lucide-react"
import { Link } from "react-router";


export default function VendorNav() {
    return (
         <nav className="flex justify-between py-3 px-6 bg-white shadow-xl">
                <div className="flex items-center gap-2 ml-4 sm:ml-6 md:ml-10  ">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-gradient-to-r
                  from-purple-600 to blue-600 rounded cursor-pointer" />
                    <h1 className="font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600 cursor-pointer">Back to Marketplace</h1>
                </div>
                <div className="flex justify-center items-center text-center px-3 ">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">User Dashboard</h1>
                </div>
                <div className="flex flex-row sm:flex-row mr-4 sm:mr-6 md:mr-10 lg:mr-16 ">
                    <div className="mr-3 w-10 h-10  rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center ">
                        <User className="w-5 h-5 text-white " />
                    </div>
                    <Link to="/" >
                        <div className="border border-[#D8B4FE] bg-gradient-to-r from-purple-600 to-blue-600
                 text-white pt-2 pb-2 pl-3 pr-3 hover:shadow-2xl shadow-blue-700
                text-sm font-semibold rounded-md cursor-pointer ">Back to Home
                        </div>
                        </Link>


                    

                </div>
            </nav>
        
    );
}
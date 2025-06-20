import { ArrowLeft } from "lucide-react"
import { User } from "lucide-react"

export default function VendorDashboard() {

    return(

         <nav className="flex justify-between py-3 px-6 bg-white shadow-xl">
            <div className="flex items-center gap-2 ml-4 sm:ml-6 md:ml-10  ">
                 <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-gradient-to-r
                  from-purple-600 to blue-600 rounded cursor-pointer" />
                <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600 cursor-pointer">Back to Marketplace</h1>
                    
            </div>
            <div className="mr-10 flex flex-row">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 
                flex items-center justify-center ">
                    <User className="w-5 h-5 text-white" />
                </div>
                <div><button className="border border-[#D8B4FE] bg-gradient-to-r from-purple-600 to-blue-600
                 text-white pt-2 pb-2 pl-3 pr-3
                text-sm font-semibold rounded-md cursor-pointer ">+ Post New Ad</button>
                </div>
            </div>


        </nav>

        
    )

}
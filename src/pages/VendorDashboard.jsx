import { ArrowLeft } from "lucide-react"

export default function VendorDashboard() {

    return(

         <nav className="flex justify-between py-3 px-6 bg-white shadow-xl">
            <ArrowLeft className="w-6 h-6" />
            <div className="flex items-center gap-2 ml-15">
                <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600">Back to Marketplace</h1>
                    
            </div>
            <div className="mr-10">
                <button className="border border-[#D8B4FE] text-[#7E22CE] pt-2 pb-2 pl-3 pr-3
                text-sm font-semibold rounded-md  ">Continue Shopping</button>
            </div>
           
        </nav>
    )

}
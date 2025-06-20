import { ArrowLeft } from "lucide-react"

export default function VendorDashboard() {

    return(

         <nav className="flex items-center justify-between py-3 px-6 bg-white shadow-xl">
            <div className="flex items-center gap-2 ml-15">
                <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600">
                    Back to Marketplace</h1>
                    <div>
                    <button className="text-[#7E22CE] border border-gray-400 rounded-4xl text-xs font-semibold pt-0.5 pb-0.5
                    pl-3 pr-3"><span><ArrowLeft className="w-6 h-6" /></span>Back to Marketplace</button>
                    </div>
            </div>
            <div className="mr-10">
                <button className="border border-[#D8B4FE] text-[#7E22CE] pt-2 pb-2 pl-3 pr-3
                text-sm font-semibold rounded-md  ">Continue Shopping</button>
            </div>
           
        </nav>
    )

}
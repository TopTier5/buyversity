import { ArrowLeft } from "lucide-react"
import { User } from "lucide-react"
import { Link } from "react-router";


export default function VendorNav() {
    return (
        <nav
            className="bg-white shadow-xl px-4 sm:px-6 md:px-10 py-3
             flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >

            <div className="flex items-center gap-2">
                <ArrowLeft
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-gradient-to-r
                 from-purple-600 to-blue-600 rounded cursor-pointer"
                />
                <h1
                    className="font-bold text-xs sm:text-sm
                 text-transparent bg-clip-text bg-gradient-to-r
                 from-purple-600 to-blue-600 cursor-pointer"
                >
                    Back to Marketplace
                </h1>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
                <div
                    className="w-10 h-10 rounded-full bg-gradient-to-r
                 from-purple-600 to-blue-600 flex items-center justify-center"
                >
                    <User className="w-5 h-5 text-white" />
                </div>

                <Link to="/">
                    <div
                        className="border border-[#D8B4FE] bg-gradient-to-r from-purple-600 to-blue-600
                   text-white px-3 py-2 text-sm font-semibold rounded-md
                   hover:shadow-2xl shadow-blue-700 cursor-pointer"
                    >
                        Back to Home
                    </div>
                </Link>
            </div>
        </nav>

    );
}
import { ArrowLeft, Trash } from "lucide-react"
import { User } from "lucide-react"
import vintage from "../assets/images/vintage.jpg"
import { EditIcon } from "lucide-react"
import { TrashIcon } from "lucide-react"
import iphonexr from "../assets/images/iphonexr.jpg"
import jeansjacket from "../assets/images/jeansjacket.jpg"
import { Link } from "react-router"
import { LocationEdit } from "lucide-react"
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"


export default function VendorDashboard() {

    return (

        <>

            <nav className="flex justify-between py-3 px-6 bg-white shadow-xl">
                <div className="flex items-center gap-2 ml-4 sm:ml-6 md:ml-10  ">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-gradient-to-r
                  from-purple-600 to blue-600 rounded cursor-pointer" />
                    <h1 className="font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600 cursor-pointer">Back to Marketplace</h1>
                </div>
                <div className="flex justify-center items-center text-center px-3 ">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Vendor Dashboard</h1>
                </div>
                <div className="flex flex-row sm:flex-row mr-4 sm:mr-6 md:mr-10 lg:mr-16 ">
                    <div className="mr-3 w-10 h-10  rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center ">
                        <User className="w-5 h-5 text-white " />
                    </div>
                    <Link to="/vendor-form">
                        <div className="border border-[#D8B4FE] bg-gradient-to-r from-purple-600 to-blue-600
                 text-white pt-2 pb-2 pl-3 pr-3 hover:shadow-2xl shadow-blue-700
                text-sm font-semibold rounded-md cursor-pointer ">+ Post New Ad
                        </div>


                    </Link>

                </div>
            </nav>

            <section className=" ">
                <div className="flex flex-col md:flex-row ml-6 md:ml-13  ">
                    <div className="border rounded-md border-purple-300 w-[30%] h-36 mt-10 ml-4">
                        <div className="flex flex-col sm:ml-4 ml-2 sm:mt-2 mt-1">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                                    <User className="w-5 h-5 text-white" />
                                </div>
                                <h1 className="font-bold text-base sm:text-lg">Peninah Brown</h1>
                            </div>

                            <div className="flex items-center mt-2 space-x-2">
                                <LocationEdit className="w-6 h-6 text-gray-600" />
                                <h1 className="text-sm sm:text-base text-gray-700">Legon, Accra</h1>
                            </div>
                            <div className="flex items-center mt-2 space-x-2 ">
                                <Mail className="w-6 h-6 text-gray-600" />
                                <h1 className="text-sm sm:text-base text-gray-700">peninahbrown2@gmail.com</h1>
                            </div>
                            <div className="flex items-center mt-2 space-x-2">
                                <Phone className="w-6 h-6 text-gray-600" />
                                <h1 className="text-sm sm:text-base text-gray-700">+233 541 678 987</h1>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-md border-purple-300 w-[30%] h-36 mt-10 ml-10">
                        <div className="p-8">
                            <h1 className="text-4xl">2</h1>
                            <h2 className="mt-2 text-2xl">Total Ads</h2>
                        </div>
                    </div>
                </div>
                <div className=" w-full min-h-screen flex justify-center">
                    <div className="mt-10 border rounded-md border-purple-300 w-[90%] ">
                        <div className="p-8">
                            <h1 className="text-2xl font-bold">My Advertisements</h1>
                            <h2 className="text-sm  text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Manage your posted advertisements</h2>
                        </div>
                        <div className="relative border rounded-md border-purple-300 w-[95%] mx-auto p-4 h-40">
                            <div className="flex">
                                <img src={vintage} alt="vintage" className="w-20 h-20 rounded-md" />
                                <div className="ml-4">
                                    <h1 className="font-bold">Vintage Camera</h1>
                                    <h2 className="text-sm mt-1">Classic film camera in excellent condition</h2>
                                    <h3 className="text-xs mt-1">
                                        3000₵
                                        <span className="ml-2">Electronics</span>
                                        <span className="ml-2">Posted 05/31/25</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2 flex gap-3">
                                <button className="flex items-center text-sm text-blue-600 hover:underline">
                                    <EditIcon className="w-4 h-4 mr-1" />
                                    Edit
                                </button>
                                <button className="flex items-center text-sm text-red-600 hover:underline">
                                    <Trash className="w-4 h-4 mr-1" />
                                    Delete
                                </button>
                            </div>
                        </div>

                        <div className="relative border rounded-md mt-6 border-purple-300 w-[95%] mx-auto p-4 h-40">
                            <div className="flex">
                                <img src={iphonexr} alt="iphone xr" className="w-20 h-20 rounded-md" />
                                <div className="ml-4">
                                    <h1 className="font-bold">Vintage Camera</h1>
                                    <h2 className="text-sm mt-1">Brand new iphone xr </h2>
                                    <h3 className="text-xs mt-1">
                                        7500₵
                                        <span className="ml-2">Electronics</span>
                                        <span className="ml-2">Posted 1/11/25</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2 flex gap-3">
                                <button className="flex items-center text-sm text-blue-600 hover:underline">
                                    <EditIcon className="w-4 h-4 mr-1" />
                                    Edit
                                </button>
                                <button className="flex items-center text-sm text-red-600 hover:underline">
                                    <Trash className="w-4 h-4 mr-1" />
                                    Delete
                                </button>
                            </div>
                        </div>
                        <div className="relative border rounded-md mt-6 border-purple-300 w-[95%] mx-auto p-4 h-40">
                            <div className="flex">
                                <img src={jeansjacket} alt="Jeans Jacket" className="w-20 h-20 rounded-md" />
                                <div className="ml-4">
                                    <h1 className="font-bold">Jeans Jacket</h1>
                                    <h2 className="text-sm mt-1">Lightly Used Classic Blue Jeans Jacket </h2>
                                    <h3 className="text-xs mt-1">
                                        145.00₵
                                        <span className="ml-2">Clothing</span>
                                        <span className="ml-2">Posted 04/07/25</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2 flex gap-3">
                                <button className="flex items-center text-sm text-blue-600 hover:underline">
                                    <EditIcon className="w-4 h-4 mr-1" />
                                    Edit
                                </button>
                                <button className="flex items-center text-sm text-red-600 hover:underline">
                                    <Trash className="w-4 h-4 mr-1" />
                                    Delete
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )

}
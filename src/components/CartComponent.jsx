import { TrashIcon } from "lucide-react";
import vintage from "../assets/images/vintage.jpg"

export default function CartComponent() {
    return (
        <>
            <div className="flex flex-row">
                <div className="border border-gray-300 rounded-md w-[60%] ml-12 md:ml-6 sm:ml-1 lg:ml-12
             py-5 hover:shadow-2xl">
                    <div className="flex justify-between">
                        <div className="flex flex-row">
                            <img src={vintage} alt="vintage camera" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md ml-4 sm:ml-8" />
                            <div className=" ml-5  mt-1 flex flex-col">
                                <h3 className="font-bold ">Vintage Camera</h3>
                                <p className="text-sm text-gray-600">by John Doe</p>
                                <p className="font-bold text-purple-600">₵3000</p>
                            </div>
                        </div>

                        <div className=" flex flex-row items-center">
                            <div className="border border-gray-400 rounded-md w-8 h-8 mr-5 flex justify-center items-center">
                                 <div className="w-3 h-[2px] bg-gray-600"></div>  
                            </div>
                             <h1 className="mr-5">1</h1>
                             <div className="border border-gray-400 rounded-md w-8 h-8 mr-5 flex justify-center items-center">
                                 <div className="w-7 text-3xl text-center mb-3 text-gray-700 h-7">+</div>  
                            </div>
                            <div><TrashIcon size={18} /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
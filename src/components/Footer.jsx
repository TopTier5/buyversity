import { Facebook, Twitter, Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export default function Footer() {
    return (

        <footer className="bg-gradient-to-r from-[#561D87] via-[#22378A] to-[#2F2F82] text-white py-12 px-6 mt-[800px] h-[45vh]">
            <div className="max-w-7xl mx-auto">
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 ml-10">
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-md font-bold text-xl cursor-pointer">
                                B</div>
                            <span className="font-bold text-xl text-white bg-clip-text bg-gradient-to-r from-purple-900 to-blue-900">
                                BuyVersity</span>
                        </div>
                        <p className="text-purple-100 ml-10">The ultimate student marketplace for trusted products and amazing deals.</p>
                        <div className="flex space-x-4 ml-10">
                            <span className="text-purple-300 hover:text-white cursor-pointer"><Facebook size={20}/> </span>
                            <span className="text-purple-300 hover:text-white cursor-pointer"><Twitter size={20}/> </span>
                            <span className="text-purple-300 hover:text-white cursor-pointer"><Instagram size={20}/> </span>
                        </div>

                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-xl mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li className="text-purple-300 hover:text-white cursor-pointer">Home</li>
                            <li className="text-purple-300 hover:text-white cursor-pointer">About</li>
                            <li className="text-purple-300 hover:text-white cursor-pointer">Become A Vendor</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-xl mb-4">All Categories</h4>
                        <ul className="space-y-2">
                            <li className="text-purple-300 hover:text-white cursor-pointer">Electronics</li>
                            <li className="text-purple-300 hover:text-white cursor-pointer">Clothing & Accessories</li>
                            <li className="text-purple-300 hover:text-white cursor-pointer">Kitchen & Cooking</li>
                            <li className="text-purple-300 hover:text-white cursor-pointer">Books</li>
                            <li className="text-purple-300 hover:text-white cursor-pointer">Others</li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <h4 className="font-semibold text-xl mb-4">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail size={17} className="text-purple-300"/>
                                <span className="text-purple-300 ">support@buyversity.com</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone size={17} className="text-purple-300"/>
                                <span className="text-purple-300">+233 30 2093 760</span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <p></p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </footer>
    );
}
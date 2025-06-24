import { User, Edit, Mail, Calendar, Phone, LocateIcon } from "lucide-react";
import { useState } from "react";


export default function UserCard() {

    const [isEditing, setIsEditing] = useState(false);

    const [email, setEmail] = useState("amaking2@ug.edu.gh");
    const [phone, setPhone] = useState("+233 24 123 4567");
    const [location, setLocation] = useState("University of Ghana, Legon");


    return (

        <section>
            <h1 className="mt-8 font-bold text-3xl sm:text-4xl ml-4 sm:ml-12 md:ml-20 lg:ml-28 ">Profile</h1>
            <p className="mt-2 text-sm sm:text-base text-gray-700 ml-4 sm:ml-12 md:ml-20 lg:ml-28">Manage your profile information and settings</p>

            <div className="flex flex-col md:flex-row">
                <div className="border w-full sm:w-[80%] md:w-[70%] lg:w-[65%] h-80 ml-4 sm:ml-8 md:ml-20 lg:ml-28 mt-10 rounded-md border-purple-300">
                    <div className="flex justify-between items-start">

                        <div className="flex flex-row">
                            <div className=" ml-6 mt-6 w-18 h-18 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                                <User className="w-14 h-14 text-white" /></div>
                            <div className="mt-7 ml-4">
                                <h1 className="text-3xl">Ama King</h1>
                                <div className="flex flex-row gap-1">
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    <p className="text-sm text-gray-500">Joined March 2025</p>
                                </div>
                            </div>
                        </div>

                        <div
                            onClick={() => setIsEditing(!isEditing)}
                            className="mt-10 mr-10 border border-purple-300 w-20 h-10 flex items-center justify-center gap-2 rounded-md cursor-pointer hover:bg-purple-50 transition">
                            <Edit className="w-4 h-4" />
                            <h1 className="text-sm font-bold">Edit</h1>
                        </div>


                    </div>
                    <div className="flex flex-col mt-6 ml-6 text-sm text-gray-700 gap-3">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-6 text-gray-500" />
                                {isEditing ? (
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
                                    />
                                ) : (
                                    <h1>{email}</h1>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-gray-500" />
                            {isEditing ? (
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
                                />
                            ) : (
                                <h1>{phone}</h1>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            <LocateIcon className="w-5 h-5 text-gray-500" />
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
                                />
                            ) : (
                                <h1>{location}</h1>
                            )}
                        </div>

                        {isEditing && (
                            <div className="mt-4 ml-6">
                                <button
                                    className="px-4 py-2 bg-purple-600 text-white text-sm rounded hover:bg-purple-700"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Save
                                </button>
                            </div>
                        )}



                    </div>

                </div>
            </div>

        </section >



    );


}
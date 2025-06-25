import { useState } from "react";
import VendorNav from "../components/VendorNav";
import { ArrowLeft} from "lucide-react"
import { User } from "lucide-react"
import { Link } from "react-router";

export default function VendorForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [condition, setCondition] = useState("");
    const [university, setUniversity] = useState("");
    const [customUniversity, setCustomUniversity] = useState("");

    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const adData = {
            title, description, price, category, location,condition,
            university: university === "other" ? customUniversity : university,
            date: today,
        };

        try {
            const response = await fetch("/adverts", data,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(adData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Ad posted successfully!");
            } else {
                alert(`Failed: ${result.message || "Something went wrong"}`);
            }
        } catch (error) {
            console.error("Error posting ad:", error);
            alert("An error occurred. Try again.");
        }
    };

    return (
        <>
            
         <nav className="flex justify-between py-3 px-6 bg-white shadow-xl">
                <Link to="/">
                <div className="flex items-center gap-2 ml-4 sm:ml-6 md:ml-10  ">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-gradient-to-r
                  from-purple-600 to blue-600 rounded cursor-pointer" />
                    <h1 className="font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600 cursor-pointer">Back to Marketplace</h1>
                </div></Link>
                <div className="flex justify-center items-center text-center px-3 ">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Create Advertisement</h1>
                </div>
                <div className="flex flex-row sm:flex-row mr-4 sm:mr-6 md:mr-10 lg:mr-16 ">
                    <div className="mr-3 w-10 h-10  rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center ">
                        <User className="w-5 h-5 text-white " />
                    </div>
                    <Link to="/vendor-dashboard">
                        <div className="border border-[#D8B4FE] bg-gradient-to-r from-purple-600 to-blue-600
                 text-white pt-2 pb-2 pl-3 pr-3 hover:shadow-2xl shadow-blue-700
                text-sm font-semibold rounded-md cursor-pointer "> Back to Dashboard
                        </div>


                    </Link>

                </div>
            </nav>
        
            <form onSubmit={handleSubmit} className="flex flex-col items-center min-h-screen bg-purple-200">
                <div className="mt-6 rounded-md min-h-screen w-full max-w-4xl bg-white px-6 py-8">
                    <h1 className="w-full text-center text-2xl sm:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 py-6 rounded-t-md">
                        Post New Ad
                    </h1>

                    <div className="flex flex-col p-8">
                        <div>
                            <label>Product Title<span className="text-red-700">*</span></label>
                            <input
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter your product title"
                                className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                                required
                            />
                        </div>

                        <div className="mt-4 flex flex-row">
                            <div className="flex-1/2">
                                <label>Category<span className="text-red-700">*</span></label>
                                <select
                                    name="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="border border-gray-400 rounded-md w-[90%] h-9 mt-2"
                                    required
                                >
                                    <option disabled value="">Select a Category</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="hostel essentials">Hostel Essentials</option>
                                    <option value="clothing and accessories">Clothing and Accessories</option>
                                    <option value="books">Books</option>
                                    <option value="sports">Sports</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="flex-1/2 ml-5">
                                <label>Price (₵)<span className="text-red-700">*</span></label>
                                <input
                                    type="number"
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="0.00"
                                    className="border border-gray-400 rounded-md w-[90%] h-9 mt-2"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label>Description<span className="text-red-700">*</span></label>
                            <textarea
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe your product in detail..."
                                className="border border-gray-400 rounded-md w-[95%] h-20 mt-2"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label>Upload Images<span className="text-red-700">*</span></label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                accept="image/*"
                                multiple
                                className="border border-gray-400 rounded-md w-[95%] h-20 mt-2"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label>Condition <span className="text-red-700">*</span></label>
                            <div className="flex gap-3">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="condition"
                                        value="new"
                                        checked={condition === "new"}
                                        onChange={(e) => setCondition(e.target.value)}
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">New</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="condition"
                                        value="used"
                                        checked={condition === "used"}
                                        onChange={(e) => setCondition(e.target.value)}
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Used</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label>University/Tertiary Institution<span className="text-red-700">*</span></label>
                            <select
                                value={university}
                                onChange={(e) => setUniversity(e.target.value)}
                                className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                                required
                            >
                                <option disabled value="">Select a University</option>
                                <option value="university of ghana,legon">University of Ghana, Legon</option>
                                <option value="university of cape coast">University of Cape Coast</option>
                                <option value="ashesi university">Ashesi University</option>
                                <option value="central university">Central University</option>
                                <option value="kwame nkrumah university of science and technology">KNUST</option>
                                <option value="university of health and allied sciences">UHAS</option>
                                <option value="university of professional studies">UPSA</option>
                                <option value="ghana communication technology university">GCTU</option>
                                <option value="regional maritime university">Regional Maritime University</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {university === "other" && (
                            <div className="mt-4">
                                <label>Enter Your University <span className="text-red-700">*</span></label>
                                <input
                                    type="text"
                                    value={customUniversity}
                                    onChange={(e) => setCustomUniversity(e.target.value)}
                                    className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                                    required
                                />
                            </div>
                        )}

                        <div className="mt-4">
                            <label>Location<span className="text-red-700">*</span></label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Enter your location"
                                className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <label>Date<span className="text-red-700">*</span></label>
                            <input
                                type="date"
                                value={today}
                                readOnly
                                className="border border-gray-400 rounded-md w-[95%] mt-2 h-9"
                                required
                            />
                        </div>

                        <div className="mt-10 text-center">
                            <button type="submit" className="text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 border border-none rounded-md w-[95%] h-10 mr-9 cursor-pointer hover:shadow-2xl shadow-blue-700">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

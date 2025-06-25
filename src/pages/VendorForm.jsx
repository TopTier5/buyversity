import { useState } from "react";
import VendorNav from "../components/VendorNav";
import useSWR from "swr";
import { apiFetcher, apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";
import { Navigate, useNavigate } from "react-router";



export default function VendorForm() {

    const [university, setUniversity] = useState('');
    const [customUniversity, setCustomUniversity] = useState('');


    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // Handle "other" university
        const universityValue =
            form.university.value === "other"
                ? form.customUniversity.value
                : form.university.value;
        formData.set("university", universityValue); // override with correct value

        try {
            const response = await apiClient.post("/adverts", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
                    // DON'T manually set content-type with FormData
                },
            });

            console.log(response.data);
            navigate(`/user-page?id=${response.data.data.id}`);
        } catch (error) {
            console.error("Submission failed:", error.response?.data || error.message);
        }
    };



    return (


        <>
            <VendorNav />


            <section className="flex flex-col items-center min-h-screen bg-purple-200" >
                <form onSubmit={handleSubmit} className="flex flex-col p-8">
<div className="mt-6 rounded-md min-h-screen w-full max-w-4xl bg-white px-6 py-8">
                    <div>
                        <h1 className="w-full text-center text-2xl sm:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 py-6 rounded-t-md">
                            Post New Ad
                        </h1>
                    </div>


                    <div>
                        <label htmlFor="title">Product Title<span className="text-red-700">*</span></label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter your product title"
                            className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                            required
                        />
                    </div>

                    {/* Category and Price */}
                    <div className="mt-4 flex flex-row">
                        <div className="flex-1/2">
                            <label htmlFor="category">Category<span className="text-red-700">*</span></label>
                            <select
                                name="category"
                                id="category"
                                className="border border-gray-400 rounded-md w-[90%] h-9 mt-2"
                                required
                            >
                                <option disabled selected>Select a Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="hostel essentials">Hostel Essentials</option>
                                <option value="clothing and accessories">Clothing and Accessories</option>
                                <option value="books">Books</option>
                                <option value="sports">Sports</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex-1/2 ml-5">
                            <label htmlFor="price">Price (₵)<span className="text-red-700">*</span></label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="0.00"
                                className="border border-gray-400 rounded-md w-[90%] h-9 mt-2"
                                required
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-4">
                        <label htmlFor="description">Description<span className="text-red-700">*</span></label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Describe your product in detail..."
                            className="border border-gray-400 rounded-md w-[95%] h-20 mt-2"
                            required
                        />
                    </div>

                    {/* Images */}
                    <div className="mt-4">
                        <label htmlFor="images">Upload Images<span className="text-red-700">*</span></label>
                        <input
                            type="file"
                            name="images"
                            id="images"
                            accept="image/*"
                            multiple
                            className="border border-gray-400 rounded-md w-[95%] h-20 mt-2"
                            required
                        />
                    </div>

                    {/* Condition */}
                    <div className="mt-4">
                        <label>Condition <span className="text-red-700">*</span></label>
                        <div className="flex gap-3">
                            <label className="inline-flex items-center">
                                <input type="radio" name="condition" value="new" className="form-radio" required />
                                <span className="ml-2">New</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" name="condition" value="used" className="form-radio" required />
                                <span className="ml-2">Used</span>
                            </label>
                        </div>
                    </div>

                    {/* University */}
                    <div className="mt-4">
                        <label htmlFor="university">University/Tertiary Institution<span className="text-red-700">*</span></label>
                        <select
                            name="university"
                            id="university"
                            className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                            required
                            value={university}
                            onChange={(e) => setUniversity(e.target.value)}
                        >
                            <option disabled selected>Select a Category</option>
                            <option value="university of ghana,legon">University of Ghana, Legon</option>
                            <option value="university of cape coast">University of Cape Coast</option>
                            <option value="ashesi university">Ashesi University</option>
                            <option value="central university">Central University</option>
                            <option value="kwame nkrumah university of science and technology">KNUST</option>
                            <option value="university of health and allied sciences">UHAS</option>
                            <option value="university of professional studies">UPSA</option>
                            <option value="ghana communication technology university">GCTU</option>
                            <option value="regional maritime university">Regional Maritime University</option>
                            <option value="accra technical university">Accra Technical University</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Custom University */}
                    {university === "other" && (
                        <div className="mt-4">
                            <label htmlFor="customUniversity">Enter Your University If not listed above <span className="text-red-700">*</span></label>
                            <input
                                type="text"
                                name="customUniversity"
                                id="customUniversity"
                                placeholder="Enter your university name"
                                value={customUniversity}
                                onChange={(e) => setCustomUniversity(e.target.value)}
                                className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                                required
                            />
                        </div>
                    )}

                    {/* Location */}
                    <div className="mt-4">
                        <label htmlFor="location">Location<span className="text-red-700">*</span></label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Enter your location"
                            className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                            required
                        />
                    </div>

                    {/* Date */}
                    <div className="mt-4">
                        <label htmlFor="date">Date<span className="text-red-700">*</span></label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            className="border border-gray-400 rounded-md w-[95%] mt-2 h-9"
                            required
                            min={today}
                            max={today}
                        />
                    </div>

                    {/* Submit */}
                    <div className="mt-10 text-center">
                        <button className="text-xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 border border-none rounded-md w-[95%] h-10 mr-9 cursor-pointer hover:shadow-2xl shadow-blue-700">
                            Submit
                        </button>
                    </div>
                    </div>
                    </form>
          </section>  

                
        </>
    );
}
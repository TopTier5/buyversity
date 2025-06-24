import { useState } from "react";
import VendorNav from "../components/VendorNav";
import { useParams } from "react-router";


export default function EditForm() {
     const { id } = useParams();
    const [university, setUniversity] = useState('');
    const [customUniversity, setCustomUniversity] = useState('');

     console.log("Editing ad with ID:", id)

    

    return (

        <>
            <VendorNav />


            <section className="flex flex-col items-center min-h-screen bg-purple-200" >

                <div className="mt-6 rounded-md min-h-screen w-full max-w-4xl bg-white px-6 py-8">
                    <div>
                        <h1 className="w-full text-center text-2xl sm:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 py-6 rounded-t-md">
                            Edit Ad
                        </h1>
                    </div>


                    <div>
                        <form action="" className="flex flex-col  p-8">
                            <div>
                                <label htmlFor="Product Title">Product Title<span className="text-red-700">*</span></label>
                                <input type="text" name="title" id="text" placeholder="Enter your product title"
                                    className="border border-gray-400 rounded-md w-[95%] h-9 mt-2" required />
                            </div>
                            <div className="mt-4 flex flex-row">
                                <div className="flex-1/2">
                                    <label htmlFor="Category">Category<span className="text-red-700">*</span></label>
                                    <select name="category" id="category" className=" border border-gray-400 rounded-md  w-[90%]
                                  h-9 mt-2 " required>
                                        <option selected disabled>Select a Category
                                        </option>
                                        <option value="electronics">Electronics</option>
                                        <option value="furniture">Hostel Essesentials</option>
                                        <option value="clothing">Clothing & Accessories</option>
                                        <option value="books">Books</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="flex-1/2 ml-5">
                                    <label htmlFor="Price">Price (₵)<span className="text-red-700">*</span></label>
                                    <input type="number" name="price" id="price" placeholder="0.00" className="border border-gray-400 rounded-md w-[90%] h-9
                                    mt-2 " required />
                                </div>
                            </div >
                            <div className="mt-4">
                                <label htmlFor="Description">Description<span className="text-red-700">*</span></label>
                                <textarea name="description" id="text" placeholder="Describe your product in detail..."
                                    className="border border-gray-400 rounded-md w-[95%] h-20 mt-2" required />
                            </div>


                            <div className=" mt-4">
                                <div><label htmlFor="University/Tertiary Institution" >University/Tertiary Institution<span className="text-red-700">*</span></label>
                                    <select name="university/tertiaryinstituton" id="university/tertiayinstitution" className="border border-gray-400 rounded-md w-[95%] h-9 mt-2" required
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}>
                                        <option selected disabled>Select a Category
                                        </option>
                                        <option value="university of ghana,legon">University of Ghana, Legon</option>
                                        <option value="university of cape coast">University of Cape Coast</option>
                                        <option value="ashesi university">Ashesi University</option>
                                        <option value="central university">Central University</option>
                                        <option value="kwame nkrumah university of science and technology">Kwame Nkrumah University of Science and Technology</option>
                                        <option value="university of health and allied sciences">University of Health and Allied Sciences</option>
                                        <option value="university of professional studies">University of Professional Studies</option>
                                        <option value="ghana technology communication university">Ghana Technology Communication University</option>
                                        <option value="regional maritime university">Regional Maritime University</option>
                                        Accra Technical University
                                        <option value="other">Other</option>
                                    </select>
                                </div>
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

                                    />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="Location"> Location<span className="text-red-700">*</span></label>
                                    <input type="text" id="location" placeholder="Enter your location" className="border border-gray-400 rounded-md w-[95%] h-9
                                    mt-2 " required />
                                </div>

                                <div class=" flex w-full h-[80px] max-w-md items-center justify-center mt-4  mx-auto  gap-4 text-base font-medium">
                                    <button class="flex-1 bg-white border border-gray-400 text-black text-base font-medium rounded-md p-4 hover:bg-gray-300 ">Cancel</button>
                                    <button class="flex-1 bg-[#763FFB] text-white text-base font-medium rounded-md p-4 hover:bg-[#941BFA]">Update Ad</button>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </section>
        </>
    );
}
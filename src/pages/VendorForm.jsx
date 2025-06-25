import { useState } from "react";
import { useNavigate } from "react-router";
import VendorNav from "../components/VendorNav";
import { apiClient } from "../api/client";
import { mutate } from "swr";

export default function VendorForm() {
  const [university, setUniversity] = useState("");
  const [customUniversity, setCustomUniversity] = useState("");
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);


    if (form.university.value === "Other") {
      formData.set("university", form.customUniversity.value);
    }

    try {
    
      const { data } = await apiClient.post("/adverts", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}` },
      });

      const newAdvert = data.data;
     
      await mutate(
        "/adverts",
        (prev = []) => [newAdvert, ...prev],
        false               
      );

      
      mutate("/adverts");

     
      navigate("/user-page");
    } catch (err) {
      console.error("Submission failed:", err.response?.data || err.message);
    }
  };

  
  return (
    <>
      <VendorNav />

      <section className="flex flex-col items-center min-h-screen bg-purple-200">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-8 w-full max-w-4xl"
        >
          <div className="bg-white rounded-md shadow px-6 py-8">
            <h1 className="text-center text-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 py-6 rounded-t-md">
              Post New Ad
            </h1>

            
            <label className="block mt-4 font-medium">
              Product Title<span className="text-red-600">*</span>
              <input
                name="title"
                required
                placeholder="Enter your product title"
                className="border border-gray-400 rounded-md w-full h-9 mt-2 px-2"
              />
            </label>

          
            <div className="flex flex-col sm:flex-row gap-5 mt-4">
              <label className="flex-1 font-medium">
                Category<span className="text-red-600">*</span>
                <select
                  name="category"
                  required
                  defaultValue=""
                  className="border border-gray-400 rounded-md w-full h-9 mt-2 px-2"
                >
                  <option value="" disabled>
                    Select a Category
                  </option>
                  <option value="Electronics">Electronics</option>
                  <option value="Hostel Essentials">Hostel Essentials</option>
                  <option value="Clothing & Accessories">
                    Clothing and Accessories
                  </option>
                  <option value="Books">Books</option>
                  <option value="Sports">Sports</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="flex-1 font-medium">
                Price (₵)<span className="text-red-600">*</span>
                <input
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  placeholder="0.00"
                  className="border border-gray-400 rounded-md w-full h-9 mt-2 px-2"
                />
              </label>
            </div>

            <label className="block mt-4 font-medium">
              Description<span className="text-red-600">*</span>
              <textarea
                name="description"
                required
                placeholder="Describe your product in detail..."
                className="border border-gray-400 rounded-md w-full h-24 mt-2 p-2"
              />
            </label>

           
            <label className="block mt-4 font-medium">
              Upload Images<span className="text-red-600">*</span>
              <input
                name="images"
                type="file"
                accept="image/*"
                multiple
                required
                className="border border-gray-400 rounded-md w-full mt-2"
              />
            </label>

            
            <fieldset className="mt-4">
              <legend className="font-medium">
                Condition<span className="text-red-600">*</span>
              </legend>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-1">
                  <input type="radio" name="condition" value="New" required />
                  New
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="condition" value="Used" required />
                  Used
                </label>
              </div>
            </fieldset>

           
            <label className="block mt-4 font-medium">
              University/Tertiary Institution<span className="text-red-600">*</span>
              <select
                name="university"
                required
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="border border-gray-400 rounded-md w-full h-9 mt-2 px-2"
              >
                <option value="" disabled>
                  Select an Institution
                </option>
                <option value="University of Ghana, Legon">
                  University of Ghana, Legon
                </option>
                <option value="University of Cape Coast">
                  University of Cape Coast
                </option>
                <option value="Ashesi University">Ashesi University</option>
                <option value="KNUST">KNUST</option>
                <option value="UPSA">UPSA</option>
                <option value="Other">Other</option>
              </select>
            </label>

            {university === "Other" && (
              <label className="block mt-4 font-medium">
                Enter Your University<span className="text-red-600">*</span>
                <input
                  name="customUniversity"
                  required
                  value={customUniversity}
                  onChange={(e) => setCustomUniversity(e.target.value)}
                  placeholder="Specify your institution"
                  className="border border-gray-400 rounded-md w-full h-9 mt-2 px-2"
                />
              </label>
            )}

            
            <label className="block mt-4 font-medium">
              Location<span className="text-red-600">*</span>
              <input
                name="location"
                required
                placeholder="Enter your location"
                className="border border-gray-400 rounded-md w-full h-9 mt-2 px-2"
              />
            </label>

            
            <label className="block mt-4 font-medium">
              Date<span className="text-red-600">*</span>
              <input
                name="date"
                type="date"
                min={today}
                max={today}
                defaultValue={today}
                required
                className="border border-gray-400 rounded-md w-full h-9 mt-2 px-2"
              />
            </label>

            
            <button
              type="submit"
              className="mt-8 w-full h-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-md hover:shadow-2xl shadow-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

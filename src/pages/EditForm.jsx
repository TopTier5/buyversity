import { use, useState } from "react";
import VendorNav from "../components/VendorNav";
import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { apiClient } from "../api/client";
import { ArrowLeft} from "lucide-react"
import { User } from "lucide-react"
import { Link } from "react-router";
import { toast } from "sonner";


export default function EditForm() {
     const { id } = useParams();
    const [university, setUniversity] = useState('');
    const [customUniversity, setCustomUniversity] = useState('');
    const navigate = useNavigate();

     console.log("Editing ad with ID:", id)

    const [advert, setAdvert] = useState({})
    const getAdvert = () => {
        apiClient.get(`/api/v1/adverts/${id}`)
            .then((response) => {
                console.log(response.data);
                setAdvert(response.data.data);
            })
        .catch ((error) => {
            console.log(error);
            toast.error('Failed to load advert data');
        })

    }

        useEffect(getAdvert, []);


        const putAdvert = async (data) => {
            try {
            
            const response = await apiClient.put(`/api/v1/adverts/${id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log (response);
            navigate(-1); 
        } catch (error) {
            console.log(error);
        };

    }

    // Handle delete advert
    const handleDelete = async () => {
        // Show confirmation dialog
        const confirmed = window.confirm('Are you sure you want to delete this advert? This action cannot be undone.');
        
        if (!confirmed) return;

        try {
            // Get the token from localStorage or wherever you store it
            const token = localStorage.getItem('authToken'); // Adjust based on your auth implementation
            
            const response = await apiClient.delete(`/api/v1/adverts/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}` // Add authorization header
                },
            });
            
            console.log(response);
            toast.success('Advert deleted successfully!');
            
            // Navigate back to dashboard after successful deletion
            setTimeout(() => {
                navigate('/vendor-dashboard');
            }, 1500);
            
        } catch (error) {
            console.log(error);
            
            // Handle different error types
            if (error.response?.status === 403) {
                toast.error('You are not authorized to delete this advert');
            } else if (error.response?.status === 404) {
                toast.error('Advert not found');
            } else if (error.response?.status === 401) {
                toast.error('Please log in to delete this advert');
            } else {
                toast.error('Failed to delete advert. Please try again.');
            }
        }
    };

        
   

    return (

        <>

         <nav className="flex justify-between py-3 px-6 bg-white shadow-xl">
                <Link to="/user-page">
                <div className="flex items-center gap-2 ml-4 sm:ml-6 md:ml-10  ">
                    <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-gradient-to-r
                  from-purple-600 to blue-600 rounded cursor-pointer" />
                    <h1 className="font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600 cursor-pointer">Back to Marketplace</h1>
                </div></Link>
               
                <div className="flex flex-row sm:flex-row mr-4 sm:mr-6 md:mr-10 lg:mr-16 ">
                    <div className="mr-3 w-10 h-10  rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center ">
                        <User className="w-5 h-5 text-white " />
                    </div>
                    <Link to="/vendor-dashboard">
                        <div className="border border-[#D8B4FE] bg-gradient-to-r from-purple-600 to-blue-600
                 text-white pt-2 pb-2 pl-3 pr-3 hover:shadow-2xl shadow-blue-700
                text-sm font-semibold rounded-md cursor-pointer ">Back to Dashboard
                        </div>


                    </Link>

                </div>
            </nav>
        

            <section className="flex flex-col items-center min-h-screen bg-purple-200" >

                <div className="mt-6 rounded-md min-h-screen w-full max-w-4xl bg-white px-6 py-8">
                    <div>
                        <h1 className="w-full text-center text-2xl sm:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 py-6 rounded-t-md">
                            Edit Ad
                        </h1>
                    </div>


                    <div>
                        <form action={putAdvert} className="flex flex-col  p-8">
                            <div>
                                <label htmlFor="Product Title">Product Title<span className="text-red-700">*</span></label>
                                <input type="text" name="title" id="text" placeholder="Enter your product title"
                                    className="border border-gray-400 rounded-md w-[95%] h-9 mt-2" required 
                                    defaultValue={advert.title} />
                            </div>
                            <div className="mt-4 flex flex-row">
                                <div className="flex-1/2">
                                    <label htmlFor="Category">Category<span className="text-red-700">*</span></label>
                                    <select name="category" id="category" className=" border border-gray-400 rounded-md  w-[90%]
                                  h-9 mt-2 " required
                                  defaultValue= {advert.category}> 
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
                                    mt-2 " required
                                    defaultValue= {advert.price} />
                                </div>
                            </div >
                            <div className="mt-4">
                                <label htmlFor="Description">Description<span className="text-red-700">*</span></label>
                                <textarea name="description" id="text" placeholder="Describe your product in detail..."
                                    className="border border-gray-400 rounded-md w-[95%] h-20 mt-2" required 
                                    defaultValue= {advert.description}/>
                            </div>


                            <div className=" mt-4">
                                <div><label htmlFor="University/Tertiary Institution" >University/Tertiary Institution<span className="text-red-700">*</span></label>
                                    <select name="university/tertiaryinstituton" id="university/tertiayinstitution" className="border border-gray-400 rounded-md w-[95%] h-9 mt-2" required
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}
                                        defaultValue={advert.university}>
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
                                    <label htmlFor="Location"> Location<span className="text-red-700">*</span></label>
                                    <input type="text" id="location" placeholder="Enter your location" className="border border-gray-400 rounded-md w-[95%] h-9
                                    mt-2 " required 
                                    defaultValue= {advert.location}/>
                                </div>

                                <div class=" flex w-full h-[80px] max-w-md items-center justify-center mt-4  mx-auto  gap-4 text-base font-medium">
                                    <button 
                                        type="button"
                                        onClick={handleDelete}
                                        className="flex-1 bg-gradient-to-r from-red-500 to-red-600 font-medium rounded-md p-3 text-white hover:from-red-600 hover:to-red-700 transition-colors"
                                    ><Link to="/user-page">
                                    Delete Ad
                                    
                                    </Link>
                                        
                                    </button>
                                    
                                    
                                    <button class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600   font-medium rounded-md p-3 text-white">
                                        <Link to="/user-page">
                                        
                                        Update Ad
                                    
                                        </Link>
                                        
                                    </button>
                                    
                                </div>

                            </div>
                        </form>
                    </div>

                </div>

            </section>
        </>
    );
}
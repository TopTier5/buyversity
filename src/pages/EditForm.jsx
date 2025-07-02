import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { apiClient } from "../api/client"; 
import { ArrowLeft, User } from "lucide-react";
import { toast } from "sonner";

export default function EditForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({title: '',category: '',price: '',description: '',university: '', location: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    console.log("Editing ad with ID:", id);

    
    useEffect(() => {
        const getAdvert = async () => {
            try {
                setLoading(true);
                setError(null); 

                const response = await apiClient.get(`/adverts/${id}`);
                console.log("Fetched advert data:", response.data);
                setFormData({
                    title: response.data.title || '',
                    category: response.data.category || '',
                    price: response.data.price || '',
                    description: response.data.description || '',
                    university: response.data.university || '',
                    location: response.data.location || '',});
                setLoading(false);
            } catch (err) {
                 console.error("Detailed error fetching advert:", err); 

                if (err.response) {
                    
                    console.error('Server responded with:', err.response.data);
                    console.error('Status code:', err.response.status);
                    console.error('Headers:', err.response.headers);

                    let errorMessage = `Failed to load advert: ${err.response.status}`;
                    if (err.response.data && err.response.data.message) {
                        errorMessage += ` - ${err.response.data.message}`;
                    } else if (err.response.status === 404) {
                        errorMessage = "Advert not found.";
                    } else if (err.response.status === 401 || err.response.status === 403) {
                        errorMessage = "You are not authorized to view this advert or need to log in.";
                    }
                    toast.error(errorMessage);
                    setError(errorMessage);
                } else if (err.request) {
                  
                    console.error('No response received:', err.request);
                    toast.error('Failed to load advert: No response from server. Please check your network connection.');
                    setError('No response from server. Check your internet connection or server status.');
                } else {
                    
                    console.error('Error in request setup:', err.message);
                    toast.error('Failed to load advert: An unexpected error occurred.');
                    setError(`An unexpected error occurred: ${err.message}`);
                }
                setLoading(false);
            }
        };

        if (id) {
            getAdvert();
        }  }, [id]); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        setError(null); 
        toast.dismiss(); 

        try {
            const token = localStorage.getItem('authToken'); 
            if (!token) {
                toast.error("Authentication required. Please log in.");
                return;
            }

            const response = await apiClient.put(`/adverts/${id}`, formData, { 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, 
                },
            });

            console.log("Advert updated successfully:", response.data);
            toast.success('Advert updated successfully!');
            navigate('/vendor-dashboard'); 
        } catch (err) {
            console.error("Error updating advert:", err);
            if (err.response) {
                if (err.response.status === 403) {
                    toast.error("You are not authorized to update this advert.");
                } else if (err.response.data && err.response.data.message) {
                    toast.error(`Update failed: ${err.response.data.message}`);
                } else {
                    toast.error("Failed to update advert. Please try again.");
                }
            } else if (err.request) {
                toast.error("No response from server. Check network.");
            } else {
                toast.error("An unexpected error occurred: " + err.message);
            }
        }
    };

    const handleDelete = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this advert? This action cannot be undone.');

        if (!confirmed) return;

        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                toast.error("Authentication required to delete.");
                return;
            }

            const response = await apiClient.delete(`/adverts/${id}`, { 
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });

            console.log(response);
            toast.success('Advert deleted successfully!');
            setTimeout(() => {
                navigate('/vendor-dashboard');
            }, 1500);

        } catch (error) {
            console.log(error);
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

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-purple-200">
                <p>Loading advert details...</p>
            </div>
        );
    }

    if (error && !formData.title) { 
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-purple-200">
                <p style={{ color: 'red' }}>Error: {error}</p>
                <button onClick={() => navigate(-1)} className="mt-4 p-2 bg-blue-600 text-white rounded">Go Back</button>
            </div>
        );
    }

    return (
        <>
            <nav className="flex justify-between py-3 px-6 bg-white shadow-xl">
                <Link to="/user-page">
                    <div className="flex items-center gap-2 ml-4 sm:ml-6 md:ml-10">
                        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded cursor-pointer" />
                        <h1 className="font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 cursor-pointer">Back to Marketplace</h1>
                    </div>
                </Link>

                <div className="flex flex-row sm:flex-row mr-4 sm:mr-6 md:mr-10 lg:mr-16 ">
                    <div className="mr-3 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center ">
                        <User className="w-5 h-5 text-white " />
                    </div>
                    <Link to="/vendor-dashboard">
                        <div className="border border-[#D8B4FE] bg-gradient-to-r from-purple-600 to-blue-600 text-white pt-2 pb-2 pl-3 pr-3 hover:shadow-2xl shadow-blue-700 text-sm font-semibold rounded-md cursor-pointer ">Back to Dashboard</div>
                    </Link>
                </div>
            </nav>

            <section className="flex flex-col items-center min-h-screen bg-purple-200">
                <div className="mt-6 rounded-md min-h-screen w-full max-w-4xl bg-white px-6 py-8">
                    <div>
                        <h1 className="w-full text-center text-2xl sm:text-3xl lg:text-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 py-6 rounded-t-md">
                            Edit Ad
                        </h1>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="flex flex-col p-8">
                            <div>
                                <label htmlFor="title">Product Title<span className="text-red-700">*</span></label>
                                <input type="text" name="title"  id="title" placeholder="Enter your product title" className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                                    required
                                    value={formData.title} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="mt-4 flex flex-row">
                                <div className="flex-1/2">
                                    <label htmlFor="category">Category<span className="text-red-700">*</span></label>
                                    <select name="category" id="category" className="border border-gray-400 rounded-md w-[90%] h-9 mt-2"
                                        required
                                        value={formData.category} 
                                        onChange={handleChange} 
                                    >
                                        <option value="" disabled>Select a Category</option> 
                                        <option value="electronics">Electronics</option>
                                        <option value="hostel essentials">Hostel Essentials</option> 
                                        <option value="clothing & accessories">Clothing & Accessories</option> 
                                        <option value="books">Books</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="flex-1/2 ml-5">
                                    <label htmlFor="price">Price (₵)<span className="text-red-700">*</span></label>
                                    <input type="number" name="price" id="price" placeholder="0.00" className="border border-gray-400 rounded-md w-[90%] h-9 mt-2"
                                        required
                                        value={formData.price} 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="description">Description<span className="text-red-700">*</span></label>
                                <textarea name="description"  id="description"  placeholder="Describe your product in detail..." className="border border-gray-400 rounded-md w-[95%] h-20 mt-2"
                                  required
                                    value={formData.description} 
                                    onChange={handleChange} 
                                ></textarea>
                            </div>

                            <div className=" mt-4">
                                <div>
                                    <label htmlFor="university">University/Tertiary Institution<span className="text-red-700">*</span></label>
                                    <select
                                        name="university" // Match state key
                                        id="university" // Corrected id to match label
                                        className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                                        required
                                        value={formData.university} // Use value for controlled component
                                        onChange={handleChange} // Add onChange handler
                                    >
                                        <option value="" disabled>Select a University</option> {/* Better default */}
                                        <option value="university of ghana,legon">University of Ghana, Legon</option>
                                        <option value="university of cape coast">University of Cape Coast</option>
                                        <option value="ashesi university">Ashesi University</option>
                                        <option value="central university">Central University</option>
                                        <option value="kwame nkrumah university of science and technology">Kwame Nkrumah University of Science and Technology</option>
                                        <option value="university of health and allied sciences">University of Health and Allied Sciences</option>
                                        <option value="university of professional studies">University of Professional Studies</option>
                                        <option value="ghana technology communication university">Ghana Technology Communication University</option>
                                        <option value="regional maritime university">Regional Maritime University</option>
                                        <option value="accra technical university">Accra Technical University</option> {/* Added this from your code */}
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="location">Location<span className="text-red-700">*</span></label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location" // Match state key
                                        placeholder="Enter your location"
                                        className="border border-gray-400 rounded-md w-[95%] h-9 mt-2"
                                        required
                                        value={formData.location} // Use value for controlled component
                                        onChange={handleChange} // Add onChange handler
                                    />
                                </div>

                                <div className="flex w-full h-[80px] max-w-md items-center justify-center mt-4 mx-auto gap-4 text-base font-medium">
                                    <button
                                        type="button" // Important: changed to type="button" to prevent form submission
                                        onClick={handleDelete}
                                        className="flex-1 bg-gradient-to-r from-red-500 to-red-600 font-medium rounded-md p-3 text-white hover:from-red-600 hover:to-red-700 transition-colors"
                                    >
                                        Delete Ad
                                    </button>

                                    <button
                                        type="submit" onSubmit={handleSubmit} // This button will now trigger handleSubmit
                                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 font-medium rounded-md p-3 text-white"
                                    >
                                        Update Ad
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
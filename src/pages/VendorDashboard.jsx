import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Trash,
  User,
  EditIcon,
  TrashIcon,
  LocationEdit,
  Mail,
  Phone,
} from "lucide-react";
import vintage from "../assets/images/vintage.jpg";
import iphonexr from "../assets/images/iphonexr.jpg";
import jeansjacket from "../assets/images/jeansjacket.jpg";
import VendorNav from "../components/VendorNav";
import { Link } from "react-router";

export default function VendorDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingProducts, setFetchingProducts] = useState(true);

  // Fetch products from API
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setFetchingProducts(true);
    try {
      // Replace with your actual API endpoint to get user's products
      const response = await fetch('/api/products/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add authentication header if needed
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || data); // Adjust based on your API response structure
      } else {
        console.error('Failed to fetch products');
        alert('Failed to load your advertisements');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('An error occurred while loading your advertisements');
    } finally {
      setFetchingProducts(false);
    }
  };

  // Delete product function
  const handleDeleteProduct = async (productId) => {
    // Confirm before deleting
    if (!window.confirm("Are you sure you want to delete this advertisement?")) {
      return;
    }

    setLoading(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add authentication header if needed
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Remove the product from the local state
        setProducts(products.filter(product => (product.id || product._id) !== productId));
        
        // Optional: Show success message
        alert("Advertisement deleted successfully!");
      } else {
        // Handle error response
        const errorData = await response.json();
        alert(`Failed to delete advertisement: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert("An error occurred while deleting the advertisement. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <VendorNav />

      <section>
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row ml-6 md:ml-13">
          {/* Profile Box */}
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
              <div className="flex items-center mt-2 space-x-2">
                <Mail className="w-6 h-6 text-gray-600" />
                <h1 className="text-sm sm:text-base text-gray-700">peninahbrown2@gmail.com</h1>
              </div>
              <div className="flex items-center mt-2 space-x-2">
                <Phone className="w-6 h-6 text-gray-600" />
                <h1 className="text-sm sm:text-base text-gray-700">+233 541 678 987</h1>
              </div>
            </div>
          </div>

          {/* Total Ads Box */}
          <div className="border rounded-md border-purple-300 w-[30%] h-36 mt-10 ml-10">
            <div className="p-8">
              <h1 className="text-4xl">{products.length}</h1>
              <h2 className="mt-2 text-2xl">Total Ads</h2>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="w-full min-h-screen flex justify-center">
          <div className="mt-10 border rounded-md border-purple-300 w-[90%]">
            <div className="p-8">
              <h1 className="text-2xl font-bold">My Advertisements</h1>
              <h2 className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Manage your posted advertisements
              </h2>
            </div>

            {/* Loading state */}
            {fetchingProducts ? (
              <div className="text-center py-8">
                <p>Loading your advertisements...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No advertisements found. Start by posting your first ad!</p>
              </div>
            ) : (
              // Render ads from product array
              products.map((product) => (
                <div
                  key={product.id || product._id} // Use _id if MongoDB
                  className="relative border rounded-md mt-6 border-purple-300 w-[95%] mx-auto p-4 h-40"
                >
                  <div className="flex">
                    <img
                      src={product.image || product.imageUrl || '/placeholder-image.jpg'} // Adjust based on your API field names
                      alt={product.title || product.name}
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div className="ml-4">
                      <h1 className="font-bold">{product.title || product.name}</h1>
                      <h2 className="text-sm mt-1">{product.description}</h2>
                      <h3 className="text-xs mt-1">
                        {product.price}₵
                        <span className="ml-2">{product.category}</span>
                        <span className="ml-2">Posted {new Date(product.createdAt || product.postedDate).toLocaleDateString()}</span>
                      </h3>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex gap-3">
                    <Link to={`/edit-form/${product.id || product._id}`}>
                      <button className="flex items-center text-sm text-blue-600 hover:underline cursor-pointer">
                        <EditIcon className="w-4 h-4 mr-1" />
                        Edit
                      </button>
                    </Link>
                    
                    <button 
                      onClick={() => handleDeleteProduct(product.id || product._id)}
                      disabled={loading}
                      className="flex items-center text-sm text-red-600 hover:underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Trash className="w-4 h-4 mr-1" />
                      {loading ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
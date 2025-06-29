import { useState, useEffect } from "react";
import {ArrowLeft, Trash, User, Edit, MapPin, Mail, Phone, Activity, BarChart3, Eye, EyeOff} from "lucide-react";
import VendorNav from "../components/VendorNav";
import { Link } from "react-router";
import { apiClient } from "../api/client";

export default function VendorDashboard() {
  const [products, setProducts] = useState([]);
  const [dashboardSummary, setDashboardSummary] = useState(null);
  const [vendorInfo, setVendorInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingProducts, setFetchingProducts] = useState(true);
  const [fetchingSummary, setFetchingSummary] = useState(true);
  const [fetchingVendorInfo, setFetchingVendorInfo] = useState(true);
  const [summaryError, setSummaryError] = useState(null);

  // You'll need to replace these with your actual token and vendor ID management
  const getAuthToken = () => {
    // Replace with your actual token management
    return localStorage.getItem('authToken') || 'your-bearer-token-here';
  };

  const getVendorId = () => {
    // Replace with your actual vendor ID management
    return localStorage.getItem('ACCESS_TOKEN') || '12345';
  };

  const fetchVendorInfo = async () => {
    setFetchingVendorInfo(true);
    try {
     
      const localVendorInfo = getVendorInfo();
      setVendorInfo(localVendorInfo);
      
      // Option 2: Fetch from API (if you have a vendor profile endpoint)
      
      // const token = getAuthToken();
      // const config = {
      //   headers: {
      //     'Authorization': `Bearer ${token}`,
      //   }
      // };
      
      const response = await apiClient.get('/vendor/profile', config);
      setVendorInfo(response.data);
      
    } catch (error) {
      console.error('Error fetching vendor info:', error);
      // Fallback to localStorage data
      setVendorInfo(getVendorInfo());
    } finally {
      setFetchingVendorInfo(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchVendorSummary();
    fetchVendorInfo();
  }, []);

 
  const fetchProducts = async () => {
    setFetchingProducts(true);
    try {
      const response = await apiClient.get('/products/user');
      setProducts(response.data.products || response.data); 
    } catch (error) {
      console.error('Failed to fetch products:', error);
      alert('Failed to load your advertisements');
    } finally {
      setFetchingProducts(false);
    }
  };

  const fetchVendorSummary = async () => {
    setFetchingSummary(true);
    setSummaryError(null);
    
    try {
      const token = getAuthToken();
      const vendorId = getVendorId();

      
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        params: {
          vendorId: vendorId
        }
      };

      const response = await apiClient.get('/adverts/vendor/summary', config);
      
      
      if (response.data.summary) {
        setDashboardSummary(response.data.summary);
      } else {
        setDashboardSummary(response.data);
      }
    } catch (err) {
      setSummaryError(err.response?.data?.message || err.message || 'Failed to fetch summary');
      console.error('Error fetching vendor summary:', err);
    } finally {
      setFetchingSummary(false);
    }
  };

 
  const handleDeleteProduct = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this advertisement?")) {
      return;
    }

    setLoading(true);
    
    try {
      await apiClient.delete(`/products/${productId}`);
      setProducts(products.filter(product => (product.id || product._id) !== productId));
      alert("Advertisement deleted successfully!");
    
      fetchVendorSummary();
    } catch (error) {
      console.error('Error deleting product:', error);
      const errorMessage = error.response?.data?.message || 'Unknown error';
      alert(`Failed to delete advertisement: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshSummary = () => {
    fetchVendorSummary();
  };

  return (
    <>
      <VendorNav />

      <section>
        
        <div className="flex flex-col lg:flex-row ml-6 md:ml-13 gap-4">
          
       
          <div className="border rounded-md border-purple-300 w-full lg:w-[30%] h-36 mt-10 ml-4">
            <div className="flex flex-col sm:ml-4 ml-2 sm:mt-2 mt-1">
              {fetchingVendorInfo ? (
                <div className="animate-pulse">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div className="h-4 bg-gray-300 rounded w-32"></div>
                  </div>
                  <div className="h-3 bg-gray-300 rounded w-40 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-48 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-36"></div>
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="font-bold text-base sm:text-lg">
                      {vendorInfo?.name || vendorInfo?.fullName || 'Vendor Name'}
                    </h1>
                  </div>

                  <div className="flex items-center mt-2 space-x-2">
                    <MapPin className="w-6 h-6 text-gray-600" />
                    <h1 className="text-sm sm:text-base text-gray-700">
                      {vendorInfo?.location || vendorInfo?.address || 'Location not set'}
                    </h1>
                  </div>
                  <div className="flex items-center mt-2 space-x-2">
                    <Mail className="w-6 h-6 text-gray-600" />
                    <h1 className="text-sm sm:text-base text-gray-700">
                      {vendorInfo?.email || 'Email not available'}
                    </h1>
                  </div>
                  <div className="flex items-center mt-2 space-x-2">
                    <Phone className="w-6 h-6 text-gray-600" />
                    <h1 className="text-sm sm:text-base text-gray-700">
                      {vendorInfo?.phone || vendorInfo?.phoneNumber || 'Phone not available'}
                    </h1>
                  </div>
                </>
              )}
            </div>
          </div>

        
          <div className="border rounded-md border-purple-300 w-full lg:w-[30%] h-36 mt-10 ml-0 lg:ml-10">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">
                    {fetchingSummary ? (
                      <div className="animate-pulse bg-gray-300 h-8 w-16 rounded"></div>
                    ) : (
                      dashboardSummary?.totalAds || products.length
                    )}
                  </h1>
                  <h2 className="mt-2 text-xl text-gray-700">Total Ads</h2>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="border rounded-md border-purple-300 w-full lg:w-[30%] h-36 mt-10 ml-0 lg:ml-10">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-green-600">
                    {fetchingSummary ? (
                      <div className="animate-pulse bg-gray-300 h-8 w-16 rounded"></div>
                    ) : (
                      dashboardSummary?.activeAds || 0
                    )}
                  </h1>
                  <h2 className="mt-2 text-xl text-gray-700">Active Ads</h2>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="border rounded-md border-purple-300 w-full lg:w-[30%] h-36 mt-10 ml-0 lg:ml-10">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-red-600">
                    {fetchingSummary ? (
                      <div className="animate-pulse bg-gray-300 h-8 w-16 rounded"></div>
                    ) : (
                      dashboardSummary?.inactiveAds || 0
                    )}
                  </h1>
                  <h2 className="mt-2 text-xl text-gray-700">Inactive Ads</h2>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <EyeOff className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

      
        {summaryError && (
          <div className="mx-6 md:mx-13 mt-4">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex justify-between items-center">
              <span>Failed to load dashboard summary: {summaryError}</span>
              <button
                onClick={handleRefreshSummary}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
              >
                <Activity className="w-4 h-4" />
                Retry
              </button>
            </div>
          </div>
        )}

        
        {dashboardSummary && !fetchingSummary && (
          <div className="mx-6 md:mx-13 mt-6">
            <div className="border rounded-md border-purple-300 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Performance Overview</h2>
                <button
                  onClick={handleRefreshSummary}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                >
                  <Activity className="w-4 h-4" />
                  Refresh
                </button>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-purple-600">
                      {dashboardSummary.totalAds > 0 
                        ? Math.round((dashboardSummary.activeAds / dashboardSummary.totalAds) * 100) 
                        : 0}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Active Rate</p>
                </div>
              </div>
            </div>
          </div>
        )}

        
        <div className="w-full min-h-screen flex justify-center">
          <div className="mt-10 border rounded-md border-purple-300 w-[90%]">
            <div className="p-8">
              <h1 className="text-2xl font-bold">My Advertisements</h1>
              <h2 className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Manage your posted advertisements
              </h2>
            </div>

            {fetchingProducts ? (
              <div className="text-center py-8">
                <p>Loading your advertisements...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No advertisements found. Start by posting your first ad!</p>
              </div>
            ) : (
              products.map((product) => (
                <div
                  key={product.id || product._id} 
                  className="relative border rounded-md mt-6 border-purple-300 w-[95%] mx-auto p-4 h-40"
                >
                  <div className="flex">
                    <img
                      src={product.image || product.imageUrl || '/placeholder-image.jpg'} 
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
                        <Edit className="w-4 h-4 mr-1" />
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
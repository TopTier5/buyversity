import { useState, useEffect } from "react";
import { User, Edit, MapPin, Mail, Phone, Activity, BarChart3, Eye, EyeOff, Trash, Search } from "lucide-react";
import VendorNav from "../components/VendorNav";
import { Link } from "react-router";
import { apiClient } from "../api/client";

export default function VendorDashboard() {
  const [products, setProducts] = useState([]);
  const [dashboardSummary, setDashboardSummary] = useState(null);
  const [vendorInfo, setVendorInfo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [loading, setLoading] = useState({ products: true, summary: true, vendor: true,  deleting: false});
  const [error, setError] = useState(null);

  const getApiConfig = () => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    return {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
  };

  const getImageUrl = (product) => {
    const imageField = product.image || product.imageUrl || product.images?.[0] || product.photo;
    
    if (!imageField) return null;
    
    if (imageField.startsWith('http')) return imageField;
    return `https://buyversitybackend-api.onrender.com${imageField.startsWith('/') ? '' : '/'}${imageField}`;
  };

  const transformProducts = (data) => {
    if (!Array.isArray(data)) return [];
    
    return data.map(item => ({
      id: item.id || item._id || item.adId,
      title: item.title || item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      status: item.status,
      isActive: item.status === 'active',
      createdAt: item.createdAt || item.createdDate,
      image: getImageUrl(item)
    }));
  };

  const fetchProducts = async () => {
    try {
      setLoading(prev => ({ ...prev, products: true }));
      setError(null);
      const endpoints = ['/adverts/vendor', '/adverts', '/adverts/user'];
      let response;
      
      for (const endpoint of endpoints) {
        try {
          response = await apiClient.get(endpoint, getApiConfig());
          break;
        } catch (error) {
          if (error.response?.status !== 404) continue;
        }
      }
      
      if (!response) throw new Error('No valid endpoint found');
      let productsData = response.data;
      if (response.data.adverts) productsData = response.data.adverts;
      else if (response.data.data) productsData = response.data.data;
      else if (response.data.adDetails) productsData = response.data.adDetails;
      
      setProducts(transformProducts(productsData));
      
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setError('Failed to load advertisements');
      setProducts([]);
    } finally {
      setLoading(prev => ({ ...prev, products: false }));
    }
  };

  const fetchVendorSummary = async () => {
  try {
    setLoading(prev => ({ ...prev, summary: true }));
    
    const response = await apiClient.get('/adverts/vendor/summary', getApiConfig());
    console.log('API Response:', response.data);

    if (response.data.summary) {
      setDashboardSummary(response.data.summary);
    } else if (response.data.totalAds !== undefined) {

      setDashboardSummary({totalAds: response.data.totalAds, activeAds: response.data.activeAds, inactiveAds: response.data.inactiveAds});
    }
  } catch (error) {
    console.error('Error fetching summary:', error);
    console.error('Error response:', error.response?.data); 
    
    const activeCount = products.filter(p => p.isActive).length;
    setDashboardSummary({totalAds: products.length, activeAds: activeCount, inactiveAds: products.length - activeCount
    });
  } finally {
    setLoading(prev => ({ ...prev, summary: false }));
  }
};

  const fetchVendorInfo = async () => {
  try {
    setLoading(prev => ({ ...prev, vendor: true }));
    
    const localInfo = JSON.parse(localStorage.getItem('vendorInfo') || '{}');
    if (localInfo.name || localInfo.email) {
      setVendorInfo(localInfo);
    }
    
    try {
      const response = await apiClient.get('/adverts/vendor/summary', getApiConfig());
      
      if (response.data) {
        const vendorData = {
          name: response.data.name || 'Vendor Name',
          email: response.data.email || 'Email not available',
          contact: response.data.contact || 'Contact not available',
          phone: response.data.contact || response.data.phone || 'Phone not available',
          university: response.data.university || 'University not set',
          location: response.data.university || response.data.location || 'Location not set',
          dateJoined: response.data.dateJoined || 'Date not available',
          totalAds: response.data.totalAds || 0
        };
        
        setVendorInfo(vendorData);
        
        setDashboardSummary({totalAds: response.data.totalAds || 0, activeAds: response.data.activeAds || 0, inactiveAds: response.data.inactiveAds || 0
        });
      }
      
    } catch (error) {
      console.log('Using localStorage vendor info as fallback');
    }
    
  } catch (error) {
    console.error('Error fetching vendor info:', error);
  } finally {
    setLoading(prev => ({ ...prev, vendor: false }));
  }
};
  const handleDeleteProduct = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this advertisement?")) return;

    try {
      setLoading(prev => ({ ...prev, deleting: true }));
      
      await apiClient.delete(`/adverts/${productId}`, getApiConfig());
      
      setProducts(products.filter(product => product.id !== productId));
      alert("Advertisement deleted successfully!");
      
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete advertisement');
    } finally {
      setLoading(prev => ({ ...prev, deleting: false }));
    }
  };

  const ProductImage = ({ product, onClick }) => {
    const [imageError, setImageError] = useState(false);
    
    const handleImageError = () => setImageError(true);
    
    const placeholderUrl = `https://via.placeholder.com/150x150/e5e7eb/6b7280?text=${encodeURIComponent(product.title?.substring(0, 2) || 'AD')}`;
    
    return (
      <img
        src={!imageError && product.image ? product.image : placeholderUrl}
        alt={product.title}
        className="w-16 h-16 rounded-md object-cover cursor-pointer hover:opacity-80"
        onClick={onClick}
        onError={handleImageError}
      />
    );
  };
  const filteredProducts = products.filter(product => {
    const matchesSearch = !searchTerm || 
      product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'active' && product.isActive) ||
      (filterStatus === 'inactive' && !product.isActive);
    
    return matchesSearch && matchesStatus;
  });

  useEffect(() => {
    fetchProducts();
    fetchVendorInfo();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      fetchVendorSummary();
    }
  }, [products]);

  const StatsCard = ({ title, value, icon: Icon, color = "purple", isLoading }) => (
    <div className="border rounded-md border-purple-300 w-full p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${color === 'green' ? 'text-green-600' : color === 'red' ? 'text-red-600' : ''}`}>
            {isLoading ? '...' : value || 0}
          </h1>
          <h2 className="mt-2 text-xl text-gray-700">{title}</h2>
        </div>
        <div className={`p-3 rounded-full ${
          color === 'green' ? 'bg-green-100' : 
          color === 'red' ? 'bg-red-100' : 
          'bg-purple-100'
        }`}>
          <Icon className={`w-6 h-6 ${
            color === 'green' ? 'text-green-600' : 
            color === 'red' ? 'text-red-600' : 
            'text-purple-600'
          }`} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <VendorNav />
      <section className="p-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex justify-between items-center">
            <span>{error}</span>
            <button
              onClick={() => {
                setError(null);
                fetchProducts();
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
            >
              <Activity className="w-4 h-4" />
              Retry
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
      
          <div className="border rounded-md border-purple-300 p-4">
            {loading.vendor ? (
              <div className="animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="font-bold text-lg">
                    {vendorInfo?.name || vendorInfo?.fullName || 'Vendor Name'}
                  </h1>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{vendorInfo?.location || 'Location not set'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{vendorInfo?.email || 'Email not available'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{vendorInfo?.phone || 'Phone not available'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Stats Cards */}
          <StatsCard 
            title="Total Ads" 
            value={dashboardSummary?.totalAds || products.length} 
            icon={BarChart3} 
            isLoading={loading.summary}
          />
          <StatsCard 
            title="Active Ads" 
            value={dashboardSummary?.activeAds || products.filter(p => p.isActive).length} 
            icon={Eye} 
            color="green"
            isLoading={loading.summary}
          />
          <StatsCard 
            title="Inactive Ads" 
            value={dashboardSummary?.inactiveAds || products.filter(p => !p.isActive).length} 
            icon={EyeOff} 
            color="red"
            isLoading={loading.summary}
          />
        </div>

        <div className="border rounded-md border-purple-300 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">My Advertisements</h1>
            <h2 className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Manage your posted advertisements
            </h2>
          </div>
         
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active Only</option>
              <option value="inactive">Inactive Only</option>
            </select>
          </div>

          {loading.products ? (
            <div className="text-center py-8">
              <p>Loading your advertisements...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">
                {products.length === 0 
                  ? "No advertisements found. Start by posting your first ad!"
                  : "No products match your search criteria."
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-md border-purple-300 p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <ProductImage 
                      product={product} 
                      onClick={() => console.log('View product:', product.id)} 
                    />
                    <div>
                      <h3 className="font-bold">{product.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                      <div className="text-xs text-gray-500 mt-1 flex flex-wrap gap-2">
                        <span className="font-semibold text-purple-600">{product.price}₵</span>
                        <span>{product.category}</span>
                        <span className={`px-2 py-1 rounded ${
                          product.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {product.isActive ? 'Active' : 'Inactive'}
                        </span>
                        <span>
                          Posted {new Date(product.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link to={`/edit-form/${product.id}`}>
                      <button className="flex items-center text-sm text-blue-600 hover:underline">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </button>
                    </Link>
                    <button 
                      onClick={() => handleDeleteProduct(product.id)}
                      disabled={loading.deleting}
                      className="flex items-center text-sm text-red-600 hover:underline disabled:opacity-50"
                    >
                      <Trash className="w-4 h-4 mr-1" />
                      {loading.deleting ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
import { useState } from "react";
import {ArrowLeft,Trash,User,EditIcon,TrashIcon,LocationEdit,Mail,Phone,} from "lucide-react";
import vintage from "../assets/images/vintage.jpg";
import iphonexr from "../assets/images/iphonexr.jpg";
import jeansjacket from "../assets/images/jeansjacket.jpg";
import VendorNav from "../components/VendorNav";

export default function VendorDashboard() {


    
  const [products, setProducts] = useState([
    {
      id: 1,
      image: vintage,
      title: "Vintage Camera",
      description: "Classic film camera in excellent condition",
      price: "3000₵",
      category: "Electronics",
      postedDate: "05/31/25",
    },
    {
      id: 2,
      image: iphonexr,
      title: "iPhone XR",
      description: "Brand new iPhone XR",
      price: "7500₵",
      category: "Electronics",
      postedDate: "1/11/25",
    },
    {
      id: 3,
      image: jeansjacket,
      title: "Jeans Jacket",
      description: "Lightly Used Classic Blue Jeans Jacket",
      price: "145.00₵",
      category: "Clothing",
      postedDate: "04/07/25",
    },
  ]);



  const deleteAdvert = (advertId) => {
        apiClient.delete(`/adverts/${advertId}`)
            .then((response) => {
                console.log(response);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.message)
            })

        }












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

            {/* Render ads from product array */}
            {products.map((product) => (
              <div
                key={product.id}
                className="relative border rounded-md mt-6 border-purple-300 w-[95%] mx-auto p-4 h-40"
              >
                <div className="flex">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 rounded-md"
                  />
                  <div className="ml-4">
                    <h1 className="font-bold">{product.title}</h1>
                    <h2 className="text-sm mt-1">{product.description}</h2>
                    <h3 className="text-xs mt-1">
                      {product.price}
                      <span className="ml-2">{product.category}</span>
                      <span className="ml-2">Posted {product.postedDate}</span>
                    </h3>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 flex gap-3">
                  <button className="flex items-center text-sm text-blue-600 hover:underline">
                    <EditIcon className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                  <button onClick={()=> deleteAdvert(advertId)} className="flex items-center text-sm text-red-600 hover:underline">
                    <Trash className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

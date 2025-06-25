import registaimage from "../assets/images/registaimage.png";
import google from "../assets/images/google.png";
import { Link, useNavigate } from "react-router";
import { LucideUser } from "lucide-react";
import { User } from "lucide-react";
import SubmitButton from "../components/SubmitButton";
import { apiClient } from "../api/client";

export default function Login() {
  const navigate = useNavigate ();
  const loginUser = async (data) =>{
    try {
      const response = await(apiClient).post("/users/auth/login", data, {
        headers: {
          "Content-Type": 'application/json'
        }
      });

      console.log(response);
      localStorage.setItem('ACCESS_TOKEN', response.data.data.accessToken);
      navigate("/user-page");
    }
    catch (error) {
            console.log(error);

        }
  }
  return (
   <div className="bg-purple-300 min-h-screen md:py-4">
   
   <div className="flex flex-col lg:flex-row lg:w-9/12 w-full bg-white rounded-md mx-auto overflow-hidden">
              
             <div className="w-full lg:p-0  p-8 sm:p-4 bg-white order-2 lg:order-none flex flex-col lg:flex-row items-center">
               {/* Registration form */}
               <div className=" lg:w-full p-4">
                      
                       <form action={loginUser} className="w-full lg:max-w-xl max-w-md">
                           <h1 className="text-4xl font-bold text-purple-600 mb-5 text-center">Registration Form </h1>
                           <h1 className="lg:text-xl text-lg font-bold text-purple-400 mb-5 text-center">Register now to advertise your products. </h1>

   
                           <div className="flex flex-col mb-7">
                               <label className="block text-md text-black font-semibold mb-2 text-left">Email</label>
                               <input type="email" name="email" placeholder="kobiahchristiana@gmail.com" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
                           </div>
   
                           <div className="flex flex-col mb-7">
                               <label className="block text-md mb-2 text-black font-semibold text-left">Password</label>
                               <input type="password" name="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder=" Your password" className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-3" />
                           </div>

   
                           <div className="flex flex-col items-center">
                               <SubmitButton title={'Login'} className="border border-purple-600 bg-purple-600 rounded-md w-full text-white text-md px-4 py-2 mt-5" />
                           </div>
                       </form>

                       <div className="flex flex-row border border-purple-200 rounded-md bg-white text-gray-700 text-sm px-6 py-2.5 w-full mt-8">
                        <a href="" className="flex flex-row">
                            <img src={google} className="h-6 w-6 text-center lg:ml-10 ml-8 mr-2 mt-0.5 md:ml-10" />
                            <p className="text-center text-lg whitespace-nowrap">Sign up with Google</p>
                            </a>+

                        </div>
                        </div>

                         <div
                        className="flex flex-col justify-center items-center  w-full lg:h-screen bg-cover bg-center bg-no-repeat text-white p-8  mt-13 lg:mt-0 lg:ml-15"
                         style={{ backgroundImage: `url(${registaimage})` }}
                       >
                         <h1 className="lg:text-4xl text-2xl font-bold z-10 mb-5 lg:mb-3 whitespace-nowrap">Welcome To BuyVersity</h1>
                         
                         <Link to={"/Register"} type="submit" className="block border border-purple-600 rounded-md text-white text-md py-1 px-2 w-20 h-8 bg-purple-600 whitespace-nowrap text-center mb-50">Register</Link>
                       </div>

             </div>
           </div>
       </div>
  );
}


   
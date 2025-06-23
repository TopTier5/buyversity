import registaimage from "../assets/images/registaimage.png";
import google from "../assets/images/google.png";
import { Link } from "react-router";
import { LucideUser } from "lucide-react";
import { User } from "lucide-react";

export default function Login() {
  return (
    <div className="bg-purple-200 h-screen py-8 overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:w-9/12 w-full bg-white rounded-md mx-auto overflow-hidden">

          <div className="lg:w-1/2 w-full p-8 sm:p-4 bg-white order-2 lg:order-none flex flex-col items-center">
            {/*  login form */}
                   
                    <form action="">
                        <h1 className="text-4xl font-bold text-purple-600 mb-5 text-center sm:mt-5 ">Login Form </h1>
                        <h1 className="text-xl font-bold text-gray-700 mb-5 whitespace-nowrap text-center">Sign in to see amazing products and offers. </h1>

                        <label className="blockn text-md text-black font-semibold mb-2">Your email</label>
                        <input type="email" name="name" placeholder="kobiahchristiana@gmail.com" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7 mt-2" />

                        <label className="block text-md mb-2 text-black font-semibold">Password</label>
                        <input type="password" name="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder=" Your password" className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7" />

                        <button type="submit" className="border border-purple-600 bg-purple-600 rounded-md w-full text-white text-md px-4 py-2 mb-7 mt-5" >Login</button>
                        </form>

                         <p className="mt-5 text-center mr-7">Or</p>
                        <div className="flex flex-row border border-purple-200 rounded-md bg-white text-gray-700 text-sm px-6 py-2.5 w-full sm:w-9/12 mt-5">
                        <a href="" className="flex flex-row">
                            <img src={google} className="h-6 w-6 text-center sm:ml-40 ml-17 mr-2 mt-0.5 lg:ml-18" />
                            <p className="text-center text-lg whitespace-nowrap">Sign up with Google</p>
                            </a>


                        </div>
          </div>


         <div
                               className="flex flex-col justify-center place-items-center lg:w-1/2 w-full bg-cover bg-center bg-no-repeat text-white p-8 order-1 lg:order-none"
                               style={{ backgroundImage: `url(${registaimage})` }}
                             >
                               <h1 className="lg:text-4xl text-3xl font-bold z-10 mb-5 lg:mb-3 whitespace-nowrap">Welcome To BuyVersity</h1>
                               
                               <Link to={"/Register"} type="submit" className="block border border-purple-600 rounded-md text-white text-md py-1 px-2 w-20 h-8 bg-purple-600 whitespace-nowrap text-center mb-50">Sign Up</Link>
                             </div>
                         
        </div>
    </div>
  );
}

import registaimage from "../assets/images/registaimage.png";
import google from "../assets/images/google.png";
import { Link } from "react-router";
import { LucideUser } from "lucide-react";
import { User } from "lucide-react";

export default function Login() {
  return (
    <div className="bg-purple-200 h-screen pt-10 overflow-hidden">
        <div className="flex flex-row w-9/12 bg-white rounded-md mx-auto overflow-hidden">

          <div className="w-1/2 p-8 bg-white">
            {/* Registration login form */}
                   
                    <form action="">
                        <h1 className="text-4xl font-bold text-purple-600 mb-5 text-center ">Login Form </h1>
                        <h1 className="text-xl font-bold text-gray-700 mb-5 whitespace-nowrap text-center">Sign in to see amazing products and offers. </h1>

                        <label className="blockn text-md text-black font-semibold mb-2">Your email</label>
                        <input type="email" name="name" placeholder="kobiahchristiana@gmail.com" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7 mt-2" />

                        <label className="block text-md mb-2 text-black font-semibold">Password</label>
                        <input type="password" name="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder=" Your password" className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7" />

                        <button type="submit" className="border border-purple-600 bg-purple-600 rounded-md w-full text-white text-md px-4 py-2 mb-7 mt-5" >Login</button>
                        </form>

                         <p className="mt-5 text-center mr-7">Or</p>
                        <div className="flex flex-row border border-purple-200 rounded-md bg-white text-gray-700 text-sm px-6 py-2.5 w-full mt-5">
                        <a href="" className="flex flex-row">
                            <img src={google} className="h-6 w-6 text-center ml-17 mr-2 mt-0.5" />
                            <p className="text-center text-lg whitespace-nowrap">Sign up with Google</p>
                            </a>

                        </div>
          </div>


          <div
            className="flex flex-col justify-center place-items-center w-1/2 bg-cover bg-center bg-no-repeat text-white p-8"
            style={{ backgroundImage: `url(${registaimage})` }}
          >
            <h1 className="text-3xl font-bold mb-5">Hello Fam</h1>
            
            <Link to={"/register"} type="submit" className="block border border-purple-600 rounded-md text-white text-md py-1 px-2 w-20 h-8 bg-purple-600 whitespace-nowrap text-center">Sign Up</Link>
          </div>
        </div>
    </div>
  );
}

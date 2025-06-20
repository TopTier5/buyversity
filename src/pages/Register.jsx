import registaimage from "../assets/images/registaimage.png";
import { Link } from "react-router";
import { LucideUser } from "lucide-react";
import { User } from "lucide-react";

export default function Login() {
  return (
    <div className="bg-purple-300 min-h-screen py-40">
      <div className="container mx-auto">
        <div className="flex flex-row w-9/12 bg-white rounded-md mx-auto overflow-hidden">
            <div
                      className="flex flex-col justify-center place-items-center w-1/2 bg-cover bg-center bg-no-repeat text-white p-8"
                      style={{ backgroundImage: `url(${registaimage})` }}
                    >
                      <h1 className="text-3xl font-bold mb-5">Hello Fam</h1>
                      
                      <Link to={"/login"} type="submit" className="block border border-purple-600 rounded-md text-white text-md py-1 px-2 w-20 h-8 bg-purple-600 whitespace-nowrap text-center">Sign Up</Link>
                    </div>

          <div className="w-1/2 p-8 bg-white">
            {/* Registration form goes here */}
                   
                    <form action="">
                        <h1 className="text-4xl font-bold text-purple-600 mb-5 text-center ">Registration Form </h1>
                        <h1 className="text-xl font-bold text-gray-700 mb-5 whitespace-nowrap text-center">Register now to advertise your products. </h1>
                        <div>
                        <label className="block text-md mb-2 text-black font-semibold">What's your name? </label>
                        <input type="text" name="name" placeholder="First Name" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7" />
                         <input type="text" name="name" placeholder="Last Name" required className="border border-gray-500 rounded-md  w-full text-gray-700 text-md px-4 py-2 mb-7" />
                        </div>

                        <label className="blockn text-md text-black font-semibold mb-2">What's your emai?</label>
                        <input type="email" name="name" placeholder="kobiahchristiana@gmail.com" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7 mt-2" />

                        <label className="block text-md mb-2 text-black font-semibold">What's your password?</label>
                        <input type="password" name="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder=" Your password" className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7" />
                        <input type="password" name="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder="Confirm password" className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7" />

                        <label className="blockn text-md text-black font-semibold">What's your phone number</label>
                        <input type="tel" name="phone" placeholder="+233208242532" minLength={10} maxLength={12} required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7 mt-2" />

                         <label className="block text-md mb-2 text-black font-semibold">What's your institution? </label>
                        <input type="text" name="institution" placeholder="Name of institution" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-7" />

                        <button type="submit" className="border border-purple-600 bg-purple-600 rounded-md w-full text-white text-md px-4 py-2 mb-7 mt-5" >Submit</button>
                        </form>
          </div>
        </div>
      </div>
    </div>
  );
}

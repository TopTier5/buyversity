import registaimage from "../assets/images/registaimage.png";
import { Link } from "react-router";
import { LucideUser } from "lucide-react";
import { User } from "lucide-react";

export default function Login() {
  return (
    <div className="bg-purple-300 min-h-screen md:py-4">

      <div className="flex flex-col lg:flex-row lg:w-9/12 w-full bg-white rounded-md mx-auto overflow-hidden">
        <div
          className="flex flex-col justify-center place-items-center lg:w-1/2 w-full bg-cover bg-center bg-no-repeat text-white p-8 order-1 lg:order-none"
          style={{ backgroundImage: `url(${registaimage})` }}
        >
          <h1 className="lg:text-4xl text-3xl font-bold z-10 mb-5 lg:mb-3 whitespace-nowrap">Welcome To BuyVersity</h1>

          <Link to={"/login"} type="submit" className="block border border-purple-600 rounded-md text-white text-md py-1 px-2 w-20 h-8 bg-purple-600 whitespace-nowrap text-center mb-50">Sign In</Link>
        </div>


        <div className="lg:w-1/2 w-full p-8 sm:p-4 bg-white order-2 lg:order-none flex flex-col items-center">
          {/* Registration form */}

          <form className="w-full max-w-md">
            <h1 className="text-4xl font-bold text-purple-600 mb-5 text-center">Registration Form </h1>

            <div class="w-full max-w-md mx-auto mb-6 flex flex-col justify-center items-center">
              {/* radio */}
              
              <label class="block text-xl font-semibold text-gray-700 mb-6">
                Register as:
              </label>

              <div class="flex items-center space-x-6">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="buyer"
                    class="peer hidden"
                    checked
                  />
                  <div class="px-3 py-1 rounded-full border border-purple-300 text-gray-700 peer-checked:bg-purple-600 peer-checked:text-white transition">
                    Regular User
                  </div>
                </label>

                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="vendor"
                    class="peer hidden"
                  />
                  <div class="px-3 py-1 rounded-full border border-purple-300 text-gray-700 peer-checked:bg-purple-600 peer-checked:text-white transition">
                    Vendor
                  </div>
                </label>
              </div>
            </div>


            <div className="flex flex-col mb-7">
              <label className="block text-md mb-2 text-black font-semibold text-left">First Name </label>
              <input type="text" name="name" placeholder="First Name" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-3" />
              <label className="block text-md mb-2 mt-4 text-black font-semibold text-left">Last Name </label>
              <input type="text" name="name" placeholder="Last Name" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
            </div>

            <div className="flex flex-col mb-7">
              <label className="block text-md text-black font-semibold mb-2 text-left">Email</label>
              <input type="email" name="name" placeholder="kobiahchristiana@gmail.com" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
            </div>

            <div className="flex flex-col mb-7">
              <label className="block text-md mb-2 text-black font-semibold text-left">Password</label>
              <input type="password" name="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder=" Your password" className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-3" />
              <label className="block text-md mt-4 mb-2 text-black font-semibold text-left">Confirm Password </label>
              <input type="password" name="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder="Confirm password" className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
            </div>

            <div className="flex flex-col mb-7">
              <label className="block text-md text-black font-semibold text-left mb-2">Phone</label>
              <input type="tel" name="phone" placeholder="+233208242532" minLength={10} maxLength={12} required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
            </div>

            <div className="flex flex-col mb-7">
              <label className="block text-md mb-2 text-black font-semibold text-left">Institution </label>
              <input type="text" name="institution" placeholder="Name of institution" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
            </div>

            <div className="flex flex-col items-center">
              <button type="submit" className="border border-purple-600 bg-purple-600 rounded-md w-full text-white text-md px-4 py-2 mt-5" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

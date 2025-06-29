import registaimage from "../assets/images/registaimage.png";
import { Link } from "react-router";
import { LucideUser } from "lucide-react";
import { User } from "lucide-react";
import SubmitButton from "../components/SubmitButton";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "sonner";

export default function Register() {
  const navigate = useNavigate();
  const Register = async (data) => {
    try {
      const response = await apiClient.post("/users/auth/signup", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response);
      toast.success("user registered successful")
      if(response.status===201){
        navigate("/login");

      }
      
    } catch (error) {
      console.log(error)
      const errorMessage = error.response.data.message
      toast.error(errorMessage)
    }
  }

const [university, setUniversity] = useState("");
const [customUniversity, setCusomtUniversity] = useState("");

  return (
    <div className="bg-purple-300 min-h-screen md:py-4">

      <div className="flex flex-col lg:flex-row lg:w-9/12 w-full bg-white rounded-md mx-auto overflow-hidden">
        <div
          className="flex flex-col justify-center place-items-center lg:w-1/2 w-full bg-cover bg-center bg-no-repeat text-white p-8 order-1 lg:order-none"
          style={{ backgroundImage: `url(${registaimage})` }}
        >
          <h1 className="lg:text-4xl text-3xl font-bold z-10 mb-5 lg:mb-3 whitespace-nowrap">Welcome To BuyVersity</h1>

          <Link to={"/Login"} type="submit" className="block border border-purple-600 rounded-md text-white text-md py-1 px-2 w-20 h-8 bg-purple-600 whitespace-nowrap text-center mb-50">Sign In</Link>
        </div>


        <div className="lg:w-1/2 w-full p-8 sm:p-4 bg-white order-2 lg:order-none flex flex-col items-center">
          {/* Registration form */}

          <form action={Register} className="w-full max-w-md" onSubmit={Register}>
            <h1 className="text-4xl font-bold text-purple-600 mb-5 text-center">Registration Form </h1>

            <div class="w-full max-w-md mx-auto mb-6 flex flex-col justify-center items-center">
              <label class="block text-xl font-semibold text-gray-700 mb-3">
                Register as:
              </label>

              <select
                name="role"
                class="w-full md:w-2/3 px-4 py-2 border border-purple-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              >
                <option value="" disabled selected>Select user type</option>
                <option value="user">Regular User</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            <div className="flex flex-col mb-7">
              <label className="block text-md mb-2 text-black font-semibold text-left">First Name </label>
              <input type="text" name="firstName" placeholder="First Name" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-3" />
              <label className="block text-md mb-2 mt-4 text-black font-semibold text-left">Last Name </label>
              <input type="text" name="lastName" placeholder="Last Name" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
            </div>

            <div className="flex flex-col mb-7">
              <label className="block text-md text-black font-semibold mb-2 text-left">Email</label>
              <input type="email" name="email" placeholder="kobiahchristiana@gmail.com" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
            </div>

            <div className="flex flex-col mb-7">
              <label className="block text-md mb-2 text-black font-semibold text-left">Password</label>
              <input type="password" name="password" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder=" Your password" className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2 mb-3" />
              <label className="block text-md mt-4 mb-2 text-black font-semibold text-left">Confirm Password </label>
              <input type="password" name="confirmPassword" required minlength="8" maxlength="16" pattern="^[a-zA-Z0-9_]*${16}" placeholder="Confirm password" className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
            </div>

            <div className="flex flex-col mb-7">
              <label className="block text-md text-black font-semibold text-left mb-2">Phone</label>
              <input type="tel" name="contact" placeholder="+233208242532" minLength={10} maxLength={12} required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" />
            </div> 

             <div className="flex flex-col mb-7">
              <label className="block text-md mb-2 text-black font-semibold text-left">Institution </label>
              {/* <input type="text" name="institution" placeholder="Name of institution" required className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2" /> */}

              <select
                name="university"
                class="w-full px-4 py-2 border border-purple-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              >
                <option value="" disabled selected>Select Institution</option>
                <option value="University of Cape Coast">University of Cape Coast </option>
                <option value="University of Ghana">University of Ghana</option>
                <option value="Kwame Nkrumah University of Science and Technology (KNUST)">Kwame Nkrumah University of Science and Technology (KNUST)</option>
                <option value="Other">Other</option>
                <option value="University of Education, Winneba">University of Education, Winneba</option>
                <option value="University for Development Studies">University for Development Studies</option>
                <option value="University of Mines and Technology">University of Mines and Technology</option>
                <option value="University of Energy and Natural Resources">University of Energy and Natural Resources</option>
                <option value="University of Health and Allied Sciences">University of Health and Allied Sciences</option>
                <option value="Ashesi University">Ashesi University</option>
                <option value="Central University">Central University</option>
                <option value="Pentecost University College">Pentecost University College</option>
                <option value=" All Nations University"> All Nations University</option>
                <option value="Accra Institute of Technology">Accra Institute of Technology</option>
                <option value="Methodist University College">Methodist University College</option>
                <option value="Catholic University College of Ghana">Catholic University College of Ghana</option>
                <option value="Presbyterian University College">Presbyterian University College</option>
                {/* <option value="Other">Other</option> */}
              </select>
            </div> 

            {university === "other" && (
              <div className="mt-5">
                 <label>Your University </label>
              <input 
              type="text" name="lastName" placeholder="Last Name" required 
               value={customUniversity}
               onChange={(e) => setCustomUniversity(e,target.value)}
               className="border border-gray-500 rounded-md w-full text-gray-700 text-md px-4 py-2"
               />
              </div>
            )}
            <div className="flex flex-col items-center">
              <SubmitButton className="border border-purple-600 bg-purple-600 rounded-md w-full text-white text-md px-4 py-2 mt-5"
                title={"Register Account"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}


  



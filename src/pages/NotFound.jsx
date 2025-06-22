import { Link } from "react-router";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4 py-10 ">
      <div className="bg-white shadow-xl rounded-3xl p-10 md:p-16 text-center max-w-xl w-full md:max-w-3xl">
        <div className="flex justify-center items-center gap-4">
          <span className="text-[110px] md:text-[150px] font-extrabold text-purple-400 leading-none drop-shadow-md">
            4
          </span>

         {/* eye-wrapper */}
          <div className="relative w-[100px] h-[100px]">
            {/* eye-container */}
            <div className="eye relative mt-4 md:mt-0  text-center ml-2 w-[75%] h-[75%] bg-[#fff] overflow-hidden border-6  rounded-[50%] border-purple-400 shadow-[0_4px_10px_rgba(0,0,0,0.1)]  md:w-[110%] md:h-[110%]">
              {/* eyeball container */}
              <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2
               border border-purple-900 rounded-[50%] w-[40px] h-[40px] bg-purple-900 md:w-[55px] md:h-[55px]" />
            </div>
          </div>

          <span className="text-[110px] md:text-[150px] font-extrabold text-purple-400 leading-none drop-shadow-md mb-2 md:ml-8">
            4
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-purple-200 mt-4 mb-3">
          Oops! Page not found
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-6">
          The page you're looking for doesn’t exist or was moved. Let’s help you get back on track.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-purple-400 text-white font-medium rounded-full shadow hover:bg-purple-500 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

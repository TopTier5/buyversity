import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about3 from "../assets/images/about3.png"
import { Target, Handshake, Users, BadgeCheck, Cable } from "lucide-react";




export default function About() {
    return (
        <>

            <Navbar />
            <div style={{ backgroundColor: "#F6F6FE" }} className="pt-20 min-h-screen">

                <div className="text-center px-4 mt-7">
                    <div className="inline-block mb-4">
                        <span className="border rounded-full px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold">
                            Student Marketplace
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-6">
                        The Student Marketplace <br /> Revolution
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Buyversity empowers students to buy and sell electronics, clothing & accessories, kitchenware, books, and more within their campus community.
                        Save money, reduce waste, and connect with fellow students.
                    </p>
                </div>
                
               <div className="flex items-center gap-6 flex-wrap mt-30">
                <div className="flex flex-col items-center ml-40">
                    <span className="text-5xl text-[#5B4CEB] font-bold">10K+</span>
                    <p className="text-sm font-semibold mt-3">Active Students</p>
                </div>

                <div className="flex flex-col items-center ml-40">
                    <span className="text-5xl text-[#5B4CEB] font-bold">50K+</span>
                    <p className="text-sm font-semibold mt-3">Items Sold</p>
                </div>

                <div className="flex flex-col items-center ml-40">
                    <span className="text-5xl text-[#5B4CEB] font-bold">100%</span>
                    <p className="text-sm font-semibold mt-3">Satisfaction Rate</p>
                </div>

                <div className="flex flex-col items-center ml-40">
                    <span className="text-5xl text-[#5B4CEB] font-bold">20+</span>
                    <p className="text-sm font-semibold mt-3">Universities</p>
                </div>
               </div>
            </div>

            <div className="text-center mt-25">
                <h3 className="text-4xl font-bold">Our Story</h3>
                 <div className="w-25 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-5"></div>
                 
            </div>

            <div className="flex justify-center mt-20">
                <img src={about3} alt="about1pic" className="mx-auto mt-6 w-[40%] py-10 px-8 rounded-md " />
               <div className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed ml-8">
  <p className="mb-4">
    BuyVersity was born out of a simple idea: <br />
    to make student life easier, more affordable, <br /> 
    and more connected. 
    <br />
    What started as a small platform to help students <br />
    exchange used books and gadgets has grown <br />
     into a full-fledged marketplace.
  </p>
  <p className="mb-4">
    We understand the unique challenges of <br />
    campus living, so we created a space where <br />
     students can buy, sell, 
    and discover everything they need <br />
     all in one place.
  </p>
  <p>
    Our mission is to empower students to thrive by <br />
    creating a trusted, student-first ecosystem that <br />
     supports 
    their academic and personal journey.
  </p>
</div>
            </div>

            <div className="bg-[#f9fafb] py-20 px-4 mt-20">
                <div className="text-center">
                <h3 className="text-4xl font-bold">Why Students Choose Us</h3>
                 <div className="w-25 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-5"></div>
                 <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          We're more than a marketplace - we're a community built to support student success.
        </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <div className="flex items-start bg-white rounded-xl py-12 px-4 shadow-md mt-15">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-md">
                            <Target />
                        </div>
                        <div >
                            <h4 className="text-lg font-bold mb-3 ml-4">Student First Focus</h4>
                            <p className="text-gray-600 text-md ml-4">Built specifically for students, by students. We understand your budget constraints and unique needs.</p>
                        </div>
                    </div>

                    <div className="flex items-start bg-white rounded-xl py-12 px-4 shadow-md mt-15">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-md">
            <Handshake />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3 ml-4">Safe Transactions</h4>
            <p className="text-gray-600 text-md ml-4">
               Every listing on BuyVersity is student-to-student, giving you peace of mind through familiar, local connections. 
               Our platform is built for trust with real students, verified profiles, and a shared campus network.
            </p>
          </div>
        </div>

         <div className="flex items-start bg-white rounded-xl py-12 px-4 shadow-md mt-4">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-md">
            <Users />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3 ml-4">Campus Community</h4>
            <p className="text-gray-600 text-md ml-4">
                Connect with fellow students on your campus and nearby universities for local pickup and networking.
            </p>
          </div>
        </div>

        <div className="flex items-start bg-white rounded-xl py-12 px-4 shadow-md mt-4">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-md">
            <BadgeCheck />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3 ml-4">Quality Guaranteed</h4>
            <p className="text-gray-600 text-md ml-4">
               Every item is verified and rated by our community to ensure you get exactly what you expect.
            </p>
          </div>
        </div>
                </div>
            </div>


        <div className="bg-white mt-20">
            <div className="text-center">
                <h3 className="text-4xl font-bold">What Students Buy & Sell</h3>
                 <div className="w-25 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-5"></div>
            </div>

            <div className="grid grid-cols-1 mx-auto">
            <div className="flex items-start mt-15">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-md">
                    <Cable />
                </div>
            </div>
            </div>
















        </div>

            























            <Footer />




        </>
    );
}
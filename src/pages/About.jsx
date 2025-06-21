import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about3 from "../assets/images/about3.png"




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


            























            <Footer />




        </>
    );
}
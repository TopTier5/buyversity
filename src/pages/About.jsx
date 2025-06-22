import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about3 from "../assets/images/about3.png"
import { Target, Handshake, Users, BadgeCheck, Cable, BedDouble, BookOpen } from "lucide-react";
import team1 from "../assets/images/team1.jpg"
import team2 from "../assets/images/team2.jpg"
import team3 from "../assets/images/team3.jpg"
import team5 from "../assets/images/team5.jpg"





const team = [
    {
        name: "James Junior Baah",
        role: "Front-End & Team Lead",
        bio: "Former student and team lead at BuyVersity, passionate about building intuitive user experiences",
        image: team1,
        alt: "James Junior Baah",
        color: "text-purple-600"
    },

    {
        name: "Elizabeth Harrison",
        role: "Front-End & Team Member",
        bio: "UG graduate with a strong eye for design, crafting clean and user-friendly interfaces",
        image: team2,
        alt: "Elizabeth Harrison",
        color: "text-purple-600"
    },

    {
        name: "Christiana Kobiah",
        role: "Front-End & Team Member",
        bio: "Combines clean code with creative UI design to build fast, responsive, and user-centered web interfaces.",
        image: team3,
        alt: "Christian Kobiah",
        color: "text-purple-600"
    },

    {
        name: "Vonette Aboe",
        role: "Front-End & Team Member",
        bio: "Passionate about translating ideas into smooth digital experiences, with a strong eye for detail and usability",
        image: team5,
        alt: "Vonette Aboe",
        color: "text-purple-600"
    }
]




export default function About() {
    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: "#F6F6FE" }} className="pt-20 min-h-screen px-4">
               
                <div className="text-center mt-7">
                    <div className="inline-block mb-4">
                        <span className="border rounded-full px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold">
                            Student Marketplace
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-6">
                        The Student Marketplace <br className="hidden md:block" /> Revolution
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Buyversity empowers students to buy and sell electronics, clothing & accessories, kitchenware, books, and more within their campus community.
                        Save money, reduce waste, and connect with fellow students.
                    </p>
                </div>

               
                <div className="flex flex-wrap justify-center gap-8 mt-20">
                    <div className="flex flex-col items-center">
                        <span className="text-5xl text-[#5B4CEB] font-bold">10K+</span>
                        <p className="text-sm font-semibold mt-3">Active Students</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl text-[#5B4CEB] font-bold">50K+</span>
                        <p className="text-sm font-semibold mt-3">Items Sold</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl text-[#5B4CEB] font-bold">100%</span>
                        <p className="text-sm font-semibold mt-3">Satisfaction Rate</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl text-[#5B4CEB] font-bold">20+</span>
                        <p className="text-sm font-semibold mt-3">Universities</p>
                    </div>
                </div>
            </div>

            
            <div className="text-center mt-24 px-4">
                <h3 className="text-4xl font-bold">Our Story</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-5"></div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-20 px-4">
                <img src={about3} alt="about1pic" className="w-full md:w-[40%] py-10 px-4 rounded-md" />
                <div className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl ml-0 md:ml-8">
                    <p className="mb-4">
                        BuyVersity was born out of a simple idea: <br />
                        to make student life easier, more affordable, <br />
                        and more connected. <br />
                        What started as a small platform to help students <br />
                        exchange used books and gadgets has grown <br />
                        into a full-fledged marketplace.
                    </p>
                    <p className="mb-4">
                        We understand the unique challenges of <br />
                        campus living, so we created a space where <br />
                        students can buy, sell, and discover everything they need <br />
                        all in one place.
                    </p>
                    <p>
                        Our mission is to empower students to thrive by <br />
                        creating a trusted, student-first ecosystem that <br />
                        supports their academic and personal journey.
                    </p>
                </div>
            </div>

           
            <div className="bg-[#f9fafb] py-20 px-4 mt-20">
                <div className="text-center">
                    <h3 className="text-4xl font-bold">Why Students Choose Us</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-5"></div>
                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                        We're more than a marketplace - we're a community built to support student success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-16">
                    <div className="flex items-start bg-white rounded-xl py-12 px-4 shadow-md">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-md">
                            <Target />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-3 ml-4">Student First Focus</h4>
                            <p className="text-gray-600 text-md ml-4">Built specifically for students, by students. We understand your budget constraints and unique needs.</p>
                        </div>
                    </div>

                    <div className="flex items-start bg-white rounded-xl py-12 px-4 shadow-md">
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

                    <div className="flex items-start bg-white rounded-xl py-12 px-4 shadow-md">
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

                    <div className="flex items-start bg-white rounded-xl py-12 px-4 shadow-md">
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

            
            <div className="bg-white mt-32 px-4">
                <div className="text-center">
                    <h3 className="text-4xl font-bold">What Students Buy & Sell</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-5"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-20">
                    <div className="flex flex-col items-center">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-md mb-4">
                            <Cable size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Electronics & Tech</h4>
                        <p className="text-gray-600 max-w-xs text-center">
                            Shop student-priced gadgets like phones, laptops, game consoles, and accessories you can actually afford.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-md mb-4">
                            <BedDouble size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Hostel Essentials</h4>
                        <p className="text-gray-600 max-w-xs text-center">
                            From bedding, electric cookers to fans and mini fridges — everything you need to live comfortably in your hostel.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-md mb-4">
                            <BookOpen size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Books</h4>
                        <p className="text-gray-600 max-w-xs text-center">
                            Buy or sell textbooks, handouts, and study guides from fellow students who have taken the course before you.
                        </p>
                    </div>
                </div>
            </div>

            
            <div style={{ backgroundColor: "#F6F6FE" }} className="pt-20 min-h-screen mt-40 px-4">
                <div className="text-center">
                    <h3 className="text-4xl font-bold">Meet Our Team</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-5"></div>
                    <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto">
                        Students who understand your journey and are passionate about making campus life more affordable for everyone.
                    </p>
                </div>

                <div className="py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:scale-105"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.alt}
                                        className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-70"
                                    />
                                </div>
                                <div className="p-5 text-center">
                                    <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                                    <p className={`mt-1 font-semibold ${member.color}`}>{member.role}</p>
                                    <p className="text-sm text-gray-600 mt-3">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
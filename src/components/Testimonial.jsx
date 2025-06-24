import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kwame Mensah",
    title: "Level 300, Computer Science Student",
    company: "University of Ghana",
    initials: "KM",
    review:
      "Buyversity helped me sell my old laptop within two days of posting.It’s a great platform for students to earn and buy affordably on campus.",
  },
  {
    name: "Ama Serwaa",
    title: "Vendor, Hostel Essentials",
    company: "KNUST",
    initials: "AS",
    review:
      "As a student vendor, Buyversity has been a game-changer. My hostel store now reaches students across campus without spending on flyers.",
  },
  {
    name: "Daniel Osei",
    title: "Level 200, Economics Student",
    company: "University of Cape Coast",
    initials: "DO",
    review:
      "I was looking for affordable headphones and found a great deal on Buyversity. It’s easy to use, and all the sellers are verified students.",
  },
];





export default function Testimonial () {
    return (
        <>
        
         <div className="text-center mb-10 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-600">
          Join Satisfied Vendors & Buyers who have transformed their
          advertising with Buyversity
        </p>
        <div className="flex items-center justify-center mt-4 text-yellow-400 text-sm gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" stroke="currentColor" size={18} />
          ))}
          <span className="text-gray-700 font-medium ml-2">
            4.9/5 from 2,847 reviews
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border-t-4 border-gradient-to-r from-purple-500 to-blue-500 shadow rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" stroke="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-5 leading-relaxed">
                “{t.review}”
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.title}</p>
                <p className="text-sm font-semibold text-purple-600">{t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
        </>
        
    );
}
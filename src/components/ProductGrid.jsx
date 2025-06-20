import ProductCard from "./ProductCard"
import laptop from "../assets/images/laptop.jpg"
import headphone from "../assets/images/headphone.jpg"
import camera from "../assets/images/polaroid.jpg"
import nike from "../assets/images/nike1.jpg"
import cooker from "../assets/images/ricecooker1.jpg"
import jacket from "../assets/images/jeansjacket.jpg"




export default function ProductGrid() {
    const products = [
         {
            image: laptop,
            title: "MacBook Air M1 2020",
            price: " 8,000.00",
            vendor: "Tech Zone",
            condition: "Used",
            category: "Electronics"
        },

        {
            image: nike,
            title: "Nike Running Shoe",
            price: " 300.00",
            vendor: "Bismark Adjei",
            condition: "New",
            category: "Clothing & Accessories"
        },

        {
            image: cooker,
            title: "Electric Cooker",
            price: " 500.00",
            vendor: "Yasmine Appiah",
            condition: "New",
            category: "Kitchen & Cooking"
        },
      
         {
            image: headphone,
            title: "Noise Cancelling Headphones",
            price: " 150.00",
            vendor: "Benjamin Asante",
            condition: "New",
            category: "Electronics"
        },

          {
            image: jacket,
            title: "Jeans Jacket",
            price: " 100.00",
            vendor: "Richard Ofori",
            condition: "New",
            category: "Clothing & Accessories"
        },
         {
            image: camera,
            title: "Polaroid Camera",
            price: " 250.00",
            vendor: "Yasmin Djan",
            condition: "New",
            category: "Electronics"
        },
    ]



    return (

        <section className="py-10 px-5 w-[90%] mx-auto">

            <div className="flex flex-wrap gap-3 mb-8">
                {["All Categories", "Electronics", "Clothing & Accessories", "Kitchen & Cooking", "Books", "Other"].map((category, index) => (
                    <button
                        key={index}
                        className="rounded-full border hover:bg-purple-200 font-bold bg-white text-purple-600 text-xs px-3 py-2"
                    >
                        {category}
                    </button>
                ))}
            </div>

    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        vendor={product.vendor}
                        condition={product.condition}
                        category={product.category}
                    />
                ))}
            </div>
        </section>
    )
}
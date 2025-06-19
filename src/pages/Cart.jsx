import CartNavbar from "../components/CartNavbar";
import { TrashIcon } from "lucide-react";
import CartComponent from "../components/CartComponent";

export default function Cart() {
    return (
        <>
            <CartNavbar />
            <section className="px-4 sm:px-6 md:px-10 lg-px-20 mt-10 mb-10 ">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-3xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600">Your Shopping Cart</h1>
                    <button className="text-white bg-[#DC2626] rounded-md py-2 px-4 flex items-center gap-2">
                        <TrashIcon size={18} />Clear Cart</button>
                </div>

            </section>


            <CartComponent />
        </>
    );
}
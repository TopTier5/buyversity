import CartNavbar from "../components/CartNavbar";
import { TrashIcon } from "lucide-react";

export default function Cart() {
    return (
        <>
        <CartNavbar />
        <section className="ml-20 mr-20 mt-10 mb-10">
            <div className="flex justify-between">
        <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600">Your Shopping Cart</h1>
        <button className="text-white bg-[#DC2626] border rounded-md py-2 px-4 items-center flex justify-around gap-2">
            <TrashIcon size={18} />Clear Cart</button>
        </div>
        </section>
        </>
    );
}
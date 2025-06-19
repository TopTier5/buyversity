import vintage from "../assets/images/vintage.jpg"

export default function CartComponent () {
    return (
        <>
        <div className="flex flex-row">
            <div className="border border-gray-300 rounded-md w-[60%] ml-12 md:ml-6 sm:ml-1 lg:ml-12
             py-5 hover:shadow-2xl">
                <div className="flex flex-row">
                <img src={vintage} alt="vintage camera" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md ml-4 sm:ml-8" />
                <div className=" ml-5  mt-1 flex flex-col">
                <h3 className="font-bold ">Vintage Camera</h3>
                <p>By John Doe</p>
                <p>₵3000</p>
                </div>
            </div>
            </div>
        </div>

        </>
    );
}
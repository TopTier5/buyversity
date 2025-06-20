export default function VendorNav() {
    return (
        <nav className="flex items-center justify-between py-3 px-6 bg-white">
            <div className="flex items-center gap-2 ml-15">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-md 
                font-bold text-xl cursor-pointer">
                    B</div>
                <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-blue-600">
                    BuyVersity</span>
                   
            </div>
            <div className="mr-10">
                <button className="border border-[#D8B4FE] bg-gradient-to-r from-purple-600 to-blue-600
                 text-white  pt-2 pb-2 pl-3 pr-3
                text-sm font-semibold rounded-md cursor-pointer hover:shadow-2xl shadow-blue-700 ">Back to Home</button>
            </div>
           
        </nav>
        
    );
}
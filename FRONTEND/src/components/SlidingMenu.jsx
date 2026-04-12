import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function SlidingMenu({ open, SetOpen }) {
    const location = useNavigate();
    useEffect(() => {
        SetOpen(false)
    }, [location])
    return (
        <div className={`absolute top-16 w-44 z-50 md:hidden bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl ring-1 ring-black/5 transform transition-all duration-200 ease-out  origin-top-right ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-3 pointer-events-none"}`}>
            <div className="flex flex-col text-center py-2">
                <Link to="/" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-black hover:text-white transition-colors duration-200 rounded-lg mx-2">Home</Link>
                <Link to="/products/male" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-black hover:text-white transition-colors duration-200 rounded-lg mx-2">Men</Link>
                <Link to="/products/female" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-black hover:text-white transition-colors duration-200 rounded-lg mx-2">Women</Link>
                <Link to="/products/kids" className="px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-black hover:text-white transition-colors duration-200 rounded-lg mx-2">Kids</Link>
            </div>
        </div>
    );
}

export default SlidingMenu;
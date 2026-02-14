const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 w-full hidden md:block">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-5 place-items-center md:grid-cols-5 gap-8">
                {/* Brand */}
                <div className="w-38">
                    <h2 className="text-2xl font-bold text-white">Shoe Box</h2>
                    <p className="mt-3 text-sm text-gray-400 text-wrap">
                        Premium shoes. Everyday comfort. Zero compromises.
                    </p>
                </div>

                {/* Links */}
                    <div >
                        <h3 className="text-white font-semibold mb-3">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">Help</li>
                            <li className="hover:text-white cursor-pointer">Faq</li>
                            <li className="hover:text-white cursor-pointer">Contact us</li>
                        </ul>
                    </div>
                    <div >
                        <h3 className="text-white font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">About</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                        </ul>
                    </div>
                    <div >
                        <h3 className="text-white font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">About</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                        </ul>
                    </div>

                    <div >
                        <h3 className="text-white font-semibold mb-3">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Returns</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} Shoe Box. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

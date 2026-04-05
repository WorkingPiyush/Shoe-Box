import { CreditCard, Truck, ShoppingCart, ShieldCheck, Handbag, HandCoins } from "lucide-react";
import googlepay from '../assets/svg/googlepay.svg'
import paytm from '../assets/svg/paytm.svg'
import phonepe from '../assets/svg/phonepe.svg'
import visa from '../assets/svg/visa.svg'
import mastercard from '../assets/svg/mastercard.svg'

function OrderAndPaymentSection() {
    const steps = [
        {
            icon: <ShoppingCart className="w-8 h-8 text-black" />,
            title: "Browse & Select",
        },
        {
            icon: <Handbag className="w-8 h-8 text-black" />,
            title: "Add to Cart",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-black" />,
            title: "Secure Checkout",
        },
        {
            icon: <Truck className="w-8 h-8 text-black" />,
            title: "Fast Delivery",
        },
    ];

    return (
        <div className="w-full py-5 px-4 bg-gray-50">
            {/*How The Things Works Here */}
            <div className="max-w-6xl mx-auto mb-12">
                <h2 className="text-2xl font-bold text-center mb-8">How The Things Works Here</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 hover:bg-green-400 hover:text-white transition-all duration-300"
                        >
                            <div className="mb-3 text-indigo-600">{step.icon}</div>
                            <p className="font-medium">{step.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Payment Trust Section */}
            <div className="max-w-6xl m-5 mx-auto bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Secure Payments</h2>
                <div className="flex flex-wrap justify-center items-center gap-7 mb-6">
                    <span className="flex flex-wrap gap-2 px-4 py-2 bg-gray-100 rounded-xl font-medium">
                        UPI Accepted (<img src={googlepay} alt="Google Pay"
                            className="h-6 w-auto transition duration-200" /> /
                        <img src={phonepe} alt="PhonePe"
                            className="h-6 w-auto transition duration-200" />/
                        <img src={paytm} alt="Paytm"
                            className="h-6 w-aut transition duration-200" />)
                    </span>
                    <span className="flex flex-wrap gap-2 px-4 py-2 bg-gray-100 rounded-xl font-medium">
                        <img src={visa} alt="visa"
                            className="h-6 w-auto transition duration-200" />/
                        <img src={mastercard} alt="mastercard"
                            className="h-6 w-aut transition duration-200" />
                    </span>
                    <span className="px-4 py-2 bg-gray-100 rounded-xl font-medium">
                        <div className="flex items-center gap-2">
                            <HandCoins className="w-5 h-5 text-black" />
                            <span className="text-sm font-medium">Cash on Delivery</span>
                        </div>
                    </span>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-3 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-green-600" />
                        <p className="text-sm font-medium">100% Secure Payments</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <CreditCard className="w-6 h-6 text-green-600" />
                        <p className="text-sm font-medium">Encrypted Checkout</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Truck className="w-6 h-6 text-green-600" />
                        <p className="text-sm font-medium">COD Available Across India</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderAndPaymentSection;
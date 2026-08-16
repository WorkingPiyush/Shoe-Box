import { ThreeDot } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../../../hooks/useOrders";

const OrdersListPage = () => {
    const navigate = useNavigate();
    const { data: orders, isLoading } = useOrders();
    const statusColors = {
        delivered: "text-green-600",
        confirmed: "text-green-600",
        cancelled: "text-red-600",
        pending: "text-yellow-600",
        shipped: "text-blue-600",
    };
    function capitalizeFirstLetter(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center text-6xl">
                <ThreeDot color={["#205788", "#2a72b1", "#3d8cd1", "#66a4db"]} />
            </div>
        );
    }
    return (
        <div className="min-h-screen mt-20 bg-white p-10">
            <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-black">← Back to Profile</button>
            <h1 className="text-2xl font-bold mb-4">My Orders</h1>
            {!orders && <h1>No Orders Made Yet !!</h1>}
            {orders && (
                <div className="space-y-3">
                    {orders?.map((order) => (
                        <div key={order.id}
                            onClick={() => navigate(`/order/${order.id}`)}
                            className="bg-white rounded-2xl shadow p-4 flex justify-between items-center cursor-pointer hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={order.preview}
                                    alt="Product"
                                    className="w-18 h-18 object-contain rounded-lg"
                                />
                                <div>
                                    <p className="font-semibold">{order.id}</p>
                                    <p className="text-sm text-gray-500">{order.items} items</p>
                                    <p className="text-xs text-black">Booked on: {order.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">₹{order.totalAmount.toLocaleString('en-IN')}</p>
                                <p
                                    className={`text-sm font-medium ${statusColors[order.status] || "text-gray-600"}`}
                                >
                                    {capitalizeFirstLetter(order.status)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrdersListPage;
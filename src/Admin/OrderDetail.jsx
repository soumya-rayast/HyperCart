import { useContext } from "react";
import myContext from "../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, deleteProduct } = context;

    return (
        <div className="p-5 bg-gray-50 min-h-screen">
            <div className="p-5 bg-gray-50 min-h-screen">
                <div className="py-5">
                    <h1 className="text-2xl text-purple-600 font-bold">All Orders</h1>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                {[
                                    "S.No.",
                                    "Order ID",
                                    "Image",
                                    "Title",
                                    "Category",
                                    "Price",
                                    "Quantity",
                                    "Total Price",
                                    "Status",
                                    "Name",
                                    "Address",
                                    "Pincode",
                                    "Phone",
                                    "Email",
                                    "Date",
                                    "Action",
                                ].map((heading, index) => (
                                    <th
                                        key={index}
                                        className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-300 whitespace-nowrap"
                                    >
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {getAllOrder.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="16"
                                        className="py-5 text-center text-gray-500"
                                    >
                                        No orders found.
                                    </td>
                                </tr>
                            ) : (
                                getAllOrder.map((order, orderIndex) =>
                                    order.cartItems.map((item, index) => {
                                        const { id, productImageUrl, title, category, price, quantity } = item;

                                        return (
                                            <tr
                                                key={id}
                                                className="hover:bg-gray-50 transition duration-200"
                                            >
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {index + 1}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {id}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300">
                                                    <img
                                                        src={productImageUrl}
                                                        alt={title}
                                                        className="w-10 h-10 object-cover rounded-md"
                                                    />
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {title}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {category}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    ₹{price}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {quantity}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    ₹{price * quantity}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-green-500">
                                                    {order.status}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {order.addressInfo.name}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {order.addressInfo.address}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {order.addressInfo.pincode}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {order.addressInfo.mobileNumber}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {order.email}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-gray-600">
                                                    {order.date}
                                                </td>
                                                <td className="px-2 py-2 text-sm border-b border-gray-300 text-red-500 cursor-pointer hover:underline">
                                                    <button
                                                        onClick={() =>
                                                            deleteProduct(order.id)
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default OrderDetail;

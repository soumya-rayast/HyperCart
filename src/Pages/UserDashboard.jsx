import { useContext, useState } from "react";
import Layout from "../Layout/Layout";
import myContext from "../context/myContext";
import Loader from "../Components/Loader";
import { FaUser } from "react-icons/fa";

const UserDashboard = () => {
  const context = useContext(myContext);
  const { loading, getAllOrder } = context;

  // User data fetched directly from local storage
  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || {};
    } catch (error) {
      console.error("Error parsing user data:", error);
      return {};
    }
  });

  // Filter orders for the logged-in user
  const userOrders = Array.isArray(getAllOrder)
    ? getAllOrder.filter((order) => order.userid === user?.uid)
    : [];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* User Information */}
        <div className="py-6 rounded-xl border border-gray-300 shadow-lg mb-8 bg-white flex justify-center items-center">
          <div className="flex justify-center mb-4">
            <FaUser size={50} />
          </div>
          <div className="ml-10">
            <h1 className="text-xl font-bold text-gray-800">Name: {user?.name}</h1>
            <h2 className="text-lg font-medium text-gray-800">Email: {user?.email}</h2>
            <h1 className="text-lg">
              <span className="font-bold">Date: </span>
              {user?.date}
            </h1>
            <h1 className="text-lg">
              <span className="font-bold">Role: </span>
              {user?.role}
            </h1>
          </div>
        </div>

        {/* Order Details */}
        <div className="bottom">
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>

            {loading ? (
              <div className="flex justify-center py-10">
                <Loader />
              </div>
            ) : userOrders.length === 0 ? (
              <div className="text-center py-10">
                <h2 className="text-lg font-medium text-gray-600">No orders found.</h2>
              </div>
            ) : (
              userOrders.map((order) => (
                <div key={order.id} className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
                  <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                    <div className="p-8">
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                        <div className="mb-4">
                          <div className="text-sm font-semibold text-black">Order Id</div>
                          <div className="text-sm font-medium text-gray-900">#{order.id}</div>
                        </div>
                        <div className="mb-4">
                          <div className="text-sm font-semibold">Date</div>
                          <div className="text-sm font-medium text-gray-900">{order.date}</div>
                        </div>
                        <div className="mb-4">
                          <div className="text-sm font-semibold">Total Amount</div>
                          <div className="text-sm font-medium text-gray-900">₹ {order.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</div>
                        </div>
                        <div className="mb-4">
                          <div className="text-sm font-semibold">Order Status</div>
                          <div className="text-sm font-medium text-green-800 first-letter:uppercase">{order.status}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="p-8">
                      <ul className="-my-7 divide-y divide-gray-200">
                        {order.cartItems.map((item) => (
                          <li key={item.id} className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                            <div className="flex flex-1 items-stretch">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-40 w-40 rounded-lg border border-gray-200 object-contain"
                                  src={item.productImageUrl}
                                  alt={item.title}
                                />
                              </div>
                              <div className="ml-5 flex flex-col justify-between">
                                <div className="flex-1">
                                  <p className="text-sm font-bold text-gray-900">{item.title}</p>
                                  <p className="mt-1.5 text-sm font-medium text-gray-500">{item.category}</p>
                                </div>
                                <p className="mt-4 text-sm font-medium text-gray-500">x {item.quantity}</p>
                              </div>
                            </div>
                            <div className="ml-auto flex flex-col items-end justify-between">
                              <p className="text-right text-sm font-bold text-gray-900">₹ {item.price}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;

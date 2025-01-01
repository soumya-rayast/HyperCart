import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AdminProductdetail from "./AdminProductdetail";
import OrderDetail from "./OrderDetail";
import UserDetail from "./UserDetail";
import { useContext } from "react";
import myContext from "../context/myContext";

const AdminDashboard = () => {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("users"));
  } catch (error) {
    console.error("Failed to parse user data from localStorage:", error);
  }

  const context = useContext(myContext);
  const { getAllproduct, getAllOrder, getAllUser } = context;

  return (
    <div className="flex min-h-screen bg-gray-100">
        
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Admin Info */}
        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4">
            <img
              className="w-16 h-16 rounded-full border-4 border-pink-300"
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              alt="Admin"
            />
            {user ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  {user.name}
                </h3>
                <p className="text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-400">{user.date}</p>
              </div>
            ) : (
              <p className="text-gray-500">User data not available</p>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs>
          <TabList className="flex gap-4 mb-6">
            {/* Tab Items */}
            <Tab className="cursor-pointer px-6 py-3 bg-white rounded-lg shadow-md text-gray-600 hover:text-pink-500 hover:shadow-lg">
              Products ({getAllproduct.length})
            </Tab>
            <Tab className="cursor-pointer px-6 py-3 bg-white rounded-lg shadow-md text-gray-600 hover:text-pink-500 hover:shadow-lg">
              Orders ({getAllOrder.length})
            </Tab>
            <Tab className="cursor-pointer px-6 py-3 bg-white rounded-lg shadow-md text-gray-600 hover:text-pink-500 hover:shadow-lg">
              Users ({getAllUser.length})
            </Tab>
          </TabList>

          {/* Tab Panels */}
          <TabPanel>
            <AdminProductdetail />
          </TabPanel>
          <TabPanel>
            <OrderDetail />
          </TabPanel>
          <TabPanel>
            <UserDetail />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

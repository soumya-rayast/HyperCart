import Layout from "../Layout/Layout";

const products = [
  {
    id: 1,
    name: 'Nike Air Force 1 07 LV8',
    imageSrc:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
    price: '₹61,999',
    color: 'Orange',
    quantity: 1,
  },
];

const UserDashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* Profile Section */}
        <div className="py-6 rounded-xl border border-gray-300 shadow-lg mb-8 bg-white">
          <div className="flex justify-center mb-4">
            <img
              className="h-16 w-16 rounded-full border-2 border-pink-400"
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              alt="User Profile"
            />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">Name: Kamal Nayan Upadhyay</h1>
            <h2 className="text-lg font-medium text-gray-600">Email: test@gmail.com</h2>
          </div>
        </div>

        {/* Order Details Section */}
        <div className="flex flex-col lg:flex-row rounded-xl border border-gray-300 shadow-md bg-white overflow-hidden">
          <div className="w-full lg:max-w-xs p-6 border-r border-pink-200">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 border-b border-pink-400">Order Summary</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700">Order Id</div>
                <div className="text-sm font-medium text-gray-900">#74557994327</div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700">Date</div>
                <div className="text-sm font-medium text-gray-900">4 March, 2023</div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700">Total Amount</div>
                <div className="text-sm font-medium text-gray-900">₹84,499</div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700">Order Status</div>
                <div className="text-sm font-medium text-green-800">Confirmed</div>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="flex-1 p-6">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 border-b border-pink-400">Product List</h2>
            <ul className="divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-4 hover:bg-gray-100 transition">
                  <div className="flex-shrink-0">
                    <img
                      className="h-24 w-24 rounded-lg border border-gray-300 object-cover transition-transform transform hover:scale-105"
                      src={product.imageSrc}
                      alt={product.name}
                    />
                  </div>
                  <div className="ml-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-lg font-bold text-gray-900">{product.name}</p>
                      <p className="mt-1 text-sm font-medium text-gray-600">{product.color}</p>
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-700">Quantity: x {product.quantity}</p>
                  </div>
                  <div className="ml-auto flex flex-col items-end">
                    <p className="text-lg font-bold text-gray-900">{product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;

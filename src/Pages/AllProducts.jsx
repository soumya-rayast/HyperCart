import { useNavigate } from "react-router";
import Layout from "../Layout/Layout";
import { useContext, useState } from "react";
import myContext from "../context/myContext";
import Loader from "../Components/Loader";

const AllProducts = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { loading, getAllproduct } = context;

    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = getAllproduct.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Layout>
            <div className="py-8">
                <div>
                    <h1 className="text-center mb-5 text-3xl font-semibold text-black">All Products</h1>
                </div>
                <div className="flex justify-center items-center mb-5">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="border p-2 rounded-full outline-none px-4 w-80"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                    />
                </div>
                <section className="text-gray-800 body-font px-10">
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex justify-center">
                            {loading && <Loader />}
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((item, index) => {
                                    const { id, title, price, productImageUrl } = item;
                                    return (
                                        <div key={index} className="p-4 w-full md:w-1/4">
                                            <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-shadow duration-300 hover:shadow-xl">
                                                <img
                                                    onClick={() => navigate(`/productinfo/${id}`)}
                                                    className="lg:h-80 h-96 w-full object-cover"
                                                    src={productImageUrl}
                                                    alt={title}
                                                />
                                                <div className="p-6 bg-white">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                                        HyperCart
                                                    </h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                                                        {title.length > 25 ? `${title.substring(0, 25)}...` : title}
                                                    </h1>
                                                    <h1 className="title-font text-lg font-semibold text-black mb-3">
                                                        ₹{price}
                                                    </h1>
                                                    <div className="flex justify-center">
                                                        <button className="bg-black text-white font-bold py-2 px-4 rounded-lg w-full transition-all duration-300">
                                                            Add To Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="text-center text-gray-500 text-xl w-full mt-10">
                                    No products found for "{searchQuery}"
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AllProducts;

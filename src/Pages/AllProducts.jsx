import { useNavigate } from "react-router";
import Layout from "../Layout/Layout";
import { useContext } from "react";
import myContext from "../context/myContext";
import Loader from "../Components/Loader";

const AllProducts = () => {
    const navigate = useNavigate();
    const context = useContext(myContext)
    const { loading, getAllproduct } = context;
    return (
        <Layout>
            <div className="py-8">
                {/* Heading */}
                <div>
                    <h1 className="text-center mb-5 text-3xl font-semibold text-indigo-700">All Products</h1>
                </div>

                {/* Main Section */}
                <section className="text-gray-800 body-font px-10">
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex justify-center">
                            {loading && <Loader/>}
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {getAllproduct.map((item, index) => {
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
                                                <h1 className="title-font text-lg font-semibold text-indigo-600 mb-3">
                                                    ₹{price}
                                                </h1>

                                                <div className="flex justify-center">
                                                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg w-full transition-all duration-300">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default AllProducts;

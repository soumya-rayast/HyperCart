import { useContext } from "react";
import { useNavigate } from "react-router";
import myContext from "../context/myContext";
import Loader from "./Loader";

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { getAllproduct ,loading } = context;
    return (
        <div className="mt-10">
            {/* Heading */}
            <div>
                <h1 className="text-center mb-5 text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 text-transparent bg-clip-text">
                    Bestselling Products
                </h1>
            </div>

            {/* Product Grid */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className=" flex justify-center">
                        {loading && <Loader/>}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {getAllproduct.slice(0, 8).map((item, index) => {
                            const { id, title, price, productImageUrl } = item;
                            return (
                                <div
                                    key={index}
                                    className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                                >
                                    <div className="h-full border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                        {/* Product Image */}
                                        <img
                                            onClick={() => navigate(`/productinfo/${id}`)}
                                            className="lg:h-72 h-60 w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                                            src={productImageUrl}
                                            alt={title}
                                        />

                                        {/* Product Details */}
                                        <div className="p-4">
                                            <h2 className="text-sm font-medium text-purple-600 uppercase tracking-wide mb-1">
                                                HyperCart
                                            </h2>
                                            <h1 className="title-font text-lg font-bold text-gray-800 mb-2">
                                                {title.length > 25 ? `${title.substring(0, 25)}...` : title}
                                            </h1>
                                            <h2 className="text-lg font-semibold text-pink-600 mb-4">
                                                ₹{price}
                                            </h2>

                                            {/* Add to Cart Button */}
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
    );
};

export default HomePageProductCard;
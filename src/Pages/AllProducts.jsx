import { useNavigate } from "react-router";
import Layout from "../Layout/Layout";

// Product Data
const productData = [
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
        title: 'Kaushalam kalash Copper Pot',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
        title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
];

const AllProducts = () => {
    const navigate = useNavigate();
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
                        <div className="flex flex-wrap -m-4">
                            {productData.map((item, index) => {
                                const { image, title, price } = item;
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-shadow duration-300 hover:shadow-xl">
                                            <img
                                                onClick={() => navigate('/productinfo')}
                                                className="lg:h-80 h-96 w-full object-cover"
                                                src={image}
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

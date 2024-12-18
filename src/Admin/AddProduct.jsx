import { useContext, useState } from "react";
import myContext from "../context/myContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../firebase/firebaseconfig";
import Loader from "../Components/Loader";

const categoryList = [
    { name: 'fashion' },
    { name: 'shirt' },
    { name: 'jacket' },
    { name: 'mobile' },
    { name: 'laptop' },
    { name: 'shoes' },
    { name: 'home' },
    { name: 'books' },
];

const AddProduct = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // for navigating 
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: '',
        price: "",
        productImageUrl: '',
        category: '',
        description: '',
        quantity: '',
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            'en-us',
            {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
            }
        )
    })

    // function for add product 
    const addProductFunction = async () => {
        if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
            return toast.error("all fields are required")
        }
        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product)
            toast.success("Add product successfully");
            navigate('/admin-dashboard')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error("Add product failed");
        }
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 to-purple-200'>
            {loading && <Loader/>}
            {/* Product Form */}
            <div className="bg-white px-10 py-8 border border-gray-300 rounded-lg shadow-lg max-w-3xl w-full">
                {/* Top Heading */}
                <h2 className='text-center text-3xl font-bold text-purple-600 mb-6'>
                    Add Product
                </h2>

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Input Fields */}
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    title: e.target.value
                                })
                            }}
                            placeholder='Product Title'
                            className='w-full bg-gray-50 text-gray-700 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400'
                        />
                    </div>

                    <div>
                        <input
                            type="number"
                            placeholder='Product Price'
                            value={product.price}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    price: e.target.value
                                })
                            }}
                            className='w-full bg-gray-50 text-gray-700 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400'
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder='Product Image URL'
                            value={product.productImageUrl}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value
                                })
                            }}
                            className='w-full bg-gray-50 text-gray-700 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400'
                        />
                    </div>

                    <div>
                        <select
                            value={product.category}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    category: e.target.value
                                })
                            }}
                            className="w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value;
                                return (
                                    <option className="first-letter:uppercase" key={index} value={name}>
                                        {name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <textarea
                            name="description"
                            placeholder="Product Description"
                            rows="4"
                            value={product.description}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    description: e.target.value
                                })
                            }}
                            className="w-full bg-gray-50 text-gray-700 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                        ></textarea>
                    </div>
                </div>

                {/* Add Product Button */}
                <div className="mt-6">
                    <button
                        onClick={addProductFunction}
                        type='button'
                        className='bg-purple-600 hover:bg-purple-700 w-full text-white text-lg py-3 font-semibold rounded-md transition duration-200'
                    >
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;

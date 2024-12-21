import React, { useContext, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../context/myContext';
import Loader from '../Components/Loader';
import { deleteDoc, doc } from 'firebase/firestore';
import { fireDB } from '../firebase/firebaseconfig';
import toast from 'react-hot-toast';

const AdminProductdetail = () => {
    const context = useContext(myContext);
    const { loading = false, setLoading, getallproduct = [] ,getAllProductFunction } = context || {};
    const navigate = useNavigate();

    // function for delete product 
    const deleteProduct = async(id) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB,'products',id));
            toast.success('Product deleted successfully')
            getAllProductFunction();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <div className="bg-white p-5 rounded-lg shadow-lg mt-10">
            <div className="py-5 flex justify-between items-center">
                <h1 className="text-xl text-purple-600 font-bold">All Products</h1>
                <Link to='/addproduct' className="px-5 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Add Product</Link>
            </div>
            <div className="flex justify-center relative top-20">
                {loading && <Loader />}
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-purple-300 text-purple-500">
                    <thead>
                        <tr>
                            {/* Table headers */}
                        </tr>
                    </thead>
                    <tbody>
                        {getallproduct?.length === 0 && !loading ? (
                            <tr>
                                <td colSpan="8" className="text-center py-4">No products available</td>
                            </tr>
                        ) : (
                            getallproduct?.map((item, index) => {
                                const { id, title, price, category, date, productImageUrl } = item;
                                return (
                                    <tr key={id} className="text-pink-300">
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                                            {index + 1}.
                                        </td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                                            <div className="flex justify-center">
                                                <img className="w-20" src={productImageUrl || 'path/to/placeholder.png'} alt={title} />
                                            </div>
                                        </td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">{title}</td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">₹{price}</td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">{category}</td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">{date}</td>
                                        <td onClick={()=>navigate(`updateproduct/${id}`) } className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer">
                                            Edit
                                        </td>
                                        <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer">
                                            <button onClick={()=>deleteProduct(id)} className="text-red-500">Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default AdminProductdetail;

import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/myContext';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { fireDB } from '../firebase/firebaseconfig';
import toast from 'react-hot-toast';

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

const UpdateProduct = () => {
  const context = useContext(myContext)
  const { loading, setLoading, getAllProductFunction } = myContext;
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: '',
    price: '',
    productImageUrl: '',
    category: '',
    description: '',
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
  // get single product 
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, 'products', id))
      const product = productTemp.data();
      setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        time: product?.time,
        date: product?.date,
      })
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  // update product function 
  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, 'products', id), product);
      toast.success('Product updated successfully')
      getAllProductFunction()
      setLoading(false);
      navigate('/admin-dashboard')
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getSingleProductFunction();
  }, [])
  return (
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-100 to-purple-300'>
      {/* Update Product Form */}
      <div className="bg-white px-10 py-8 border border-gray-300 rounded-lg shadow-lg max-w-3xl w-full">
        {/* Heading */}
        <h2 className='text-center text-3xl font-bold text-purple-600 mb-6'>
          Update Product
        </h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input Fields */}
          <div>
            <input
              type="text"
              name="title"
              value={product?.title}
              onChange={(e) => setProduct({
                ...product,
                title: e.target.value,
              })}
              placeholder='Product Title'
              className='w-full bg-gray-50 text-gray-700 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400'
            />
          </div>

          <div>
            <input
              type="number"
              name="price"
              value={product?.price}
              onChange={(e) => setProduct({
                ...product,
                price: e.target.value,
              })}
              placeholder='Product Price'
              className='w-full bg-gray-50 text-gray-700 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400'
            />
          </div>

          <div>
            <input
              type="text"
              name="productImageUrl"
              placeholder='Product Image URL'
              value={product?.productImageUrl}
              onChange={(e) => setProduct({
                ...product,
                productImageUrl: e.target.value,
              })}
              className='w-full bg-gray-50 text-gray-700 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400'
            />
          </div>

          <div>
            <select
              value={product?.category}
              onChange={(e) => setProduct({
                ...product,
                category: e.target.value,
              })}
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
              value={product?.description}
              onChange={(e) => setProduct({
                ...product,
                description: e.target.value,
              })}
              className="w-full bg-gray-50 text-gray-700 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            ></textarea>
          </div>
        </div>

        {/* Update Product Button */}
        <div className="mt-6">
          <button
            type='button'
            className='bg-purple-600 hover:bg-purple-700 w-full text-white text-lg py-3 font-semibold rounded-md transition duration-200'
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;

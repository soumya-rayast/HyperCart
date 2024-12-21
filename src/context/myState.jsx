import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { fireDB } from '../firebase/firebaseconfig';
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';


const myState = ({ children }) => {
    const [loading, setLoading] = useState(false);
    // get all product state
    const [getAllproduct, setGetAllProducts] = useState([]);
    // FUNCTION for getting all products 
    const getAllProductFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id })
                });
                setGetAllProducts(productArray);
                setLoading(false);
            })
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        getAllProductFunction();
    }, [])
    return (
        <div>
            <MyContext.Provider value={{ loading, setLoading, getAllproduct ,getAllProductFunction }} >
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default myState

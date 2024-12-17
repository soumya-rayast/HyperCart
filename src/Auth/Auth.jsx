import React, { useContext, useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import myContext from '../context/myContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth, fireDB } from '../firebase/firebaseconfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import Loader from '../Components/Loader';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();

  // User state
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  // Form Validation
  const validateForm = () => {
    if (user.email === '' || user.password === '') {
      toast.error('All fields are required');
      return false;
    }
    if (!isLogin && user.name === '') {
      toast.error('Full Name is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (user.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  // Store user data in local storage
  const saveUserToLocalStorage = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Signup Function
  const userSignUpFunction = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      const newUser = {
        name: user.name,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        role: user.role || 'user',
        time: Timestamp.now(),
        date: new Date().toLocaleString('en-us', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }),
      };

      // Save to Firestore
      const userReference = collection(fireDB, 'users');
      await addDoc(userReference, newUser);

      // Save to local storage
      saveUserToLocalStorage(newUser);

      setUser({ name: '', email: '', password: '' });
      toast.success('Signup Successful');
      navigate('/');
    } catch (error) {
      toast.error(`Signup Failed: ${error.message}`);
      console.error(error);
    }
    setLoading(false);
  };

  // Login Function
  const userLoginFunction = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);

      const loggedInUser = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        lastLogin: new Date().toLocaleString(),
      };

      // Save to local storage
      saveUserToLocalStorage(loggedInUser);

      toast.success('Login Successful');
      navigate('/');
    } catch (error) {
      toast.error(`Login Failed: ${error.message}`);
      console.error(error);
    }
    setLoading(false);
  };

  // Toggle Login/Signup Mode
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setUser({ name: '', email: '', password: '' });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      {loading && <Loader />}
      <div className="auth_form bg-white px-6 lg:px-12 py-6 border border-gray-300 rounded-xl shadow-lg w-full max-w-md">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-center text-2xl font-bold text-purple-600">
            {isLogin ? 'Login' : 'Signup'}
          </h2>
        </div>

        {/* Input Fields */}
        {!isLogin && (
          <div className="mb-4 flex items-center border border-gray-300 rounded-md">
            <AiOutlineUser className="text-gray-500 ml-2" />
            <input
              type="text"
              placeholder="Full Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="bg-transparent border-none px-2 py-2 w-full rounded-md outline-none placeholder-gray-400"
              aria-label="Full Name"
            />
          </div>
        )}

        <div className="mb-4 flex items-center border border-gray-300 rounded-md">
          <AiOutlineMail className="text-gray-500 ml-2" />
          <input
            type="email"
            placeholder="Email Address"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="bg-transparent border-none px-2 py-2 w-full rounded-md outline-none placeholder-gray-400"
            aria-label="Email Address"
          />
        </div>

        <div className="mb-6 flex items-center border border-gray-300 rounded-md">
          <AiOutlineLock className="text-gray-500 ml-2" />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="bg-transparent border-none px-2 py-2 w-full rounded-md outline-none placeholder-gray-400"
            aria-label="Password"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={isLogin ? userLoginFunction : userSignUpFunction}
            className={`bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg w-full transition-all duration-300 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : isLogin ? 'Login' : 'Signup'}
          </button>
        </div>

        {/* Toggle Mode */}
        <div>
          <h2 className="text-gray-700 text-center">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <span
                  className="text-purple-600 font-bold cursor-pointer hover:underline"
                  onClick={toggleAuthMode}
                >
                  Signup
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  className="text-purple-600 font-bold cursor-pointer hover:underline"
                  onClick={toggleAuthMode}
                >
                  Login
                </span>
              </>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Auth;

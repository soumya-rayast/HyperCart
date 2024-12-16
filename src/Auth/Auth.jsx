import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="auth_form bg-white px-6 lg:px-12 py-6 border border-gray-300 rounded-xl shadow-lg w-full max-w-md">
        {/* Top Heading */}
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
            className="bg-transparent border-none px-2 py-2 w-full rounded-md outline-none placeholder-gray-400"
            aria-label="Email Address"
          />
        </div>
        
        <div className="mb-6 flex items-center border border-gray-300 rounded-md">
          <AiOutlineLock className="text-gray-500 ml-2" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-none px-2 py-2 w-full rounded-md outline-none placeholder-gray-400"
            aria-label="Password"
          />
        </div>

        {/* Button */}
        <div className="mb-6">
          <button
            type="button"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg w-full transition-all duration-300"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </div>

        {/* Toggle Link */}
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

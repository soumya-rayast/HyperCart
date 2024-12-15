import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="auth_form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">
        {/* Top Heading */}
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-pink-500">
            {isLogin ? 'Login' : 'Signup'}
          </h2>
        </div>

        {/* Input Fields */}
        {!isLogin && (
          <div className="mb-3">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
            />
          </div>
        )}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Button */}
        <div className="mb-5">
          <button
            type="button"
            className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </div>

        {/* Toggle Link */}
        <div>
          <h2 className="text-black text-center">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <span
                  className="text-pink-500 font-bold cursor-pointer"
                  onClick={toggleAuthMode}
                >
                  Signup
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  className="text-pink-500 font-bold cursor-pointer"
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

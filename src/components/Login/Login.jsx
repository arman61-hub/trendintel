import React, { useState } from 'react';

export default function AuthPage() {
  // State to toggle between SignIn and SignUp forms
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to right, #f9f9f9, #fefefe)",
      }}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-200/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"></div>
      </div>

      {/* Auth Form (SignIn or SignUp) */}
      <form
        className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-lg p-8 border border-gray-200"
      >
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            {isSignUp ? "Create Your Account" : "Welcome Back!"}
          </h3>
          <p className="mt-2 text-gray-600 text-sm">
            {isSignUp
              ? "Join TRENDINTEL to stay updated with the latest trends."
              : "Sign in to explore the latest fashion trends"}
          </p>
        </div>

        {/* Google Sign-In/Sign-Up */}
        <div className="mt-6">
          <button className="flex items-center justify-center gap-2 w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 shadow hover:shadow-lg hover:bg-gray-100 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.2 0 6.2 1.2 8.6 3.4l6.4-6.4C34.6 2.7 29.6 1 24 1 14.6 1 6.9 5.5 3.3 12.2l7.7 6c2.2-5.4 7.4-8.7 13-8.7z"
              />
              <path
                fill="#34A853"
                d="M9.9 28.6c-.5-1.6-.7-3.4-.7-5.1s.3-3.5.7-5.1L2.2 12.3C.8 15.3 0 18.7 0 22.5c0 4.8 1.4 9.3 4.1 13.1l7.6-6z"
              />
              <path
                fill="#4A90E2"
                d="M24 38.5c-5.5 0-10.2-3.3-12.3-8.1l-7.7 6c3.7 6.5 10.6 11 18 11 5.1 0 9.9-1.8 13.6-5l-7.6-6C28.1 37.2 26.1 38.5 24 38.5z"
              />
              <path
                fill="#FBBC05"
                d="M47.5 24.5H24v-9h13.9c-2.6-5.1-7.8-8.5-13.9-8.5v9h-.2l7.6 6C39.6 23.7 42 28.1 42 33h-9c-.1 2.8-2.3 5.1-5 5.1z"
              />
            </svg>
            {isSignUp ? "Sign up with Google" : "Sign in with Google"}
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="px-4 text-sm text-gray-500">or</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {/* Full Name (only for SignUp) */}
          {isSignUp && (
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password (only for SignUp) */}
          {isSignUp && (
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          )}
        </div>

        {/* SignIn/SignUp Button */}
        <button
          type="submit"
          className="mt-6 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-purple-500 hover:to-blue-600 transition-all"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        {/* Footer Toggle */}
        <div className="mt-4 text-center text-sm text-gray-500">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setIsSignUp(false)}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Log in
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <span
                onClick={() => setIsSignUp(true)}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
'use client'
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-pink-50 px-4">
      <div className="text-center max-w-md">
        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold text-indigo-600 animate-bounce">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found 😕
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-500">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/">
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
              Go Home 🏠
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            Go Back ⬅️
          </button>
        </div>

        {/* Animated Glow */}
        <div className="mt-10 w-32 h-32 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default NotFound;

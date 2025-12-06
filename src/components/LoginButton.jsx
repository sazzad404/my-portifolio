
import React from "react";

import { signInWithGoogle, logOut } from "../firebase";
import { useAdmin } from "../context/AdminContext";


export default function LoginButton() {
  const { isAdmin, user, loading } = useAdmin();


  if (loading) {
    return (
      <div className="fixed bottom-8 right-8 z-50 text-white bg-gray-800 px-6 py-3 rounded-full">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* লগইন করা থাকলে উপরে দেখাবে */}
      {isAdmin && user && (
        <div className="fixed top-24 right-2 z-50 flex items-center gap-4 bg-black/90 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-2xl">
          <img
            src={user.photoURL}
            alt="admin"
            className="w-9 h-9 rounded-full ring-2 ring-green-500"
          />
          <div>
            <p className="text-green-400 font-bold text-sm">
              {user.displayName}
            </p>
            <p className="text-xs text-gray-400">Admin Access</p>
          </div>
          <button
            onClick={logOut}
            className="ml-4 text-red-400 hover:text-red-300 font-medium transition"
          >
            Logout
          </button>
        </div>
      )}

      {/* লগইন না থাকলে নিচে বড় বাটন */}
      {!isAdmin && (
        <button
          onClick={signInWithGoogle} // এটাই মূল ফাংশন
          className="fixed bottom-8 right-8 z-50 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-lg rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-4 animate-pulse"
        >
          Admin Login
        </button>
      )}
    </>
  );
}

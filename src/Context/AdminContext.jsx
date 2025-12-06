// src/context/AdminContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // শুধুমাত্র তোর Gmail কেই এডমিন বানাবে
      if (currentUser && currentUser.email === "sazzadhasan313@gmail.com") {
        setIsAdmin(true);
        console.log("Admin logged in:", currentUser.displayName);
      } else {
        setIsAdmin(false);
        // অন্য কেউ লগইন করলে অটো লগআউট করে দিব (অতিরিক্ত সিকিউরিটি)
        if (currentUser) {
          auth.signOut();
          alert("Access denied! Only sazzadhasan313@gmail.com has admin rights.");
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AdminContext.Provider value={{ user, isAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
};
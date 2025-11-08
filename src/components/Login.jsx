import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ✅ import from react-router-dom

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });

    // 🔹 Example: after successful login, go to home page
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8"
      >
        {/* 🔹 Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white">
            RealEstate<span className="text-blue-500">Co</span>
          </h1>
          <p className="text-gray-400 mt-2">Welcome back! Please log in.</p>
        </div>

        {/* 🔹 Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <div className="flex items-center bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2">
              <Mail className="text-gray-400 mr-2" size={18} />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="bg-transparent flex-grow text-gray-100 outline-none placeholder-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <div className="flex items-center bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2">
              <Lock className="text-gray-400 mr-2" size={18} />
              <input
                type="password"
                required
                placeholder="Enter your password"
                className="bg-transparent flex-grow text-gray-100 outline-none placeholder-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#forgot-password"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg"
          >
            Login
          </motion.button>
        </form>

        {/* 🔹 Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700" />
          <span className="text-gray-400 mx-3 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700" />
        </div>

        {/* 🔹 Sign Up */}
        <p className="text-center text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

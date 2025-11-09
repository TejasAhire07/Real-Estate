import React from "react";
import { assets } from "../assets/assets";
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-gray-950 text-gray-400 pt-16 px-6 md:px-16 lg:px-32 w-full overflow-hidden"
    >
      {/* 🔹 Main Footer Grid */}
      <div className="container mx-auto grid md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
        {/* 🔸 Brand Section */}
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            RealEstate<span className="text-blue-600">Co</span>
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Your trusted real estate partner for modern living. Find the perfect
            home or investment opportunity with confidence and care.
          </p>

          {/* 🔸 Social Links */}
          <div className="flex space-x-4 mt-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tejasahire07/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 text-gray-300 hover:text-white transition-all"
            >
              <Linkedin size={18} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/TejasAhire07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.05-1.61-4.05-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.31-5.48-1.34-5.48-5.95 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.55.12-3.22 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.67.24 2.92.12 3.22.77.85 1.24 1.93 1.24 3.25 0 4.62-2.81 5.63-5.49 5.94.43.37.81 1.09.81 2.2 0 1.59-.01 2.87-.01 3.26 0 .32.22.69.83.57A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:ahiretejas071@gmail.com"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-600 text-gray-300 hover:text-white transition-all"
            >
              <Mail size={18} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/tejas_ahire07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 text-gray-300 hover:text-white transition-all"
            >
              <Instagram size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918421575466"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-600 text-gray-300 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0012 .07C5.37.07.06 5.38.06 12a11.9 11.9 0 001.63 6.04L0 24l6.13-1.6a11.88 11.88 0 005.88 1.54h.01c6.63 0 12-5.37 12-11.93a11.84 11.84 0 00-3.49-8.03zM12.01 21.5a9.45 9.45 0 01-4.82-1.32l-.35-.21-3.63.95.97-3.54-.23-.36A9.47 9.47 0 012.55 12c0-5.24 4.27-9.5 9.52-9.5a9.45 9.45 0 016.7 2.78 9.42 9.42 0 012.78 6.72c-.01 5.24-4.28 9.5-9.54 9.5zm5.35-7.12c-.29-.15-1.73-.85-1.99-.95-.27-.1-.46-.15-.65.15s-.75.95-.91 1.15c-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43a8.6 8.6 0 01-1.58-1.96c-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.65-1.56-.89-2.14-.24-.58-.48-.5-.65-.5-.17 0-.37-.02-.56-.02-.2 0-.52.07-.8.37-.27.29-1.04 1-1.04 2.43s1.07 2.83 1.22 3.03c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.22 1.35.19 1.86.12.57-.08 1.73-.7 1.98-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.54-.34z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 🔸 Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="flex flex-col space-y-2">
            <a href="#Header" className="hover:text-blue-500 transition-colors">
              Home
            </a>
            <a href="#About" className="hover:text-blue-500 transition-colors">
              About Us
            </a>
            <a
              href="#Projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact Us
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </a>
          </ul>
        </div>

        {/* 🔸 Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <MapPin size={18} className="text-blue-500" />
              <span>Nashik, Maharashtra, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-blue-500" />
              <span>+91 8421575466</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-blue-500" />
              <span>ahiretejas071@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* 🔸 Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Get the latest updates, property listings, and real estate insights
            directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2.5 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-blue-500 w-full sm:w-auto flex-grow"
            />
            <button
              type="submit"
              className="py-2.5 px-5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 pt-6 pb-6">
        <p>© 2025 RealEstateCo. All rights reserved.</p>
        <p className="mt-3 sm:mt-0">
          Designed with ❤️ by <span className="text-blue-500">Tejas Ahire</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

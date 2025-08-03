import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              EventSphere
            </h2>
            <p className="text-gray-300">
              Your one-stop solution for organizing and managing events seamlessly across Nepal.
            </p>
            <div className="flex space-x-4">
              <span className="bg-gray-700 p-2 rounded-full transition-all duration-300">
                <FaFacebook className="text-lg" />
              </span>
              <span className="bg-gray-700 p-2 rounded-full transition-all duration-300">
                <FaTwitter className="text-lg" />
              </span>
              <span className="bg-gray-700 p-2 rounded-full transition-all duration-300">
                <FaLinkedin className="text-lg" />
              </span>
              <span className="bg-gray-700 p-2 rounded-full transition-all duration-300">
                <FaInstagram className="text-lg" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white border-l-4 border-purple-500 pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                All Events
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Create Event
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                My Events
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Calendar View
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white border-l-4 border-purple-500 pl-3">Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Venue Booking
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Event Planning
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Event Promotion
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Customer Support
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white border-l-4 border-purple-500 pl-3">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Kupondole, Lalitpur, Nepal</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-purple-500 mr-3" />
                <span className="text-gray-300">+977-1-1234567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-purple-500 mr-3" />
                <span className="text-gray-300">demo@eventsphere.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EventSphere. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <span className="hover:text-purple-400 transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-purple-400 transition-colors cursor-default">Terms of Service</span>
            <span className="hover:text-purple-400 transition-colors cursor-default">Help & FAQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

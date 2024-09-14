import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRedirect = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate('/coming-soon'); // Redirect to the /coming-soon page
  };

  return (
    <footer
      className="bg-[#D9D9D9] py-8 pt-0 md:px-8 relative"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      <div className="mx-auto flex flex-col md:flex-row items-center md:justify-between w-full md:max-w-6xl">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          {/* Logo with Responsive Sizing */}
          <img
            src="/Images/Footer/logo1.png"
            alt="Logo"
            className="absolute -top-4 md:static w-40 md:w-60"
          />
          <div className="hidden md:flex space-x-4 mt-4">
            <a href="#" aria-label="Instagram" onClick={handleRedirect}>
              <img src="/Images/Footer/instagram.png" alt="Instagram" />
            </a>
            <a href="#" aria-label="YouTube" onClick={handleRedirect}>
              <img src="/Images/Footer/youtube.png" alt="YouTube" />
            </a>
            <a href="#" aria-label="Twitter" onClick={handleRedirect}>
              <img src="/Images/Footer/twitter.png" alt="Twitter" />
            </a>
            <a href="#" aria-label="LinkedIn" onClick={handleRedirect}>
              <img src="/Images/Footer/linkedIn.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:flex md:space-x-16 w-full md:w-auto md:mt-0 mt-16">
          {/* Legal Links */}
          <div className="text-left ml-4">
            <h5 className="font-bold mb-4">LEGAL</h5>
            <ul className="space-y-2 font-light">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Fraud Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-left ml-4">
            <h5 className="font-bold mb-4">COMPANY</h5>
            <ul className="space-y-2 font-light">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Trade Rooms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Crypto Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="text-left ml-4">
            <h5 className="font-bold mb-4">RESOURCES</h5>
            <ul className="space-y-2 font-light">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900" onClick={handleRedirect}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Social Icons */}
        <div className="md:hidden flex justify-center space-x-4 mt-8">
          <a href="#" aria-label="Instagram" onClick={handleRedirect}>
            <img src="/Images/Footer/instagram.png" alt="Instagram" />
          </a>
          <a href="#" aria-label="YouTube" onClick={handleRedirect}>
            <img src="/Images/Footer/youtube.png" alt="YouTube" />
          </a>
          <a href="#" aria-label="Twitter" onClick={handleRedirect}>
            <img src="/Images/Footer/twitter.png" alt="Twitter" />
          </a>
          <a href="#" aria-label="LinkedIn" onClick={handleRedirect}>
            <img src="/Images/Footer/linkedIn.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#343434] mt-8 py-6 px-8 text-center text-gray-600">
        <p>@finoclub2024</p>
      </div>
    </footer>
  );
};

export default Footer;
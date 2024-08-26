import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] py-8 md:px-8 relative">
      <div className="mx-auto flex flex-col md:flex-row items-center md:justify-between w-full md:max-w-6xl">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src="/Images/Footer/logo.png" alt="Logo" className="absolute -top-4 md:relative w-40 md:mb-4" />
          <div className="hidden md:flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <img src="/Images/Footer/facebook.png" alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/Images/Footer/instagram.png" alt="Instagram" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/Images/Footer/youtube.png" alt="YouTube" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/Images/Footer/twitter.png" alt="Twitter" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/Images/Footer/linkedIn.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:flex md:space-x-16 w-full md:w-auto md:mt-0 mt-16">
          <div className="text-left ml-4">
            <h5 className="font-bold mb-4">LEGAL</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Fraud Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left ml-4">
            <h5 className="font-bold mb-4">COMPANY</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Trade Rooms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Crypto Advisory
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left ml-4">
            <h5 className="font-bold mb-4">RESOURCES</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Press Coverage
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Social Icons */}
        <div className="md:hidden flex justify-center space-x-4 mt-8">
          <a href="#" aria-label="Facebook">
            <img src="/Images/Footer/facebook.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/Images/Footer/instagram.png" alt="Instagram" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src="/Images/Footer/youtube.png" alt="YouTube" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="/Images/Footer/twitter.png" alt="Twitter" />
          </a>
          <a href="#" aria-label="LinkedIn">
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
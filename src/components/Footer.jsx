// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h1 className="text-2xl font-bold">WebReinvent</h1>
            <p className="text-gray-400 mt-2">
            software development company
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h2 className="font-semibold mb-2">Company</h2>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Support</h2>
              <ul className="space-y-2">
                <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="/help" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Follow Us</h2>
              <ul className="space-y-2">
                <li><a href="https://www.facebook.com" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="https://www.twitter.com" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="https://www.instagram.com" className="text-gray-400 hover:text-white">Instagram</a></li>
                <li><a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright and Social Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy;Copyright © 2009 - 2023 WebReinvent Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.592 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.81v-9.294H9.692v-3.622h3.118V8.413c0-3.1 1.893-4.785 4.66-4.785 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.714-1.796 1.764v2.31h3.59l-.468 3.622h-3.122V24h6.116c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.406 0 22.675 0z" /></svg>
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.827.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482 13.94 13.94 0 01-10.116-5.137 4.822 4.822 0 00-.664 2.475c0 1.708.87 3.213 2.188 4.096A4.904 4.904 0 01.964 8.41v.061a4.92 4.92 0 003.946 4.827 4.902 4.902 0 01-2.212.084 4.93 4.93 0 004.604 3.42A9.867 9.867 0 010 21.543 13.933 13.933 0 007.548 24c9.142 0 14.307-7.72 14.307-14.41 0-.219-.005-.437-.014-.653A10.252 10.252 0 0024 4.557z" /></svg>
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.313 3.608 1.287.975.975 1.225 2.241 1.287 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.313 2.633-1.287 3.608-.975.975-2.241 1.225-3.608 1.287-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.313-3.608-1.287-.975-.975-1.225-2.241-1.287-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.313-2.633 1.287-3.608.975-.975 2.241-1.225 3.608-1.287 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.755 0 8.336.013 7.052.072 5.748.133 4.562.386 3.513 1.434c-1.048 1.049-1.301 2.235-1.362 3.539-.06 1.284-.072 1.703-.072 4.849s.012 3.584.072 4.849c.061 1.304.314 2.49 1.362 3.539 1.049 1.048 2.235 1.301 3.539 1.362 1.284.06 1.703.072 4.849.072s3.584-.012 4.849-.072c1.304-.061 2.49-.314 3.539-1.362 1.048-1.049 1.301-2.235 1.362-3.539.06-1.284.072-1.703.072-4.849s-.012-3.584-.072-4.849c-.061-1.304-.314-2.49-1.362-3.539-1.049-1.048-2.235-1.301-3.539-1.362-1.284-.06-1.703-.072-4.849-.072z" /></svg>
            </a>
            <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.672c0-1.35-.027-3.081-1.877-3.081-1.878 0-2.167 1.464-2.167 2.973v5.78H9.296V9.029h3.413v1.561h.048c.476-.9 1.637-1.848 3.37-1.848 3.601 0 4.268 2.37 4.268 5.456v6.254zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.071 0-1.144.926-2.071 2.07-2.071 1.145 0 2.071.927 2.071 2.071 0 1.144-.926 2.071-2.071 2.071zm1.777 13.019H3.56V9.029h3.554v11.423zm14.286-19.452H2.611C1.164.01 0 1.175 0 2.622v18.755C0 22.825 1.164 24 2.611 24h18.755C22.825 24 24 22.825 24 21.377V2.622C24 1.175 22.825.01 21.377.01z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

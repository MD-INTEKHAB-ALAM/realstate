import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 min-h-[220px] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <h2 className="text-lg font-semibold">🏠 Real Estate Hub</h2>
          <nav className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Projects</a>
            <a href="#" className="hover:text-white transition">Developers</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Real Estate Hub. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

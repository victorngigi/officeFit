import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Product Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Technologies Used */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Technologies</h3>
          <ul className="space-y-2 text-gray-300">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Vite</li>
            <li>Boxicons / Lucide</li>
          </ul>
        </div>

        {/* Contact Info / GitHub */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <a href="mailto:your.email@example.com" className="hover:text-white">OfficeFit.@gmail.com</a></li>
            <li>
              GitHub:
              <ul className="ml-2 space-y-1">
                <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">Main Profile</a></li>
                <li><a href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer" className="hover:text-white">Project Repo</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Office Fit. All rights reserved.
      </div>
    </footer>
  );
}

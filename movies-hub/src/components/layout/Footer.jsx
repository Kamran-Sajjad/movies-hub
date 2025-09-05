import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6">
          {/* Brand */}
          <h1 className="text-2xl font-bold text-yellow-400 mb-4 md:mb-0">
            MoviesHub
          </h1>

          {/* Navigation Links */}
          {/* <ul className="flex flex-wrap items-center gap-6 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Favorites</li>
          </ul> */}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          {/* Social Links */}
          <div className="flex gap-5 text-xl mb-4 md:mb-0">
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <Twitter size={22} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              <Youtube size={22} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MoviesHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

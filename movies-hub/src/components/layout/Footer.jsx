import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-yellow-400 tracking-wide">
            MoviesHub
          </h2>

          <div className="flex gap-6 text-xl">
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors duration-200"
              aria-label="Youtube"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MoviesHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

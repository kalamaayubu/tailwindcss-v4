import { Heart, TowelRack } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-lg flex items-center gap-2 font-bold text-gray-900 dark:text-white">
            <TowelRack />
            Bminton
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            <span>© {new Date().getFullYear()} Bminton.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
              in Kenya
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

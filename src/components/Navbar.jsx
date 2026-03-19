import { Menu, TowelRack, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <section className="flex dark:border-b dark:bg-gray-950 border-gray-900 px-4 gap-2 sm:gap-4 justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <TowelRack className="dark:text-white" />
          <span className="dark:text-white font-bold text-lg sm:text-xl">
            Bminton
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav>
          <ul className="hidden md:flex gap-4 lg:gap-6">
            <li>
              <a
                href="#about"
                className="dark:text-gray-300 text-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#membership"
                className="dark:text-gray-300 text-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="dark:text-gray-300 text-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="dark:text-gray-300 text-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Contact button - hidden on mobile, visible on sm and up */}
          <button className="btn-primary bg-purple-500 dark:bg-white px-4 sm:px-6 hidden sm:block">
            Contact us
          </button>

          {/* Mobile menu button - visible only on md and down */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="dark:text-white" />
            ) : (
              <Menu size={24} className="dark:text-white" />
            )}
          </button>
        </div>
      </section>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden absolute left-0 right-0 z-50 mx-4 sm:mx-6 mt-2
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "opacity-100 -translate-y-2" : "-translate-y-20 opacity-0 pointer-events-none"}
        `}
      >
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800">
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#membership"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Contact button - only shows in mobile menu */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 md:hidden">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary bg-purple-500 dark:bg-white w-full whitespace-nowrap"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

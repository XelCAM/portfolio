import { useState } from "react";

const links = [
  { id: 1, text: "Home", href: "#" },
  { id: 2, text: "Skills", href: "#skills" },
  { id: 3, text: "About", href: "#aboutme" },
  { id: 4, text: "Projects", href: "#projects" },
  { id: 5, text: "Contact", href: "#contactme" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-white text-xl font-bold">
              Charles Axel
            </a>
          </div>
          <div className="hidden md:flex items-center">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mobile-menu`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="block text-gray-300 hover:text-white px-4 py-2"
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons, install with `lucide-react`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          Pal (ਪਲ) Chat
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6">
          <NavLinks />
        </div>

        {/* Mobile Toggle */}
        <button 
          className="sm:hidden text-gray-700" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-2 space-y-4">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClasses = `block text-gray-600 hover:text-blue-600 transition ${
    mobile ? "text-lg" : ""
  }`;

  return (
    <>
      <a href="#features" className={linkClasses}>Features</a>
      <a href="/chat" className={linkClasses}>Chat</a>
    </>
  );
}

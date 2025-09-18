import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-teal-400">
          Job Dashboard
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-teal-300 transition">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


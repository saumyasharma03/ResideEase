import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import Auth Context

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // Use authentication state
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <nav className="bg-gray-900 text-gray-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-300">
          ResideEase
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/profile" className="hover:text-gray-400 transition">Profile</Link> {/* Profile added next to Home */}
          <Link to="/listings" className="hover:text-gray-400 transition">Listings</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>

          {/* Show Username & Logout if Logged In */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">👤 {user.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-600 transition">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext"; // Import Auth Context

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Use login function from context

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/login", { email, password }, { 
        headers: { "Content-Type": "application/json" }, 
      });

      if (response.status === 200) {
        toast.success("Login successful!");
        
        // Store user info using AuthContext
        login({ username: response.data.username, token: response.data.token });

        navigate("/"); // Redirect to Home after login
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-gray-600 mb-4">Accomodation Finder</h2>
        <p className="text-gray-500 text-center mb-4">WELCOME BACK!</p>
        <p className="text-sm text-gray-400 text-center italic mb-6">
          "Connecting people, sharing food, and making a difference, one meal at a time."
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center bg-gray-500 text-white py-2 rounded-md font-semibold hover:bg-gray-600 transition duration-200"
          >
            <FaSignInAlt className="mr-2" /> Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

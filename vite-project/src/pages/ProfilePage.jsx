import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user, logout } = useAuth();
  const [bookingHistory, setBookingHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/bookings/${user._id}`)
        .then((response) => setBookingHistory(response.data))
        .catch((error) =>
          console.error("Error fetching booking history:", error)
        );
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
        <p className="text-lg">⚠ Please log in to view your profile.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">👤 User Profile</h2>

        {/* User Details */}
        <div className="mb-6">
          <p><strong>Name:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        {/* Booking History */}
        <h3 className="text-2xl font-semibold mb-3">🏨 Booking History</h3>
        {bookingHistory.length > 0 ? (
          <ul className="border rounded-lg p-4">
            {bookingHistory.map((booking) => (
              <li key={booking._id} className="border-b py-2">
                <p><strong>Hotel:</strong> {booking.hotelName}</p>
                <p><strong>City:</strong> {booking.city}</p>
                <p><strong>Booking Date:</strong> {new Date(booking.date).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No bookings yet.</p>
        )}

        {/* Logout Button */}
        <button
          className="mt-6 bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

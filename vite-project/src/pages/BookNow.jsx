import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookNow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hotelDetails = location.state || {}; // Extracting passed hotel details

  const [formData, setFormData] = useState({
    title: "Mr", // Default title
    FirstName: "",
    LastName: "",
    EmailId: "",
    PhoneNumber: "",
    destination: hotelDetails.location || "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
    document: null,
    breakfast: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const handleConfirmBooking = () => {
    navigate("/booking-confirmed", { state: formData });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-3xl p-8 flex gap-8">
        {/* Left Section - Booking Details */}
        <div className="w-2/3">
          <h2 className="text-2xl font-bold mb-6">Book Your Stay</h2>
          <h3 className="text-lg font-semibold">
            Hotel: {hotelDetails.hotelName || "Unknown"}
          </h3>
          <p className="text-gray-600">
  Location: {hotelDetails.location?.address}, {hotelDetails.location?.city}, {hotelDetails.location?.state}
</p>


          
<label className="block font-semibold">Title</label>
          <select name="title" value={formData.title} onChange={handleChange} className="w-full p-3 border rounded-lg mt-1">
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
          </select>

          <label className="block font-semibold mt-4">First Name</label>
          <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange} placeholder="Enter first name" className="w-full p-3 border rounded-lg mt-1" />

          <label className="block font-semibold mt-4">Last Name</label>
          <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} placeholder="Enter last name" className="w-full p-3 border rounded-lg mt-1" />

          <label className="block font-semibold mt-4">Email</label>
          <input type="email" name="EmailId" value={formData.EmailId} onChange={handleChange} placeholder="Enter email" className="w-full p-3 border rounded-lg mt-1" />

          <label className="block font-semibold mt-4">Phone Number</label>
          <input type="text" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} placeholder="Enter phone number" className="w-full p-3 border rounded-lg mt-1" />

          <label className="block font-semibold mt-4">Destination</label>
          <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="Enter destination" className="w-full p-3 border rounded-lg mt-1" />

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block font-semibold">Check-in Date</label>
              <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full p-3 border rounded-lg mt-1" />
            </div>
            <div>
              <label className="block font-semibold">Check-out Date</label>
              <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full p-3 border rounded-lg mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block font-semibold">Guests</label>
              <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" className="w-full p-3 border rounded-lg mt-1" />
            </div>
            <div>
              <label className="block font-semibold">Rooms</label>
              <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} min="1" className="w-full p-3 border rounded-lg mt-1" />
            </div>
          </div>

          <div className="mt-6">
            <label className="block font-semibold">Upload Documents</label>
            <input type="file" onChange={handleFileUpload} className="w-full p-3 border rounded-lg mt-1" />
          </div>

          <div className="mt-4">
            <label className="inline-flex items-center">
              <input type="checkbox" checked={formData.breakfast} onChange={() => setFormData({...formData, breakfast: !formData.breakfast })} className="mr-2" />
              Add Breakfast to Upgrade your Stay
            </label>
          </div>

          <button onClick={handleConfirmBooking} className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Confirm Booking
          </button>
        </div>

        {/* Right Section - Price Breakdown */}
        <div className="w-1/3 bg-gray-50 p-6 rounded-2xl shadow-md">
        <img src={Array.isArray(hotelDetails.img) ? hotelDetails.img[0] : hotelDetails.img} 
            alt="Hotel" className="w-full h-48 object-cover rounded-lg mb-6" />

          <h3 className="text-xl font-bold mb-4">Price Breakdown</h3>
          <p className="text-gray-600">{formData.rooms} Room x {formData.guests} Guests</p>
          <div className="flex justify-between mt-3">
            <span>Base Price</span>
            <span className="font-semibold">₹ {hotelDetails.price || "N/A"}</span>
          </div>
          <div className="flex justify-between mt-3">
            <span>Hotel Taxes</span>
            <span className="font-semibold">₹ {hotelDetails.price ? (hotelDetails.price * 0.18).toFixed(2) : "N/A"}</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span>₹ {hotelDetails.price ? (hotelDetails.price * 1.18).toFixed(2) : "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;

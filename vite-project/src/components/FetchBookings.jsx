import React, { useState,useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
const FetchBookings = () => {
    const[bookings,setBookings]=useState([])
    const {user}=useAuth()
    
    const fetchBookings = async () => {
        try {
          const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" ,"token":user.token},
            
          };
          const response = await fetch(`http://localhost:5000/booking/fetchById`, requestOptions);
          console.log(response)
          const data = await response.json();
          setBookings(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        }
      };
      useEffect(() => {
        if (user && user.token) {
          fetchBookings();
        }
      }, [user]);
     
      return (
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Your Bookings</h1>
          {bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="bg-white rounded-2xl shadow-md p-6 border border-gray-200"
                >
                  <h2 className="text-xl font-semibold text-blue-700 mb-2">{booking.placeName}</h2>
                  <p className="text-sm text-gray-600 mb-1"><strong>Type:</strong> {booking.type}</p>
                  <p className="text-sm text-gray-600 mb-1"><strong>Room:</strong> {booking.roomType}</p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Guests:</strong> {booking.numberOfGuests}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Check-In:</strong> {new Date(booking.checkInDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Check-Out:</strong> {new Date(booking.checkOutDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Total Price:</strong> ₹{booking.totalPrice}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Payment Status:</strong>{" "}
                    <span className={`font-semibold ${booking.paymentStatus === 'Pending' ? 'text-red-600' : 'text-green-600'}`}>
                      {booking.paymentStatus}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Booking Status:</strong>{" "}
                    <span className={`font-semibold ${booking.bookingStatus === 'Pending' ? 'text-yellow-600' : 'text-green-600'}`}>
                      {booking.bookingStatus}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Booked on: {new Date(booking.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    };
    
    export default FetchBookings;
import React from "react";
import { useLocation } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BookingReceipt from "./BookingReceipt";

const BookingConfirmed = () => {
  const { state: formData } = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed ✅</h2>
      <p className="text-lg text-gray-700">
        Your stay at <span className="font-bold">{formData.destination}</span> is confirmed.
      </p>

      {/* Booking Details Section */}
      <div className="mt-6 p-6 bg-white shadow-md rounded-lg w-full max-w-lg">
        <h3 className="text-xl font-bold mb-3 text-blue-700">Guest Details</h3>
        <p><b>Name:</b> {formData.FirstName} {formData.LastName}</p>
        <p><b>Email:</b> {formData.EmailId}</p>
        <p><b>Phone:</b> {formData.PhoneNumber}</p>

        <h3 className="text-xl font-bold mt-4 mb-3 text-blue-700">Booking Details</h3>
        <p><b>Check-in:</b> {formData.checkIn}</p>
        <p><b>Check-out:</b> {formData.checkOut}</p>
        <p><b>Guests:</b> {formData.guests}</p>
        <p><b>Rooms:</b> {formData.rooms}</p>

        <h3 className="text-xl font-bold mt-4 mb-3 text-blue-700">Price Breakdown</h3>
        <div className="flex justify-between">
          <span>Base Price:</span>
          <span className="font-semibold">₹ 23,500</span>
        </div>
        <div className="flex justify-between">
          <span>Hotel Taxes:</span>
          <span className="font-semibold">₹ 4,230</span>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total Amount:</span>
          <span>₹ 27,730</span>
        </div>
      </div>

      {/* Download Receipt Button */}
      <PDFDownloadLink document={<BookingReceipt formData={formData} />} fileName="Booking_Receipt.pdf">
        {({ loading }) =>
          loading ? (
            <button className="mt-4 bg-gray-400 text-white py-2 px-4 rounded-lg cursor-not-allowed">
              Generating...
            </button>
          ) : (
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold transition">
              Download Receipt
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default BookingConfirmed;

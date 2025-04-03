const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  hotelName: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  numberOfGuests: { type: Number, required: true },
  roomType: { type: String, required: true, enum: ["Single", "Double", "Suite"] },
  totalPrice: { type: Number, required: true },
  paymentStatus: { type: String, enum: ["Pending", "Completed", "Failed"], default: "Pending" },
  bookingStatus: { type: String, enum: ["Pending", "Confirmed", "Cancelled", "Completed"], default: "Pending" },
  specialRequests: { type: String },
  contactInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);

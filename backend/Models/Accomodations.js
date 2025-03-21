const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["PG", "Flat", "Hotel"], required: true },
  location: {
    address: String,
    city: String,
    state: String,
    latitude: Number,
    longitude: Number,
  },
  price: Number,
  amenities: [String],
  images: [String],
});

module.exports = mongoose.model("Accommodation", accommodationSchema);

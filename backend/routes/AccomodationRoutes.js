const express = require("express");
const Accommodation = require("../Models/Accomodations"); // Ensure correct path!

const router = express.Router();

// Fetch only Hotels
router.get("/hotels", async (req, res) => {
  try {
    const hotels = await Accommodation.find({ type: "Hotel" });

    if (!hotels.length) {
      return res.status(404).json({ message: "No hotels found" });
    }

    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels", error: error.message });
  }
});

// Fetch all accommodations
router.get("/all", async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching accommodations", error: error.message });
  }
});

module.exports = router;

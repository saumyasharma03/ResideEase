import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const ExplorePG = () => {
  const [pgs, setPgs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/accomodations/pgs") // Fetch only PGs
      .then((response) => setPgs(response.data))
      .catch((error) => console.error("Error fetching PGs:", error));
  }, []);

  const filteredPGs = pgs.filter((pg) => {
    const pgName = pg.name?.toLowerCase() || "";
    const cityName = pg.location?.city?.toLowerCase() || "";
    return (
      pgName.includes(searchQuery.toLowerCase()) ||
      cityName.includes(searchQuery.toLowerCase())
    );
  });

  const sortedPGs = [...filteredPGs].sort((a, b) => {
    if (sortOption === "price") return (a.price || 0) - (b.price || 0);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      {/* Search & Sort Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
        <input
          type="text"
          placeholder="Search PGs by name or city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-3/4 md:w-1/3 px-4 py-2 border border-gray-300 rounded-md"
        />
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Sort by</option>
          <option value="price">Price (Low to High)</option>
        </select>
      </div>

      {/* PGs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12 max-w-6xl mx-auto">
        {sortedPGs.length > 0 ? (
          sortedPGs.map((pg) => (
            <div key={pg._id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={pg.images?.[0] || "default-image.jpg"}
                alt={pg.name || "PG Image"}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold mt-2">
                {pg.name || "Unnamed PG"}
              </h3>
              <p className="text-gray-600">{pg.location?.city || "Unknown City"}</p>
              <p className="text-gray-700">
                Price: ₹{pg.price ? pg.price : "N/A"}/month
              </p>
            </div>
          ))
        ) : (
          <p className="text-center">No PGs found.</p>
        )}
      </div>
    </div>
  );
};

export default ExplorePG;

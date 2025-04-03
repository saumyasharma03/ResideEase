import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import ExploreHotels from "./pages/ExploreHotels";
import ExplorePG from "./pages/ExplorePG";
import Admin from "./components/Admin";
import Fetch from "./components/Fetch";
import {FetchProvider} from "./context/FetchContext";
import HotelDetailPage from "./pages/HotelDetails"
// import { AuthProvider } from "./context/AuthContext";
import PGDetailPage from "./pages/PGDetails";
import Booking from "./pages/BookingConfirmed";
import BookNow from "./pages/BookNow";
import Xo from "./pages/Xo"
function App() {
  return (
    <>
    <FetchProvider>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore-hotels" element={<ExploreHotels />} />
          <Route path="/explore-pgs" element={<ExplorePG />} />
          <Route path="/hotels/:hotelId"  element={<HotelDetailPage/>}/>
          <Route path="/admin/fetchItems" element={<Fetch />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/pgs/:pgId" element={<PGDetailPage/>} />
          <Route path="/booknow" element={<BookNow/>} />
          <Route path="/booking-confirmed" element={<Booking/>} />
          <Route path="/Xo" element={<Xo/>} />
          
        </Routes>
     </FetchProvider>
      </>
  );
}

export default App;

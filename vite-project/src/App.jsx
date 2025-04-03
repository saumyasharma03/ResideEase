import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import ExploreHotels from "./pages/ExploreHotels";
import Admin from "./components/Admin";
import Fetch from "./components/Fetch";
import {FetchProvider} from "./context/FetchContext";
import HotelDetailPage from "./pages/HotelDetails"
// import { AuthProvider } from "./context/AuthContext";
import PGDetailPage from "./pages/PGDetails";


function App() {
  return (
    <>
    <FetchProvider>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore-hotels" element={<ExploreHotels />} />
          <Route path="/explore-pgs" element={<ExploreHotels />} />
          <Route path="/hotels/:hotelId"  element={<HotelDetailPage/>}/>
          <Route path="/admin/fetchItems" element={<Fetch />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/pgs/:pgId" element={<PGDetailPage/>} />

        </Routes>
     </FetchProvider>
      </>
  );
}

export default App;

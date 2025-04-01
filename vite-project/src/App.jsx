import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import ExploreHotels from "./pages/ExploreHotels";
<<<<<<< HEAD
import HotelDetailPage from "./pages/HotelDetails";
=======
import Admin from "./components/Admin";
import Fetch from "./components/Fetch";
import {FetchProvider} from "./context/FetchContext";
>>>>>>> 7430426 (admin panel created)
// import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <>
    <FetchProvider>
     
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore-hotels" element={<ExploreHotels />} />
<<<<<<< HEAD
          <Route path="/explore-pgs" element={<ExploreHotels />} />
          <Route path="/hotels/:hotelId"  element={<HotelDetailPage/>}/>
=======
          <Route path="/explore-pgs" element={<ExploreHotels />} /> */}
          <Route path="/admin/fetchItems" element={<Fetch />} />
          <Route path="/admin" element={<Admin />} />

>>>>>>> 7430426 (admin panel created)
        </Routes>
     </FetchProvider>
      </>
  );
}

export default App;

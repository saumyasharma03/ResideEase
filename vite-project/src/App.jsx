import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import ExploreHotels from "./pages/ExploreHotels";

import HotelDetailPage from "./pages/HotelDetails";

import Admin from "./components/Admin";
import Fetch from "./components/Fetch";
import {FetchProvider} from "./context/FetchContext";


import AddItem from "./components/AddItem";
import AddUser from "./components/AddUser";
import RemoveUser from "./components/RemoveUser.jsx"
import FetchUsers from "./components/FetchUsers.jsx";


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

          <Route path="/explore-pgs" element={<ExploreHotels />} />
          <Route path="/admin/fetchItems" element={<Fetch tag={1}/>} />
          <Route path="/admin/removeItems" element={<Fetch tag={2} />} />
          <Route path="/admin/addItem" element={<AddItem />} />
          <Route path="/admin/addUser" element={<AddUser />} />
          <Route path="/admin/removeUser" element={<RemoveUser />} />
          <Route path="/admin/fetchUsers" element={<FetchUsers />} />
          <Route path="/admin" element={<Admin />} />


        </Routes>
     </FetchProvider>
      </>
  );
}

export default App;

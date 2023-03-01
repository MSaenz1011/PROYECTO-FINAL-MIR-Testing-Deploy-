import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import HotelList from "./pages/HotelList/HotelListpage";
import Signuppage from "./pages/Signup/Signuppage";
import "./App.css";
import "./pages/UniversalComponents/BaseStyles.css";
import Bookingpage from "./pages/Bookings-Checkouts/Bookingpage";
import Page404 from "./pages/404/Page404";
import NavBar from "./pages/UniversalComponents/NavBar";
import Footer from "./pages/UniversalComponents/Footer";
import UpButton from "./pages/UniversalComponents/UpButton";

function App() {
  return (
    <div>
      <NavBar />
      <UpButton/>
      <Routes>
        {/* <Route exact path="/XXX" element={<XXX />} /> */}
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/hotel-list" element={<HotelList />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route exact path="/bookings" element={<Bookingpage />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

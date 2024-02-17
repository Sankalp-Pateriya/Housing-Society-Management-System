import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import AddBuilding from "./component/addbuilding.jsx";
import AddFlat from "./component/addflat.jsx";
import AddUser from "./component/adduser.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact"; // Import Contact component
import Terms from "./pages/Terms"; // Import Terms component
import Sitemap from "./pages/Sitemap.jsx";
import SeeAll from "./pages/newHome.jsx";
import ViewBuilding from "./pages/ViewBuilding.jsx";
function App() {
  return (
    <>
      <div className="App container-fluid p-0 m-0">
        <Header />
        <div className="section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/seeAll" element={<SeeAll />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/buildings/:bid" element={<ViewBuilding />} />
            <Route path="/add-building" element={<AddBuilding />} />
            <Route path="/add-flat" element={<AddFlat />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />{" "}
            {/* New route for Terms page */}
            <Route path="/contact" element={<Contact />} />{" "}
            {/* New route for Contact page */}
            <Route path="/sitemap" element={<Sitemap />} />{" "}
            {/* New route for Contact page */}
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

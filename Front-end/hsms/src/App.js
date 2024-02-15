import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link } from 'react-router-dom';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';
import About from './pages/About.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import AddBuilding from './component/addbuilding.jsx'; // Corrected import path
import AddFlat from './component/addflat.jsx'; // Corrected import path
import AddUser from './component/adduser.jsx'; // Corrected import path
import FlatCard from './component/FlatCard.jsx';

function App() {
  return (
    <>
      <div className="App container-fluid p-0 m-0">
        <Header />
        <div className='section'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-building" element={<AddBuilding />} />
            <Route path="/add-flat" element={<AddFlat />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/flats/${building.id}" element={<FlatCard />} />
          </Routes>
          {/* To Create links or buttons to navigate to different pages */}
          {/* <Link to="/add-building">Add Building</Link>
          <Link to="/add-flat">Add Flat</Link>
          <Link to="/add-user">Add User</Link> */}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

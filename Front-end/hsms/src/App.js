import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Signup from './pages/Signup';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';

function App() {
  return (
    <>
      <div className="App container-fluid p-0 m-0">
        <Header />
       <div className='section'>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
       </div>
       
        <Footer />
      </div>
    </>
  );
}

export default App;

import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import Contacts from './Pages/Contacts/Contacts';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar />
      

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>

    </div>
  );
}

export default App;
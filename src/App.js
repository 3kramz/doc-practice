import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>

    </div>
  );
}

export default App;
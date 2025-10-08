import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Product from './Pages/Product.jsx';
import Feedback from './Pages/Feedback.jsx';
import Login from './Pages/login';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

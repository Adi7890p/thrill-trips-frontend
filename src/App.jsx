import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Lenis from 'lenis';
import AdminPanel from './pages/AdminPanel';
import Register from './pages/Register';
import User from './pages/User';
import Booking from './pages/Booking';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';


const App = () => {
  const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

    smoothWheel: true,
    smoothTouch: false
  });

  try {
    window.lenis = lenis;
  } catch (e) {
  }

  // Animation loop
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<User />} />
        <Route path='/booking/' element={<Booking />} />
        <Route path='/about/' element={<About />} />
      </Routes>
    </div>
  )
}

export default App

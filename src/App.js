import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import HomePage from './components/pages/HomePage';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import LandingPages from './components/LandingPages';
import Blog from './components/pages/Blog';
import Industries from './components/pages/Industries';
import ForgotPassword from './components/pages/ForgotPassword';


const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPages />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

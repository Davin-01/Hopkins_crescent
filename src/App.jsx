import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

// Import pages
import Home from './pages/Home';
import Services from './pages/Services';
import Departments from './pages/Departments';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Appointments from './pages/Appointments';
import Footer from './components/Footer';

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hopkins Crescent</h1>
              <p className="text-sm text-gray-600">Hospital</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/departments" className="text-gray-700 hover:text-blue-600 transition">Departments</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/contacts" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t flex flex-col space-y-2">
            <Link to="/" className="py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/services" className="py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/departments" className="py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Departments</Link>
            <Link to="/about" className="py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contacts" className="py-2 text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link 
              to="/appointments" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

// Main App Component
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-6 h-6 object-contain"
                            />
                            </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Hopkins Crescent</h1>
                            <p className="text-sm text-gray-600">Hospital</p>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                        <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
                        <a href="#departments" className="text-gray-700 hover:text-blue-600 transition">Departments</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
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
                    <nav className="md:hidden py-4 border-t">
                        <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
                        <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
                        <a href="#departments" className="block py-2 text-gray-700 hover:text-blue-600">Departments</a>
                        <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
                        <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
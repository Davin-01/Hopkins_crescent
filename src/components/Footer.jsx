import React from 'react';
import { Heart, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Logo & Tagline */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Heart size={24} />
                        </div>
                        <div className="text-left">
                            <h2 className="text-xl font-bold">Hopkins Crescent</h2>
                            <p className="text-gray-400 text-sm">Hospital</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                        Dedicated to providing compassionate healthcare for over 25 years.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                        <Phone size={16} />
                        <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail size={16} />
                        <span>care@hopkinshospital.com</span>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                    <a href="/services" className="text-gray-400 hover:text-white transition">Services</a>
                    <a href="/departments" className="text-gray-400 hover:text-white transition">Departments</a>
                    <a href="/appointments" className="text-gray-400 hover:text-white transition">Appointments</a>
                    <a href="/about" className="text-gray-400 hover:text-white transition">About</a>
                    <a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Hopkins Crescent Hospital
                    </p>
                    <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
                        <a href="#" className="hover:text-gray-300 transition">Privacy</a>
                        <a href="#" className="hover:text-gray-300 transition">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
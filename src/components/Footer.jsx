import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Hopkins Crescent</h3>
                                <p className="text-sm text-gray-400">Hospital</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">Committed to your health and wellbeing since 1995</p>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#services" className="hover:text-white transition">Services</a></li>
                            <li><a href="#departments" className="hover:text-white transition">Departments</a></li>
                            <li><a href="#appointment" className="hover:text-white transition">Book Appointment</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-4">Patient Resources</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Patient Portal</a></li>
                            <li><a href="#" className="hover:text-white transition">Visiting Hours</a></li>
                            <li><a href="#" className="hover:text-white transition">Insurance</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-4">Connect With Us</h4>
                        <p className="text-gray-400 text-sm mb-2">Follow us on social media for updates and health tips</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">f</a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition">t</a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">in</a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2024 Hopkins Crescent Hospital. All rights reserved. | <a href="#" className="hover:text-white transition">Privacy Policy</a> | <a href="#" className="hover:text-white transition">Terms of Service</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
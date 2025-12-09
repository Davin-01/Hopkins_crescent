import React from 'react';
import { Phone, Activity, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6">Your Health, Our Priority</h2>
            <p className="text-xl mb-8 text-blue-100">Providing exceptional healthcare services with compassion and expertise for over 5 years.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Book Appointment
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Emergency Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Activity className="text-white" size={32} />
              <div>
                <h3 className="text-xl font-bold">24/7 Emergency Services</h3>
                <p className="text-red-100">Immediate care when you need it most</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-2xl font-bold">
              <Phone size={28} />
              <span>911 or (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare services for all your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Appointments</h3>
              <p className="text-gray-600 mb-4">Book appointments online with our specialists</p>
              <Link to="/appointment" className="text-blue-600 font-semibold hover:text-blue-700">Book Now →</Link>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600 mb-4">24/7 emergency medical services</p>
              <Link to="/contact" className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</Link>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Specialized Departments</h3>
              <p className="text-gray-600 mb-4">Expert treatment across medical specialties</p>
              <Link to="/departments" className="text-blue-600 font-semibold hover:text-blue-700">View All →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
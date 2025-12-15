import React from 'react';
import { Phone, Activity, Calendar, Award, Users, Clock, Heart, Stethoscope, Shield, CheckCircle, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpeg';

const Home = () => {
  
  const features = [
    {
      icon: Shield,
      title: 'Advanced Medical Technology',
      description: 'State-of-the-art equipment and modern diagnostic facilities'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Patient-centered approach with personalized treatment plans'
    },
    {
      icon: Award,
      title: 'Experienced Specialists',
      description: 'Highly qualified medical professionals with years of expertise'
    },
    {
      icon: CheckCircle,
      title: 'Accredited Facility',
      description: 'Certified healthcare services meeting international standards'
    }
  ];

  const departments = [
    { name: 'Cardiology', icon: Heart, color: 'red' },
    { name: 'Pediatrics', icon: Users, color: 'blue' },
    { name: 'Orthopedics', icon: Activity, color: 'green' },
    { name: 'Neurology', icon: Activity, color: 'purple' },
    { name: 'General Medicine', icon: Stethoscope, color: 'indigo' },
    { name: 'Emergency Care', icon: Activity, color: 'red' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: `url(${backgroundImage})`}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 align-center">
              <span className="text-sm font-semibold">🏥 Trusted Healthcare Provider Since 2020</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Your Health, Our Priority</h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">Providing exceptional healthcare services with compassion, innovation, and expertise. Experience world-class medical care right here in your community.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointments" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Appointment
              </Link>
              <Link to="/contacts" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Emergency Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full animate-pulse">
                <Activity className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold">24/7 Emergency Services</h3>
                <p className="text-red-100">Immediate care when you need it most</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-2xl font-bold bg-white/20 px-6 py-3 rounded-lg">
              <Phone size={28} />
              <span>+254 748 206 580</span>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Committed to providing the highest quality healthcare with a patient-first approach</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Specialized care across multiple medical disciplines</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-${dept.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <dept.icon className={`text-${dept.color}-600`} size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{dept.name}</h3>
                    <p className="text-sm text-gray-500">Expert specialists</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20 bg-white mt-0.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive healthcare services designed around your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Calendar className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Easy Appointments</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">Book appointments online with our specialists at your convenience. Fast, simple, and secure.</p>
                <Link to="/appointment" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Book Now →</Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Activity className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Emergency Care</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">24/7 emergency medical services with rapid response teams ready to help you anytime.</p>
                <Link to="/contact" className="block text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">Learn More →</Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Stethoscope className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center">Specialized Departments</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">Expert treatment across multiple medical specialties with advanced technology.</p>
                <Link to="/departments" className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">View All →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Quality Healthcare?</h2>
            <p className="text-xl mb-8 text-blue-100">Join thousands of satisfied patients who trust us with their health. Schedule your appointment today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointment" className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg">
                Book an Appointment
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
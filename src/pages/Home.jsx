import React from 'react';
import { Phone, Activity, Calendar, Award, Users, Clock, Heart, Stethoscope, Shield, CheckCircle, MapPin, Mail, ArrowRight } from 'lucide-react';
import BackgroundImage from '../assets/background.jpeg';
import { Link } from 'react-router-dom';

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

  const stats = [
    { number: '50-65', label: 'Bed Capacity', icon: Activity },
    { number: '24/7', label: 'Emergency Care', icon: Clock },
    { number: 'Level 4', label: 'Certified Facility', icon: Award },
    { number: '2020', label: 'Established', icon: CheckCircle }
  ];

  return (
    <div className="overflow-x-hidden mb-2">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-transparent text-white py-14 sm:py-20 md:py-24 lg:py-32 overflow-hidden min-h-[600px] sm:min-h-[700px] flex items-center">
        {/* Background Image with Mobile Optimization */}
       <div 
  className="absolute inset-0 bg-cover bg-center opacity-90"
  style={{
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }}
></div>

        
        {/* Gradient Overlay - Enhanced for Mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-blue-900/40"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-semibold">🏥 Trusted Healthcare Provider Since 2020</span>
            </div>
            
            {/* Main Heading - Mobile Responsive */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Hopkins Referral Hospitals
            </h1>
            
            {/* Description - Mobile Optimized */}
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium text-blue-100 leading-relaxed">
              Founded in September 2020, located along the busy Kanduyi-Bungoma Road, next to Shell petrol station. 
              Registered as a Private Limited Company and certified as a Level 4 facility by the Kenya Medical Practitioners 
              and Dentists Board. We offer comprehensive inpatient and outpatient services with 50-65 bed capacity.
            </p>
            
            {/* CTA Buttons - Mobile Stack */}
           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to="/Info"
                    className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
                  >
                    More Info
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/Contacts"
                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-center"
                  >
                    Emergency Info
                  </Link>
</div>

          </div>
        </div>
      </section>

      {/* Emergency Banner - Mobile Optimized */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 sm:py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="bg-white/20 p-2 sm:p-3 rounded-full animate-pulse">
                <Activity className="text-white" size={24} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold">24/7 Emergency Services</h3>
                <p className="text-sm sm:text-base text-red-100">Immediate care when you need it most</p>
              </div>
            </div>
            <a 
              href="tel:+254748206580"
              className="flex items-center space-x-2 text-xl sm:text-2xl font-bold bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white/30 transition"
            >
              <Phone size={20} className="sm:w-7 sm:h-7" />
              <span className="text-base sm:text-2xl">+254 748 206 580</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section - NEW */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
              Committed to providing the highest quality healthcare with a patient-first approach
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Medical Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
              Specialized care across multiple medical disciplines
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <dept.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{dept.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Expert specialists</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Medical Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
              Comprehensive healthcare services designed around your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center">Easy Appointments</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed">
                  Book appointments online with our specialists at your convenience. Fast, simple, and secure.
                </p>
                <a href="/appointment" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Book Now →
                </a>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-red-50 to-white p-6 sm:p-8 rounded-2xl border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Activity className="text-white" size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center">Emergency Care</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed">
                  24/7 emergency medical services with rapid response teams ready to help you anytime.
                </p>
                <a href="/contact" className="block text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                  Learn More →
                </a>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 rounded-2xl border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Stethoscope className="text-white" size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center">Specialized Departments</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed">
                  Expert treatment across multiple medical specialties with advanced technology.
                </p>
                <a href="/departments" className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  View All →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
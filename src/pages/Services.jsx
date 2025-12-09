import React from 'react'
import { Calendar, Activity, Stethoscope } from 'lucide-react'; 

const Services = () => {
    return (
        

<section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare services designed to meet all your medical needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scheduled Appointments</h3>
              <p className="text-gray-600">Book consultations with our specialists at your convenience</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-600">Round-the-clock emergency medical services</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Specialized Care</h3>
              <p className="text-gray-600">Expert treatment across multiple medical specialties</p>
            </div>
          </div>
        </div>
      </section>
    )}

export default Services
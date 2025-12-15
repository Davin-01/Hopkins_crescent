import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contacts = () => {
    return (
    
<section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">Get in touch with Hopkins Crescent Hospital</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">Main: +254 748 206 580 </p>
              <p className="text-gray-600">Emergency: +254 748 206 580 </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">P.O. BOX 2338-50200. </p>
              <p className="text-gray-600">KANDUYI-BUNGOMA ROAD, NEXT TO SHELL </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
              <p className="text-gray-600">Emergency: 24/7</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contacts
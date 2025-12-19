import React from 'react';

const About = () => {
    
    return (
<section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Hopkins Crescent Hospital</h2>
              <p className="text-gray-600 mb-4">The Hopkins Crescent Hospitals was founded in September 2020. 
                It is located along the busy Kanduyi- Bungoma Road,
                 Next to the Shell petrol station. The Hospital facility is registered as a Private Limited Company (PLC) by the Registrar of companies. 
                 It is also registered by the Kenya Medical Practitioners and Dentists Board as a level 4 facility. 
                It offers Inpatient and outpatient services. We have a 50- 65 bed capacity to cater for the inpatient. </p>
              <p className="text-gray-600 mb-4">Our team of highly qualified doctors, nurses, and healthcare professionals 
                work tirelessly to ensure every patient receives personalized care tailored to their unique needs.</p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Medical Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20K+</div>
                  <div className="text-gray-600">Patients Annually</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence in Care</h4>
                    <p className="text-gray-600">Delivering the highest standards of medical treatment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compassion & Respect</h4>
                    <p className="text-gray-600">Treating every patient with dignity and understanding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">Embracing advanced medical technologies and practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
} 

export default About;
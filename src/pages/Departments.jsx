// Departments.jsx - SIMPLE VERSION
import React from 'react';
import { Heart, Activity, Stethoscope, Users, ChevronRight } from 'lucide-react';

export default function Departments() {
  // Define departments HERE, locally
  const departments = [
    { name: 'Cardiology', icon: Heart, description: 'Heart and cardiovascular care' },
    { name: 'Emergency Medicine', icon: Activity, description: '24/7 emergency services' },
    { name: 'General Practice', icon: Stethoscope, description: 'Primary care and consultations' },
    { name: 'Pediatrics', icon: Users, description: 'Specialized care for children' },
    { name: 'Orthopedics', icon: Activity, description: 'Bone and joint treatment' },
    { name: 'Radiology', icon: Activity, description: 'Imaging and diagnostics' }
  ];

  return (
    <section id="departments" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Medical Departments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our specialized departments staffed with experienced healthcare professionals</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition cursor-pointer border border-gray-100"
              >
                <Icon className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn more <ChevronRight size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
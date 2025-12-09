import React from "react";

const Appointments = () => {
    return (

<section id="appointment" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
            <p className="text-gray-600">Schedule your visit with our healthcare professionals</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={appointmentForm.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={appointmentForm.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={appointmentForm.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Department *</label>
                <select 
                  name="department"
                  value={appointmentForm.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept.name}>{dept.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                <input 
                  type="date" 
                  name="date"
                  value={appointmentForm.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Additional Information</label>
              <textarea 
                name="message"
                value={appointmentForm.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            
            <button 
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Appointment Request
            </button>
          </div>
        </div>
      </section>
    );
}

export default Appointments
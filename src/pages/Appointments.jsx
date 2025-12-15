import React, { useState } from "react";

const Appointments = () => {
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    date: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const departments = [
    { name: "General Medicine" },
    { name: "Cardiology" },
    { name: "Pediatrics" },
    { name: "Orthopedics" },
    { name: "Dermatology" },
    { name: "Neurology" },
    { name: "Gynecology" },
    { name: "Dentistry" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!appointmentForm.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!appointmentForm.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(appointmentForm.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!appointmentForm.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(appointmentForm.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    
    if (!appointmentForm.department) {
      newErrors.department = "Please select a department";
    }
    
    if (!appointmentForm.date) {
      newErrors.date = "Please select a date";
    } else {
      const selectedDate = new Date(appointmentForm.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Please select a future date";
      }
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate form submission
    console.log("Appointment Request:", appointmentForm);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setAppointmentForm({
        name: "",
        email: "",
        phone: "",
        department: "",
        date: "",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="appointment" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
          <p className="text-gray-600">Schedule your visit with our healthcare professionals</p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Appointment Request Submitted!</h3>
            <p className="text-green-700">We'll contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={appointmentForm.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={appointmentForm.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={appointmentForm.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.phone ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                  placeholder="+254 700 000 000"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Department *</label>
                <select 
                  name="department"
                  value={appointmentForm.department}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.department ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                >
                  <option value="">Select a department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept.name}>{dept.name}</option>
                  ))}
                </select>
                {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                <input 
                  type="date" 
                  name="date"
                  value={appointmentForm.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.date ? 'border-red-500 focus:ring-red-600' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
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
                placeholder="Please provide any additional details about your appointment..."
              ></textarea>
            </div>

            <button 
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Appointment Request
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Appointments;
import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  Users, 
  Heart, 
  Clock, 
  Shield, 
  Activity,
  Stethoscope,
  Ambulance,
  BedDouble,
  Microscope,
  Syringe,
  Baby,
  Brain,
  Eye,
  Bone,
  Pill,
  FlaskConical,
  Radio,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import BgImage from '../assets/background.jpeg';

const Info = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const hospitalInfo = {
    established: "September 2020",
    location: "Kanduyi-Bungoma Road, Next to Shell Petrol Station",
    registration: "Private Limited Company (PLC)",
    certification: "Level 4 Facility - Kenya Medical Practitioners and Dentists Board",
    bedCapacity: "50-65 Beds",
    services: "Inpatient & Outpatient Services"
  };

  const departments = [
    {
      name: "Emergency & Trauma Care",
      icon: Ambulance,
      color: "red",
      description: "24/7 emergency services with rapid response team",
      services: ["Trauma Care", "Critical Care", "Emergency Surgery", "Resuscitation"]
    },
    {
      name: "Cardiology",
      icon: Heart,
      color: "rose",
      description: "Comprehensive heart and cardiovascular care",
      services: ["ECG", "Echocardiography", "Cardiac Monitoring", "Hypertension Management"]
    },
    {
      name: "Pediatrics",
      icon: Baby,
      color: "blue",
      description: "Specialized healthcare for infants, children, and adolescents",
      services: ["Child Immunization", "Growth Monitoring", "Pediatric Surgery", "Neonatal Care"]
    },
    {
      name: "Orthopedics",
      icon: Bone,
      color: "green",
      description: "Treatment of musculoskeletal conditions and injuries",
      services: ["Fracture Management", "Joint Replacement", "Sports Injuries", "Rehabilitation"]
    },
    {
      name: "Neurology",
      icon: Brain,
      color: "purple",
      description: "Diagnosis and treatment of nervous system disorders",
      services: ["Stroke Management", "Epilepsy Care", "Headache Treatment", "Neurological Assessment"]
    },
    {
      name: "General Medicine",
      icon: Stethoscope,
      color: "indigo",
      description: "Comprehensive primary healthcare services",
      services: ["General Consultation", "Chronic Disease Management", "Preventive Care", "Health Screening"]
    },
    {
      name: "Maternity & Gynecology",
      icon: Heart,
      color: "pink",
      description: "Complete women's health and maternity services",
      services: ["Antenatal Care", "Delivery Services", "Postnatal Care", "Family Planning"]
    },
    {
      name: "Laboratory Services",
      icon: Microscope,
      color: "cyan",
      description: "Advanced diagnostic testing and analysis",
      services: ["Blood Tests", "Urinalysis", "Microbiology", "Histopathology"]
    },
    {
      name: "Radiology & Imaging",
      icon: Radio,
      color: "amber",
      description: "State-of-the-art medical imaging services",
      services: ["X-Ray", "Ultrasound", "CT Scan", "Mammography"]
    },
    {
      name: "Pharmacy",
      icon: Pill,
      color: "teal",
      description: "Full-service pharmacy with qualified pharmacists",
      services: ["Prescription Dispensing", "Drug Information", "Medication Counseling", "Medical Supplies"]
    },
    {
      name: "Ophthalmology",
      icon: Eye,
      color: "violet",
      description: "Comprehensive eye care and vision services",
      services: ["Eye Examination", "Vision Testing", "Eye Surgery", "Optical Services"]
    },
    {
      name: "Dental Services",
      icon: Activity,
      color: "sky",
      description: "Complete dental and oral healthcare",
      services: ["Dental Checkups", "Teeth Cleaning", "Extractions", "Dental Surgery"]
    }
  ];

  const facilities = [
    {
      icon: BedDouble,
      title: "Modern Ward Facilities",
      description: "Comfortable patient rooms with 50-65 bed capacity, including private and general wards"
    },
    {
      icon: Ambulance,
      title: "Emergency Services",
      description: "24/7 emergency department with ambulance services for rapid medical response"
    },
    {
      icon: Microscope,
      title: "Advanced Laboratory",
      description: "Fully equipped laboratory for comprehensive diagnostic testing and analysis"
    },
    {
      icon: Radio,
      title: "Imaging Center",
      description: "Modern radiology department with X-ray, ultrasound, and other imaging technologies"
    },
    {
      icon: Syringe,
      title: "Minor Theatre",
      description: "Sterile operating facilities for minor surgical procedures and interventions"
    },
    {
      icon: FlaskConical,
      title: "Pharmacy",
      description: "Well-stocked pharmacy providing quality medications and medical supplies"
    }
  ];

  const faqs = [
    {
      question: "What are your visiting hours?",
      answer: "Our visiting hours are from 2:00 PM to 8:00 PM daily. However, for ICU and special cases, please check with the nursing station for specific visiting arrangements."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we work with major insurance providers including NHIF and private insurance companies. Please bring your insurance card when visiting the hospital."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling +254 748 206 580, visiting our hospital in person, or using our online appointment booking system on our website."
    },
    {
      question: "Do you provide ambulance services?",
      answer: "Yes, we have 24/7 ambulance services available for emergency medical transportation. Call our emergency line for immediate assistance."
    },
    {
      question: "What should I bring for admission?",
      answer: "Please bring your identification documents, insurance card (if applicable), any previous medical records, current medications, and personal toiletries."
    },
    {
      question: "Is parking available at the hospital?",
      answer: "Yes, we have ample parking space available for patients and visitors at no charge."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-20 overflow-hidden">
  
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${BgImage})` }}
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-30"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
        <Building2 size={40} />
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
        About Hopkins Referral Hospitals
      </h1>

      <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
        Your trusted healthcare partner committed to excellence in medical care since 2020
      </p>
    </div>
  </div>

</section>


      {/* Hospital Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-2 text-base sm:text-lg">
                Hopkins Crescent Hospital was established in September 2020 with a vision to provide 
                accessible, quality healthcare to the community. Located along the busy Kanduyi-Bungoma Road, 
                next to Shell Petrol Station, we are strategically positioned to serve you better.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
                As a Private Limited Company registered with the Registrar of Companies and certified 
                by the Kenya Medical Practitioners and Dentists Board as a Level 4 facility, we maintain 
                the highest standards of medical excellence.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Our facility features a 50-65 bed capacity to accommodate both inpatient and outpatient 
                services, ensuring comprehensive care for all our patients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(hospitalInfo).map(([key, value], index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                  <div className="text-blue-600 font-semibold text-xs sm:text-sm uppercase mb-2">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-gray-900 font-bold text-sm sm:text-base">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Departments & Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Comprehensive healthcare services delivered by experienced medical professionals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 group hover:-translate-y-1">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${dept.color}-500 to-${dept.color}-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <dept.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{dept.name}</h3>
                    <p className="text-sm text-gray-600">{dept.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Services:</div>
                  <ul className="space-y-1">
                    {dept.services.map((service, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Modern infrastructure and equipment to support quality healthcare delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <facility.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{facility.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Staff Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Dedicated healthcare professionals committed to your wellbeing
            </p>
          </div>

          {/* CEO/Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Hospital Leadership</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* CEO Card */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 relative overflow-hidden">
                  {/* Placeholder for CEO image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users size={80} className="text-blue-600 opacity-30" />
                  </div>
                  {/* Replace with: <img src="/path-to-ceo-image.jpg" alt="CEO Name" className="w-full h-full object-cover" /> */}
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Dr. [CEO Name]</h4>
                  <p className="text-blue-600 font-semibold mb-2">Chief Executive Officer</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Leading Hopkins Crescent Hospital with vision and dedication to quality healthcare
                  </p>
                </div>
              </div>

              {/* Medical Director */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Stethoscope size={80} className="text-green-600 opacity-30" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Dr. [Name]</h4>
                  <p className="text-blue-600 font-semibold mb-2">Medical Director</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Overseeing clinical excellence and patient care standards
                  </p>
                </div>
              </div>

              {/* Director of Nursing */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart size={80} className="text-purple-600 opacity-30" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">[Name]</h4>
                  <p className="text-blue-600 font-semibold mb-2">Director of Nursing</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ensuring compassionate nursing care and staff development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Heads */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Department Heads</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { dept: 'Emergency Medicine', icon: Ambulance, color: 'red' },
                { dept: 'Cardiology', icon: Heart, color: 'rose' },
                { dept: 'Pediatrics', icon: Baby, color: 'blue' },
                { dept: 'Orthopedics', icon: Bone, color: 'green' },
                { dept: 'Neurology', icon: Brain, color: 'purple' },
                { dept: 'Laboratory Services', icon: Microscope, color: 'cyan' },
                { dept: 'Radiology', icon: Radio, color: 'amber' },
                { dept: 'Maternity', icon: Heart, color: 'pink' }
              ].map((dept, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <dept.icon size={60} className="text-gray-500 opacity-30" />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-base font-bold text-gray-900 mb-1">Dr. [Name]</h4>
                    <p className="text-sm text-blue-600 font-semibold">Head of {dept.dept}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medical Staff Gallery */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Our Medical Staff</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users size={40} className="text-blue-500 opacity-40 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">[Staff Name]</h4>
                    <p className="text-xs text-gray-600">[Position]</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Our dedicated team of doctors, nurses, and support staff work around the clock to ensure you receive 
                the best possible care. Each member brings expertise, compassion, and commitment to patient wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-base sm:text-lg pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Still Have Questions?</h2>
            <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8">
              Our friendly staff is here to help. Contact us today for more information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a 
                href="tel:+254748206580" 
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition shadow-xl text-base sm:text-lg"
              >
                <Phone size={20} />
                <span>Call Us</span>
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition text-base sm:text-lg"
              >
                <Mail size={20} />
                <span>Contact Form</span>
              </a>
              <a 
                href="/appointments" 
                className="inline-flex items-center justify-center space-x-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-400 transition shadow-lg text-base sm:text-lg"
              >
                <Calendar size={20} />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
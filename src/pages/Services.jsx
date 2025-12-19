import React, { useState } from 'react';
import { 
  Stethoscope,
  Heart,
  Baby,
  Bone,
  Brain,
  Eye,
  Ambulance,
  Activity,
  Microscope,
  Radio,
  Pill,
  Syringe,
  TestTube,
  Scan,
  Thermometer,
  HeartPulse,
  BedDouble,
  Clock,
  Shield,
  Award,
  CheckCircle,
  Users,
  Phone,
  Calendar,
  ArrowRight,
  ChevronRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Stethoscope },
    { id: 'emergency', name: 'Emergency', icon: Ambulance },
    { id: 'specialist', name: 'Specialist Care', icon: Heart },
    { id: 'diagnostic', name: 'Diagnostics', icon: Microscope },
    { id: 'surgical', name: 'Surgical', icon: Activity },
    { id: 'wellness', name: 'Wellness', icon: Sparkles }
  ];

  const allServices = [
    {
      category: 'emergency',
      icon: Ambulance,
      title: '24/7 Emergency Services',
      description: 'Round-the-clock emergency medical care with rapid response team',
      color: 'red',
      featured: true,
      services: [
        'Trauma & Accident Care',
        'Critical Care Unit',
        'Emergency Surgery',
        'Cardiac Emergencies',
        'Stroke Management',
        'Ambulance Services'
      ],
      availability: '24/7 Available',
      responseTime: 'Immediate Response'
    },
    {
      category: 'specialist',
      icon: Heart,
      title: 'Cardiology Services',
      description: 'Comprehensive heart and cardiovascular care by experienced cardiologists',
      color: 'rose',
      featured: true,
      services: [
        'ECG & Echocardiography',
        'Cardiac Stress Tests',
        'Holter Monitoring',
        'Hypertension Management',
        'Heart Disease Prevention',
        'Cardiac Rehabilitation'
      ],
      availability: 'Mon-Sat',
      responseTime: 'Same Day Appointments'
    },
    {
      category: 'specialist',
      icon: Baby,
      title: 'Pediatric Care',
      description: 'Specialized healthcare for infants, children, and adolescents',
      color: 'blue',
      featured: true,
      services: [
        'Well-Baby Checkups',
        'Child Immunization',
        'Growth & Development Monitoring',
        'Pediatric Surgery',
        'Neonatal Care',
        'Childhood Diseases Treatment'
      ],
      availability: 'Mon-Sun',
      responseTime: 'Same Day Available'
    },
    {
      category: 'specialist',
      icon: Bone,
      title: 'Orthopedic Services',
      description: 'Treatment of musculoskeletal conditions, injuries, and disorders',
      color: 'green',
      services: [
        'Fracture Management',
        'Joint Replacement Surgery',
        'Sports Injury Treatment',
        'Arthritis Care',
        'Spine Surgery',
        'Physical Rehabilitation'
      ],
      availability: 'Mon-Fri',
      responseTime: 'Within 48 Hours'
    },
    {
      category: 'specialist',
      icon: Brain,
      title: 'Neurology Department',
      description: 'Diagnosis and treatment of nervous system and brain disorders',
      color: 'purple',
      services: [
        'Stroke Management',
        'Epilepsy Treatment',
        'Headache & Migraine Care',
        'Movement Disorders',
        'Neurological Assessment',
        'Nerve Conduction Studies'
      ],
      availability: 'Mon-Fri',
      responseTime: 'Within 3 Days'
    },
    {
      category: 'specialist',
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare and management of chronic conditions',
      color: 'indigo',
      services: [
        'General Consultation',
        'Chronic Disease Management',
        'Preventive Health Screening',
        'Diabetes Care',
        'Respiratory Conditions',
        'Infectious Diseases'
      ],
      availability: 'Mon-Sun',
      responseTime: 'Walk-In Welcome'
    },
    {
      category: 'specialist',
      icon: Heart,
      title: 'Maternity & Gynecology',
      description: 'Complete women\'s health, pregnancy, and childbirth services',
      color: 'pink',
      featured: true,
      services: [
        'Antenatal Care',
        'Normal & Cesarean Delivery',
        'Postnatal Care',
        'Family Planning',
        'Gynecological Surgery',
        'High-Risk Pregnancy Care'
      ],
      availability: '24/7 Available',
      responseTime: 'Immediate for Labor'
    },
    {
      category: 'diagnostic',
      icon: Microscope,
      title: 'Laboratory Services',
      description: 'Advanced diagnostic testing with accurate and timely results',
      color: 'cyan',
      services: [
        'Blood Tests & Analysis',
        'Urinalysis',
        'Microbiology Testing',
        'Histopathology',
        'Hormone Testing',
        'COVID-19 Testing'
      ],
      availability: 'Mon-Sun',
      responseTime: '24-48 Hours Results'
    },
    {
      category: 'diagnostic',
      icon: Radio,
      title: 'Radiology & Imaging',
      description: 'State-of-the-art medical imaging for accurate diagnosis',
      color: 'amber',
      services: [
        'Digital X-Ray',
        'Ultrasound Scanning',
        'CT Scan Services',
        'Mammography',
        'Fluoroscopy',
        'Contrast Studies'
      ],
      availability: 'Mon-Sat',
      responseTime: 'Same Day Results'
    },
    {
      category: 'surgical',
      icon: Activity,
      title: 'Surgical Services',
      description: 'Minor and major surgical procedures in modern operating theaters',
      color: 'red',
      services: [
        'General Surgery',
        'Minor Procedures',
        'Emergency Surgery',
        'Laparoscopic Surgery',
        'Orthopedic Surgery',
        'Gynecological Surgery'
      ],
      availability: 'Mon-Sat',
      responseTime: 'Scheduled Procedures'
    },
    {
      category: 'specialist',
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Comprehensive eye care and vision services',
      color: 'violet',
      services: [
        'Eye Examinations',
        'Vision Testing',
        'Cataract Surgery',
        'Glaucoma Treatment',
        'Eye Infection Treatment',
        'Optical Services'
      ],
      availability: 'Mon-Fri',
      responseTime: 'Within 1 Week'
    },
    {
      category: 'specialist',
      icon: Activity,
      title: 'Dental Services',
      description: 'Complete dental and oral healthcare services',
      color: 'sky',
      services: [
        'Dental Checkups',
        'Teeth Cleaning & Scaling',
        'Tooth Extraction',
        'Dental Fillings',
        'Root Canal Treatment',
        'Dental Surgery'
      ],
      availability: 'Mon-Sat',
      responseTime: 'Same Week'
    },
    {
      category: 'wellness',
      icon: Pill,
      title: 'Pharmacy Services',
      description: 'Full-service pharmacy with quality medications',
      color: 'teal',
      services: [
        'Prescription Dispensing',
        'Over-the-Counter Medications',
        'Drug Information Services',
        'Medication Counseling',
        'Medical Supplies',
        'Home Delivery Available'
      ],
      availability: 'Mon-Sun',
      responseTime: 'Immediate'
    },
    {
      category: 'wellness',
      icon: Syringe,
      title: 'Vaccination Services',
      description: 'Comprehensive immunization programs for all ages',
      color: 'green',
      services: [
        'Child Immunization',
        'Adult Vaccines',
        'Travel Vaccines',
        'COVID-19 Vaccination',
        'Flu Shots',
        'HPV Vaccination'
      ],
      availability: 'Mon-Sat',
      responseTime: 'Walk-In Available'
    },
    {
      category: 'wellness',
      icon: HeartPulse,
      title: 'Health Screening',
      description: 'Preventive health checkups and wellness programs',
      color: 'orange',
      services: [
        'Executive Health Checkup',
        'Diabetes Screening',
        'Cancer Screening',
        'Heart Health Assessment',
        'Pre-Employment Medical',
        'Lifestyle Disease Screening'
      ],
      availability: 'Mon-Sat',
      responseTime: 'By Appointment'
    },
    {
      category: 'specialist',
      icon: BedDouble,
      title: 'Inpatient Services',
      description: 'Comfortable hospital ward facilities with 24/7 nursing care',
      color: 'gray',
      services: [
        'General Ward (50-65 Beds)',
        'Private Rooms',
        'ICU Care',
        'Post-Surgical Care',
        '24/7 Nursing Support',
        'Patient Monitoring'
      ],
      availability: '24/7 Available',
      responseTime: 'Based on Bed Availability'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const featuredServices = allServices.filter(service => service.featured);

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Experienced Specialists',
      description: 'Highly qualified medical professionals with years of expertise'
    },
    {
      icon: Shield,
      title: 'Quality Care',
      description: 'Level 4 facility certified by Kenya Medical Practitioners Board'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Efficient service delivery with minimal wait times'
    },
    {
      icon: Heart,
      title: 'Patient-Centered',
      description: 'Compassionate care tailored to individual needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-700  text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Stethoscope size={40} />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Medical Services
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive healthcare solutions delivered with expertise, compassion, and cutting-edge technology. 
              Your health and wellbeing are our top priorities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/appointments" 
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition shadow-xl text-base sm:text-lg group"
              >
                Book Appointment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="tel:+254748206580" 
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition text-base sm:text-lg"
              >
                <Phone className="mr-2" size={20} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Highlight */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <Sparkles size={18} />
              <span className="font-semibold text-sm">Most Popular</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Our most sought-after medical services available 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <div className="relative bg-white p-6 rounded-2xl border-2 border-gray-200 group-hover:border-transparent transition-all h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="flex items-center text-xs text-blue-600 font-semibold">
                    <Clock size={14} className="mr-1" />
                    {service.availability}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <category.icon size={18} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden border border-gray-200 group">
                <div className={`h-2 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <service.icon className="text-white" size={28} />
                    </div>
                    {service.featured && (
                      <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.services.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {service.services.length > 4 && (
                      <div className="text-sm text-blue-600 font-semibold">
                        +{service.services.length - 4} more services
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <Clock size={14} className="mr-1" />
                        Availability:
                      </span>
                      <span className="font-semibold text-gray-900">{service.availability}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <Activity size={14} className="mr-1" />
                        Response:
                      </span>
                      <span className="font-semibold text-gray-900">{service.responseTime}</span>
                    </div>
                  </div>

                  <a 
                    href="/appointments"
                    className="mt-4 w-full inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition group/btn"
                  >
                    Book Now
                    <ChevronRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Excellence in healthcare delivery backed by expertise and compassion
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Medical Attention?</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Our team is ready to provide you with the best healthcare services. 
              Book an appointment or contact us for more information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/appointments" 
                className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition shadow-xl text-lg"
              >
                <Calendar className="mr-2" size={20} />
                Schedule Appointment
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition text-lg"
              >
                <MessageCircle className="mr-2" size={20} />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
import React, { useState } from 'react';
import { Calendar, Activity, Stethoscope, Heart, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Calendar,
      title: "Scheduled Appointments",
      description: "Book consultations with our specialists at your convenience",
      color: "blue",
      features: ["Online booking", "Same-day appointments", "Flexible scheduling"]
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "Round-the-clock emergency medical services",
      color: "red",
      features: ["24/7 availability", "Rapid response", "Expert trauma care"]
    },
    {
      icon: Stethoscope,
      title: "Specialized Care",
      description: "Expert treatment across multiple medical specialties",
      color: "purple",
      features: ["Board-certified doctors", "Advanced diagnostics", "Personalized treatment"]
    },
    {
      icon: Heart,
      title: "Preventive Care",
      description: "Proactive health monitoring and wellness programs",
      color: "green",
      features: ["Health screenings", "Vaccination programs", "Wellness coaching"]
    },
    {
      icon: Users,
      title: "Family Medicine",
      description: "Comprehensive care for patients of all ages",
      color: "amber",
      features: ["Pediatric care", "Geriatric services", "Family planning"]
    },
    {
      icon: Clock,
      title: "Telemedicine",
      description: "Virtual consultations from the comfort of your home",
      color: "cyan",
      features: ["Video consultations", "E-prescriptions", "Remote monitoring"]
    }
  ];

  const getColorClasses = (color, isHovered) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        hover: "group-hover:bg-blue-600",
        icon: "text-blue-600",
        iconHover: "group-hover:text-white",
        badge: "bg-blue-100 text-blue-700"
      },
      red: {
        bg: "bg-red-50",
        hover: "group-hover:bg-red-600",
        icon: "text-red-600",
        iconHover: "group-hover:text-white",
        badge: "bg-red-100 text-red-700"
      },
      purple: {
        bg: "bg-purple-50",
        hover: "group-hover:bg-purple-600",
        icon: "text-purple-600",
        iconHover: "group-hover:text-white",
        badge: "bg-purple-100 text-purple-700"
      },
      green: {
        bg: "bg-green-50",
        hover: "group-hover:bg-green-600",
        icon: "text-green-600",
        iconHover: "group-hover:text-white",
        badge: "bg-green-100 text-green-700"
      },
      amber: {
        bg: "bg-amber-50",
        hover: "group-hover:bg-amber-600",
        icon: "text-amber-600",
        iconHover: "group-hover:text-white",
        badge: "bg-amber-100 text-amber-700"
      },
      cyan: {
        bg: "bg-cyan-50",
        hover: "group-hover:bg-cyan-600",
        icon: "text-cyan-600",
        iconHover: "group-hover:text-white",
        badge: "bg-cyan-100 text-cyan-700"
      }
    };
    return colors[color];
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            WHAT WE OFFER
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Comprehensive Healthcare
            <span className="block text-blue-600 mt-2">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From preventive care to specialized treatments, we provide a full spectrum of medical services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color, hoveredCard === index);
            
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 ${colors.bg} ${colors.hover} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className={`${colors.icon} ${colors.iconHover} transition-colors duration-300`} size={28} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle size={16} className={`${colors.icon} mr-2 flex-shrink-0`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
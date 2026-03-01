import React, { useState } from 'react';
import { Heart, Activity, Stethoscope, Users, X, ChevronRight, Clock, UserCheck, Phone } from 'lucide-react';
import img1 from "../assets/images/Hopkins/img1.jpeg"
import img2 from "../assets/images/Hopkins/img2.jpeg"
import img3 from "../assets/images/Hopkins/img3.jpeg"
import img4 from "../assets/images/Hopkins/img4.jpeg"
import img12 from "../assets/images/Hopkins/img12.jpeg"
import img13 from "../assets/images/Hopkins/img13.jpeg"

const departments = [
  {
    name: 'Cardiology',
    icon: Heart,
    tagline: 'Heart & Cardiovascular Care',
    image: img1,
    color: 'rose',
    description: 'Our cardiology unit provides comprehensive diagnosis and treatment of heart and blood vessel conditions.',
    services: ['ECG & Echocardiography', 'Hypertension Management', 'Heart Failure Treatment', 'Cardiac Monitoring'],
    hours: 'Mon – Sat: 8:00 AM – 6:00 PM',
  },
  {
    name: 'Emergency Medicine',
    icon: Activity,
    tagline: '24/7 Emergency Services',
    image: img2,
    color: 'red',
    description: 'Round-the-clock emergency care with rapid-response teams equipped to handle all critical conditions.',
    services: ['Trauma & Injury Care', 'Resuscitation', 'Acute Illness Management', 'Ambulance Coordination'],
    hours: 'Open 24 Hours, 7 Days a Week',
  },
  {
    name: 'General Practice',
    icon: Stethoscope,
    tagline: 'Primary Care & Consultations',
    image: img3,
    color: 'blue',
    description: 'Our general practitioners offer preventive care, routine checkups, and management of common illnesses.',
    services: ['Routine Checkups', 'Chronic Disease Management', 'Immunizations', 'Health Screenings'],
    hours: 'Mon – Fri: 7:30 AM – 7:00 PM | Sat: 8:00 AM – 2:00 PM',
  },
  {
    name: 'Pediatrics',
    icon: Users,
    tagline: 'Specialized Care for Children',
    image: img4,
    color: 'sky',
    description: 'Dedicated pediatric care from newborns through adolescence, with a nurturing and child-friendly environment.',
    services: ['Newborn Care', 'Growth & Development Monitoring', 'Vaccination Programs', 'Pediatric Emergency Care'],
    hours: 'Mon – Sat: 8:00 AM – 5:00 PM',
  },
  {
    name: 'Orthopedics',
    icon: Activity,
    tagline: 'Bone & Joint Treatment',
    image: img12,
    color: 'green',
    description: 'Expert orthopedic care for musculoskeletal injuries, fractures, and joint conditions with modern treatment approaches.',
    services: ['Fracture Management', 'Joint Pain Treatment', 'Sports Injury Rehab', 'Physiotherapy Referrals'],
    hours: 'Mon – Fri: 8:00 AM – 5:00 PM',
  },
  {
    name: 'Radiology',
    icon: Activity,
    tagline: 'Imaging & Diagnostics',
    image: img13,
    color: 'indigo',
    description: 'State-of-the-art diagnostic imaging services to support accurate diagnosis across all departments.',
    services: ['X-Ray', 'Ultrasound', 'CT Scanning', 'Radiological Reporting'],
    hours: 'Mon – Sat: 8:00 AM – 6:00 PM',
  },
];

// Tailwind color map — needed because Tailwind purges dynamic class names
const colorMap = {
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-100',   icon: 'bg-rose-100',   text: 'text-rose-600',   badge: 'bg-rose-100 text-rose-700',   btn: 'bg-rose-600 hover:bg-rose-700' },
  red:    { bg: 'bg-red-50',    border: 'border-red-100',    icon: 'bg-red-100',    text: 'text-red-600',    badge: 'bg-red-100 text-red-700',    btn: 'bg-red-600 hover:bg-red-700' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   icon: 'bg-blue-100',   text: 'text-blue-600',   badge: 'bg-blue-100 text-blue-700',   btn: 'bg-blue-600 hover:bg-blue-700' },
  sky:    { bg: 'bg-sky-50',    border: 'border-sky-100',    icon: 'bg-sky-100',    text: 'text-sky-600',    badge: 'bg-sky-100 text-sky-700',    btn: 'bg-sky-600 hover:bg-sky-700' },
  green:  { bg: 'bg-green-50',  border: 'border-green-100',  icon: 'bg-green-100',  text: 'text-green-600',  badge: 'bg-green-100 text-green-700',  btn: 'bg-green-600 hover:bg-green-700' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', icon: 'bg-indigo-100', text: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-700', btn: 'bg-indigo-600 hover:bg-indigo-700' },
};

// ── MODAL ──────────────────────────────────────
const DepartmentModal = ({ dept, onClose }) => {
  if (!dept) return null;
  const c = colorMap[dept.color];
  const Icon = dept.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-48 rounded-t-2xl overflow-hidden">
          <img
            src={dept.image}
            alt={dept.name}
            className="w-full h-full object-cover"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <div className={`absolute inset-0 ${c.bg} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-5 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center`}>
              <Icon className={c.text} size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{dept.name}</h3>
              <p className="text-sm text-white/80">{dept.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center transition shadow"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm">{dept.description}</p>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Services Offered</h4>
            <div className="grid grid-cols-2 gap-2">
              {dept.services.map((s, i) => (
                <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${c.badge}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${c.text.replace('text-', 'bg-')}`} />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Info row */}
          <div className="grid grid-cols-1 gap-3 pt-1">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <Clock size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Working Hours</p>
                <p className="text-sm text-gray-700">{dept.hours}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <UserCheck size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">Department Lead</p>
                <p className="text-sm text-gray-700">{dept.lead}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`tel:${dept.contact}`}
            className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white text-sm font-semibold transition ${c.btn}`}
          >
            <Phone size={15} />
            Call This Department
          </a>
        </div>
      </div>
    </div>
  );
};

// ── MAIN COMPONENT ─────────────────────────────
export default function Departments() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="departments" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              Our Specialties
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Medical Departments</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Our specialized departments are staffed with experienced healthcare professionals dedicated to your wellbeing.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              const c = colorMap[dept.color];
              return (
                <div
                  key={index}
                  onClick={() => setSelected(dept)}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Department image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={e => {
                        e.target.parentElement.classList.add(c.bg);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Icon badge */}
                    <div className={`absolute top-3 left-3 w-9 h-9 rounded-xl ${c.icon} flex items-center justify-center shadow-sm`}>
                      <Icon className={c.text} size={18} />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{dept.name}</h3>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">{dept.tagline}</p>
                    <div className={`inline-flex items-center gap-1 text-xs font-semibold ${c.text} group-hover:gap-2 transition-all`}>
                      View Details <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Modal */}
      <DepartmentModal dept={selected} onClose={() => setSelected(null)} />
    </>
  );
}
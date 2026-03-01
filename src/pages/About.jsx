import React from 'react';
import {
  Building2, MapPin, Award, BedDouble,
  Clock, CheckCircle, Phone, Mail, Calendar,
  ShieldCheck, Users
} from 'lucide-react';
import BgImage from '../assets/background.jpeg';
import CeoPhoto from '../assets/images/Hopkins/CEO5.jpeg';

// ── Hospital quick-facts ──────────────────────────────────────
const stats = [
  { label: 'Established',   value: 'Sept 2020' },
  { label: 'Bed Capacity',  value: '50 – 65'   },
  { label: 'Certification', value: 'Level 4'   },
  { label: 'Emergency',     value: '24 / 7'    },
];

// ── Info cards ───────────────────────────────────────────────
const infoCards = [
  {
    icon: MapPin,
    title: 'Location',
    body: 'Kanduyi-Bungoma Road, next to Shell Petrol Station, Bungoma.',
  },
  {
    icon: ShieldCheck,
    title: 'Certification',
    body: 'Certified Level 4 facility by the Kenya Medical Practitioners and Dentists Board.',
  },
  {
    icon: Building2,
    title: 'Registration',
    body: 'Registered as a Private Limited Company with the Registrar of Companies.',
  },
  {
    icon: BedDouble,
    title: 'Capacity',
    body: '50–65 bed capacity offering comprehensive inpatient and outpatient services.',
  },
  {
    icon: Clock,
    title: 'Emergency Care',
    body: '24/7 emergency services with a rapid-response team always on standby.',
  },
  {
    icon: Users,
    title: 'Our People',
    body: 'A dedicated team of doctors, nurses, and support staff serving the community.',
  },
];

// ── Values ───────────────────────────────────────────────────
const values = [
  'Patient-centred care',
  'Clinical excellence',
  'Integrity & transparency',
  'Compassion & dignity',
  'Continuous improvement',
  'Community commitment',
];

// ── Main component ────────────────────────────────────────────
const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BgImage})` }}
        />
        {/* layered overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-blue-800/60 to-blue-700/50" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            Est. September 2020 · Level 4 Facility
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            About Hopkins<br className="hidden sm:block" /> Referral Hospital
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            A trusted healthcare partner committed to accessible, quality medical care
            for the Bungoma community and beyond.
          </p>
        </div>
      </section>

      {/* ── HOSPITAL OVERVIEW ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — narrative */}
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-5">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                Quality Healthcare,<br /> Close to Home
              </h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Hopkins Referral Hospital was founded in{' '}
                  <strong className="text-gray-900">September 2020</strong> with a clear
                  vision — to make specialist-level healthcare accessible to everyone in
                  the Bungoma region.
                </p>
                <p>
                  Strategically located along the busy{' '}
                  <strong className="text-gray-900">Kanduyi-Bungoma Road</strong>, next
                  to Shell Petrol Station, we serve both walk-in patients and referrals
                  from surrounding facilities.
                </p>
                <p>
                  As a{' '}
                  <strong className="text-gray-900">
                    Kenya Medical Practitioners and Dentists Board–certified Level 4
                  </strong>{' '}
                  facility, we uphold the highest standards of clinical excellence,
                  patient dignity, and community service.
                </p>
              </div>

              {/* Values checklist */}
              <div className="mt-8 grid grid-cols-2 gap-2">
                {values.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-blue-500 flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stat tiles */}
            <div className="space-y-4">
              {/* Stat row */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-6 hover:shadow-md transition"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">
                      {s.label}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 gap-3">
                {infoCards.slice(0, 3).map((card, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 hover:border-blue-100 hover:shadow-sm transition group"
                  >
                    <div className="w-9 h-9 flex-shrink-0 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <card.icon size={17} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                        {card.title}
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">{card.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REMAINING INFO CARDS (full width) ───────────────── */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-4">
            {infoCards.slice(3).map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 hover:border-blue-100 hover:shadow-sm transition group"
              >
                <div className="w-9 h-9 flex-shrink-0 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <card.icon size={17} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                    {card.title}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SPOTLIGHT ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              A Message from Our CEO
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Guided by vision, driven by compassion.
            </p>
          </div>

          {/* CEO card — horizontal on md+ */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row">

              {/* Photo */}
              <div className="md:w-64 lg:w-72 flex-shrink-0">
                <div className="aspect-square md:aspect-auto md:h-full overflow-hidden bg-blue-100">
                  <img
                    src={CeoPhoto}
                    alt="Chief Executive Officer"
                    className="w-full h-full object-cover object-top"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex','items-center','justify-center');
                    }}
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 p-7 sm:p-10 flex flex-col justify-center">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 italic">
                  "Our founding mission was simple — to bring specialist-level, compassionate healthcare
                  within reach of every family in this region. Every decision we make is guided by that
                  mission and by the trust our patients place in us."
                </p>
                <div>
                  <p className="text-lg font-bold text-gray-900">Dr. OMBONYE</p>
                  <p className="text-sm font-semibold text-blue-600 mb-1">
                    Chief Executive Officer
                  </p>
                  <p className="text-xs text-gray-400">Hopkins Referral Hospital · Est. 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting note */}
          <p className="text-center text-sm text-gray-400 mt-8 max-w-xl mx-auto">
            Behind our leadership is a full team of doctors, nurses, and support staff working
            around the clock to deliver quality, compassionate care to every patient.
          </p>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Our friendly team is ready to help. Reach out to us any time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="tel:+254748206580"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition shadow-md text-sm"
            >
              <Phone size={16} /> Call Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition text-sm"
            >
              <Mail size={16} /> Contact Form
            </a>
            <a
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md text-sm"
            >
              <Calendar size={16} /> Book Appointment
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
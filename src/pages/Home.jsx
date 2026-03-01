import React, { useState, useEffect, useCallback } from 'react';
import { Phone, Activity, Calendar, Award, Users, Clock, Heart, Stethoscope, Shield, CheckCircle, MapPin, Mail, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import BackgroundImage from '../assets/background.jpeg';
import img1 from '../assets/images/Hopkins/img1.jpeg'
import img2 from '../assets/images/Hopkins/img2.jpeg'
import img3 from '../assets/images/Hopkins/img3.jpeg'
import img4 from '../assets/images/Hopkins/img4.jpeg'
import img5 from '../assets/images/Hopkins/img5.jpeg'
import img6 from '../assets/images/Hopkins/img6.jpeg'
import { Link } from 'react-router-dom';
import Departments from './Departments';
import Insurance from './Insurance';

// CAROUSEL COMPONENT
const carouselSlides = [
  {
    src: img1,
    caption: 'Our Dedicated Medical Team',
    sub: 'Experienced professionals committed to your health',
  },
  {
    src: img5,
    caption: 'State-of-the-Art Facilities',
    sub: 'Modern equipment for accurate diagnosis and treatment',
  },
  {
    src: img3,
    caption: 'Compassionate Patient Care',
    sub: 'Every patient treated with dignity and respect',
  },
  {
    src: img4,
    caption: 'Our Specialist Doctors',
    sub: 'Highly qualified specialists across all departments',
  },
  {
    src: img2,
    caption: 'Hopkins Referral Hospital',
    sub: 'Your trusted Level 4 healthcare provider since 2020',
  },
  {
    src: img6,
    caption: 'Hopkins Referral Hospital',
    sub: 'Your trusted Level 4 healthcare provider since 2020',
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const goTo = useCallback(
    (index, dir = 'next') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 400);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % carouselSlides.length, 'next');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + carouselSlides.length) % carouselSlides.length, 'prev');
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = carouselSlides[current];

  return (
    <section className="py-12 sm:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A glimpse into our hospital, our staff, and the care we provide every day
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/7' }}>
          {/* Image */}
          <img
            key={current}
            src={slide.src}
            alt={slide.caption}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isAnimating
                ? direction === 'next'
                  ? 'opacity-0 scale-105'
                  : 'opacity-0 scale-95'
                : 'opacity-100 scale-100'
            }`}
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Caption */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-6 sm:p-10 transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <h3 className="text-xl sm:text-3xl font-bold text-white drop-shadow-lg mb-1">
              {slide.caption}
            </h3>
            <p className="text-sm sm:text-base text-white/80">{slide.sub}</p>
          </div>

          {/* Prev Button */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slide counter badge */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            {current + 1} / {carouselSlides.length}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 focus:outline-none ${
                i === current
                  ? 'w-8 h-3 bg-blue-400'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-2 sm:gap-3 mt-5 overflow-x-auto pb-2 scrollbar-hide">
          {carouselSlides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              className={`flex-shrink-0 w-16 h-12 sm:w-24 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none ${
                i === current
                  ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900 opacity-100 scale-105'
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              <img src={s.src} alt={s.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// MAIN HOME COMPONENT
// ─────────────────────────────────────────────
const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Medical Technology',
      description: 'State-of-the-art equipment and modern diagnostic facilities'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Patient-centered approach with personalized treatment plans'
    },
    {
      icon: Award,
      title: 'Experienced Specialists',
      description: 'Highly qualified medical professionals with years of expertise'
    },
    {
      icon: CheckCircle,
      title: 'Accredited Facility',
      description: 'Certified healthcare services meeting international standards'
    }
  ];

  return (
    <div className="overflow-x-hidden mb-2">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-blue-700/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="hidden lg:inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">
                🏥 Trusted Healthcare Provider Since 2020
              </span>
            </div>
            <h1 className="text-3xl text-white sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-float-slow">
              Hopkins Referral Hospital
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white font-semibold lg:hidden">
              A Level 4 certified hospital.
            </p>
            <p className="hidden lg:block mt-6 text-lg font-semibold text-white leading-relaxed">
              Founded in September 2020, located along the busy Kanduyi-Bungoma Road, next to Shell petrol station.
              Registered as a Private Limited Company and certified as a Level 4 facility by the Kenya Medical
              Practitioners and Dentists Board. We offer comprehensive inpatient and outpatient services with
              50–65 bed capacity.
            </p>
            <div className="mt-8 hidden flex flex-col sm:flex-row gap-4">
              <Link
                to="/Info"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-7 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition"
              >
                More Info <ArrowRight size={18} />
              </Link>
              <Link
                to="/Contacts"
                className="inline-flex items-center justify-center border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 sm:py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="bg-white/20 p-2 sm:p-3 rounded-full animate-pulse">
                <Activity className="text-white" size={24} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold">24/7 Emergency Services</h3>
                <p className="text-sm sm:text-base text-red-100">Immediate care when you need it most</p>
              </div>
            </div>
            <a
              href="tel:+254748206580"
              className="flex items-center space-x-2 text-xl sm:text-2xl font-bold bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white/30 transition"
            >
              <Phone size={20} className="sm:w-7 sm:h-7" />
              <span className="text-base sm:text-2xl">+254 748 206 580</span>
            </a>
          </div>
        </div>
      </section>

      <Carousel />

      <Insurance/>
      <Departments/>

    </div>
  );
};

export default Home;
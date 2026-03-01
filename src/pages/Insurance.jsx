import React from "react";

const partners = [
  {
    name: "SHA / NHIF",
    short: "SHA",
    description: "Social Health Authority",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    name: "Jubilee Insurance",
    short: "JUB",
    description: "Jubilee Health Insurance",
    bg: "bg-red-50",
    text: "text-red-600",
  },
  {
    name: "Madison Insurance",
    short: "MAD",
    description: "Madison General Insurance",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    name: "Britam Insurance",
    short: "BRT",
    description: "Britam Insurance Kenya",
    bg: "bg-orange-50",
    text: "text-orange-500",
  },
];

const Insurance = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            Accepted Insurance
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Trusted Insurance Partners
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We collaborate with leading insurance providers to ensure you receive
            seamless and affordable healthcare services.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div
                className={`w-20 h-20 rounded-2xl ${partner.bg} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110`}
              >
                <span
                  className={`text-xl font-extrabold tracking-tight ${partner.text}`}
                >
                  {partner.short}
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-1">
                {partner.name}
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                {partner.description}
              </p>

              <span className="inline-block text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                ✓ Accepted
              </span>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="bg-white border border-blue-100 shadow-lg rounded-3xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div>
            <p className="text-lg font-semibold text-gray-800">
              Not sure if your insurance is accepted?
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Our billing team can verify your coverage instantly.
            </p>
          </div>

          <a
            href="tel:+254748206580"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            📞 Call Us Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default Insurance;
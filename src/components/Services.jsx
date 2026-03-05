import { ArrowRight, Clock, Award, Users, Star, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const servicesData = [
  {
    id: 1,
    title: "Court Booking",
    desc: "Professional wood-sprung flooring with international standard lighting. Book your slot 24/7 with our easy online system.",
    img: "/assets/images/coaching.webp",
    icon: Clock,
    features: ["4K Lighting", "Wood-sprung floor", "AC controlled"],
    price: "From $15/hr",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Coaching",
    desc: "1-on-1 sessions with certified national-level badminton athletes. Personalized training plans for rapid improvement.",
    img: "/assets/images/trustee4.webp",
    icon: Award,
    features: ["National coaches", "Video analysis", "Progress tracking"],
    price: "From $40/session",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Racket Stringing",
    desc: "Precision stringing service with a wide variety of high-performance guts. Same-day service available.",
    img: "/assets/images/seriousBadmintonGuy.webp",
    icon: Sparkles,
    features: ["Pro strings", "Custom tension", "Free grip"],
    price: "From $25",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Sparring",
    desc: "Find practice partners at your skill level. Structured match play sessions to improve your game.",
    img: "/assets/images/sparing.webp",
    icon: Users,
    features: ["Skill matching", "Tournament prep", "Match analysis"],
    price: "From $20/hr",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Junior Academy",
    desc: "Nurturing the next generation of champions through structured drills, fun games, and professional guidance.",
    img: "/assets/images/coaching3.webp",
    icon: Star,
    features: ["Age 6-16", "Weekly tournaments", "Progression paths"],
    price: "From $120/month",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 6,
    title: "Community",
    desc: "A vibrant community of players of all levels. Weekly socials, tournaments, and events.",
    img: "/assets/images/friends.webp",
    icon: Users,
    features: ["Social events", "League play", "Member discounts"],
    price: "Free with membership",
    color: "from-indigo-500 to-purple-500",
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle card click on mobile
  const handleCardClick = (id) => {
    if (isMobile) {
      setExpandedId(expandedId === id ? null : id);
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-[0.2em]">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Premium Services
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-0.5 bg-purple-600/30 dark:bg-purple-400/30 rounded-full" />
            <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
            <div className="w-12 h-0.5 bg-purple-600/30 dark:bg-purple-400/30 rounded-full" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg">
            Tap any card to expand on mobile • Hover on desktop
          </p>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Scrollable Cards */}
        <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-8 px-4 md:px-0 snap-x scrollbar-thin scrollbar-track-gray-200 dark:scrollbar-track-gray-800 scrollbar-thumb-purple-600 hover:scrollbar-thumb-purple-500">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const isExpanded = isMobile
              ? expandedId === service.id
              : hoveredId === service.id;

            return (
              <div
                key={service.id}
                className={`
                  relative shrink-0 rounded-2xl overflow-hidden shadow-xl snap-start group
                  transition-all duration-500 ease-out cursor-pointer
                  ${
                    isExpanded
                      ? "w-72 md:w-80 lg:w-96 h-125"
                      : "w-24 md:w-32 lg:w-40 h-125"
                  }
                `}
                onMouseEnter={() => !isMobile && setHoveredId(service.id)}
                onMouseLeave={() => !isMobile && setHoveredId(null)}
                onClick={() => handleCardClick(service.id)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-100"
                  style={{ backgroundImage: `url('${service.img}')` }}
                />

                {/* Gradient Overlay - Dynamic based on expanded state */}
                <div
                  className={`
                  absolute inset-0 transition-opacity duration-500
                  bg-gradient-to-t via-black/50
                  ${
                    isExpanded
                      ? "from-black/95 via-black/70 to-black/30"
                      : "from-black/90 via-black/60 to-black/20"
                  }
                `}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Icon - appears on expand */}
                  <div
                    className={`
                    absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm
                    flex items-center justify-center transition-all duration-500
                    ${isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                  `}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title - always visible */}
                  <h3
                    className={`
                    font-bold text-white mb-2 transform transition-all duration-500
                    ${
                      isExpanded
                        ? "text-2xl md:text-3xl"
                        : "text-base md:text-lg absolute right-4 top-1/2 -translate-y-1/2"
                    }
                  `}
                  >
                    {service.title}
                  </h3>

                  {/* Expanded Content */}
                  <div
                    className={`
                    space-y-4 transform transition-all duration-500
                    ${isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                  `}
                  >
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-bold text-white">
                        {service.price}
                      </span>
                      <button
                        className="group/btn bg-white hover:bg-purple-600 text-gray-900 hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent card collapse when clicking button
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Minimal vertical title (visible when collapsed) */}
                  <div
                    className={`
                    absolute bottom-6 left-6 transform transition-all duration-500
                    ${isExpanded ? "opacity-0" : "opacity-100"}
                  `}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-1 h-8 rounded-full bg-gradient-to-b ${service.color}`}
                      />
                      {/* Hidden on mobile when collapsed - shows vertical text instead */}
                    </div>
                  </div>
                </div>

                {/* Premium Badge */}
                {service.id === 1 && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="group inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-600/25">
          View All Services
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 20px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #9333ea;
          border-radius: 20px;
          transition: background 0.2s;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #a855f7;
        }
        .dark .scrollbar-thin::-webkit-scrollbar-track {
          background: #1f2937;
        }
      `}</style>
    </section>
  );
};

export default Services;

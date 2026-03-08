import { useState, useEffect, useRef } from "react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Competition Player",
    quote:
      "This academy transformed my game completely. The coaches don't just teach technique; they understand the psychology of the sport. I've won 3 tournaments since joining.",
    rating: 5,
    image: "/assets/images/testimonial1.webp",
    achievement: "3x Tournament Winner",
  },
  {
    id: 2,
    name: "Coach Michael Chen",
    role: "Former National Player",
    quote:
      "The facilities here rival Olympic training centers. As a coach, I appreciate the attention to detail - from court flooring to lighting. This is where champions are made.",
    rating: 5,
    image: "/assets/images/coachLCW.webp",
    achievement: "15+ Years Coaching",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Junior Academy Parent",
    quote:
      "My daughter's confidence has skyrocketed. She's not just learning badminton; she's learning discipline, sportsmanship, and making lifelong friends. Worth every penny.",
    rating: 5,
    image: "/assets/images/testimonial3.webp",
    achievement: "Parent of 2 Academy Kids",
  },
  {
    id: 4,
    name: "James Omondi",
    role: "Weekend Warrior",
    quote:
      "Best decision I made this year. The community here is incredible - from beginners to pros, everyone supports each other. My fitness and skills have improved dramatically.",
    rating: 5,
    image: "/assets/images/testimonial5.webp",
    achievement: "Lost 20lbs, gained 100% fun",
  },
  {
    id: 5,
    name: "Maria Gonzalez",
    role: "Professional Athlete",
    quote:
      "The training facilities here are world-class. I've prepared for international tournaments here and couldn't ask for better preparation.",
    rating: 5,
    image: "/assets/images/littleKid.webp",
    achievement: "National Champion",
  },
  {
    id: 6,
    name: "David Kim",
    role: "Junior Player",
    quote:
      "I've improved so much since joining. The coaches really care about your progress and push you to be your best.",
    rating: 5,
    image: "/assets/images/LinDan.webp",
    achievement: "Most Improved 2024",
  },
  {
    id: 7,
    name: "David Kim",
    role: "Junior Player",
    quote:
      "I've improved so much since joining. The coaches really care about your progress and push you to be your best.",
    rating: 5,
    image: "/assets/images/LinDan.webp",
    achievement: "Most Improved 2024",
  },
  {
    id: 8,
    name: "David Kim",
    role: "Junior Player",
    quote:
      "I've improved so much since joining. The coaches really care about your progress and push you to be your best.",
    rating: 5,
    image: "/assets/images/LinDan.webp",
    achievement: "Most Improved 2024",
  },
  {
    id: 9,
    name: "David Kim",
    role: "Junior Player",
    quote:
      "I've improved so much since joining. The coaches really care about your progress and push you to be your best.",
    rating: 5,
    image: "/assets/images/LinDan.webp",
    achievement: "Most Improved 2024",
  },
  {
    id: 10,
    name: "David Kim",
    role: "Junior Player",
    quote:
      "I've improved so much since joining. The coaches really care about your progress and push you to be your best.",
    rating: 5,
    image: "/assets/images/LinDan.webp",
    achievement: "Most Improved 2024",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  // Auto-play carousel
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  // 3D Parallax effect - disable on mobile
  const handleMouseMove = (e) => {
    // if (window.innerWidth < 1024) return; // Disable on mobile
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );
    setIsPlaying(false);
  };

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-16 md:py-28 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 transition-colors duration-300"
    >
      {/* Dynamic Background Grid - hide on mobile for performance */}
      <div className=" absolute inset-0 opacity-10 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #a855f7 1px, transparent 1px),
              linear-gradient(to bottom, #a855f7 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>

      {/* Animated Orbs - smaller on mobile */}
      {/* <div className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 md:w-64 md:h-64 rounded-full blur-3xl animate-pulse bg-purple-300/50 dark:bg-purple-600/30" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-48 h-48 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse delay-1000 bg-pink-300/40 dark:bg-pink-600/20" /> */}

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 text-purple-600 dark:text-purple-400">
            Voices of Champions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 text-gray-900 dark:text-white px-4">
            What Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Community
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-2 md:h-3 -skew-x-12 blur-sm bg-purple-300/50 dark:bg-purple-600/30" />
            </span>{" "}
            Says
          </h2>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - 3D Image Card */}
          <div className="relative group perspective w-full max-w-md mx-auto lg:max-w-none">
            <div
              className="relative transform-gpu transition-transform duration-300 ease-out"
              style={{
                transform:
                  window.innerWidth >= 1024
                    ? `rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * -10}deg)`
                    : "none",
              }}
            >
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Achievement Badge */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 bg-white/80 border-gray-200 dark:bg-black/60 dark:border-white/20">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-600/30">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                          Achievement
                        </p>
                        <p className="font-bold text-sm md:text-base text-gray-900 dark:text-white">
                          {activeTestimonial.achievement}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="relative w-full">
            <Quote className="absolute -top-8 -left-8 w-24 h-24 text-gray-900/10 dark:text-white/5" />

            {/* Rating */}
            <div className="flex gap-1 mb-4 md:mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${
                    idx < activeTestimonial.rating
                      ? "text-yellow-500 fill-current"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 md:mb-8 leading-snug lg:leading-tight text-gray-900 dark:text-white">
              "{activeTestimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                {activeTestimonial.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                {activeTestimonial.role}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full transition-all flex items-center justify-center group border border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 hover:bg-purple-50 dark:border-white/20 dark:hover:border-purple-600 dark:text-white dark:hover:text-purple-600 dark:hover:bg-purple-600/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full font-semibold transition-all flex items-center gap-1 md:gap-2 text-sm md:text-base bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="inline">Play</span>
                  </>
                )}
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full transition-all flex items-center justify-center group border border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 hover:bg-purple-50 dark:border-white/20 dark:hover:border-purple-600 dark:text-white dark:hover:text-purple-600 dark:hover:bg-purple-600/10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

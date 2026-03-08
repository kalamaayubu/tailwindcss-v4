import { ArrowRight, Clock, Award, Users, Star, Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: 1,
    title: "Court Booking",
    desc: "Professional wood-sprung flooring with international standard lighting. Book your slot 24/7 with our easy online system.",
    img: "/assets/images/coaching.webp",
    price: "From $15/hr",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Coaching",
    desc: "1-on-1 sessions with certified national-level badminton athletes. Personalized training plans for rapid improvement.",
    img: "/assets/images/trustee4.webp",
    price: "From $40/session",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Racket Stringing",
    desc: "Precision stringing service with a wide variety of high-performance guts. Same-day service available.",
    img: "/assets/images/seriousBadmintonGuy.webp",
    price: "From $25",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Sparring",
    desc: "Find practice partners at your skill level. Structured match play sessions to improve your game.",
    img: "/assets/images/sparing.webp",
    price: "From $20/hr",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Junior Academy",
    desc: "Nurturing the next generation of champions through structured drills, fun games, and professional guidance.",
    img: "/assets/images/coaching3.webp",
    price: "From $120/month",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 6,
    title: "Community",
    desc: "A vibrant community of players of all levels. Weekly socials, tournaments, and events.",
    img: "/assets/images/friends.webp",
    price: "Free with membership",
    color: "from-indigo-500 to-purple-500",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-28 px-4 md:px-8 dark:bg-gray-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-[0.2em]">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Premium Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            <span className="">Tap the cards below to expand</span>
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative">
          {/* Scrollable Cards - with Tailwind scrollbar utilities */}
          <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-8 px-4 md:px-0 snap-x scrollbar-thin scrollbar-thumb-purple-500">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

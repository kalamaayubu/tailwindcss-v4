import { useState } from "react"; // Added useState
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
        group relative shrink-0 h-80
        rounded-2xl overflow-hidden shadow-xl snap-start
        transition-all duration-500 ease-out cursor-pointer
        /* Logic: Expand if hovered OR if clicked/active */
        w-28 md:w-32 lg:w-40
        ${isExpanded ? "w-72 md:w-80 lg:w-96" : "hover:w-72 md:hover:w-80 lg:hover:w-96"}
      `}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 
          ${isExpanded ? "scale-110" : "group-hover:scale-110"}`}
        style={{ backgroundImage: `url('${service.img}')` }}
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 transition-opacity duration-500 
        ${isExpanded ? "from-black/95 via-black/70 to-black/30" : "group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/30"}`}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        {/* Title */}
        <h3
          className={`font-bold text-white mb-2 transition-all duration-500 
          ${
            isExpanded
              ? "text-2xl md:text-3xl relative rotate-0 [writing-mode:horizontal-tb]"
              : "group-hover:text-2xl md:group-hover:text-3xl group-hover:relative group-hover:rotate-0 group-hover:[writing-mode:horizontal-tb] absolute [writing-mode:vertical-rl] rotate-180"
          }`}
        >
          {service.title}
        </h3>

        {/* Expanded Content */}
        <div
          className={`space-y-4 transition-all duration-500 delay-200
          ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100"}`}
        >
          <p className="text-gray-200 text-sm md:text-base leading-relaxed line-clamp-3">
            {service.desc}
          </p>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-white">
              {service.price}
            </span>
            <button
              className="group/btn whitespace-nowrap bg-white hover:bg-purple-600 text-gray-900 hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
              onClick={(e) => {
                e.stopPropagation(); // Prevents clicking the button from "closing" the card
                console.log("Booking...");
              }}
            >
              Book Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

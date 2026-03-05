import { ArrowRight, Star, Users, Award } from "lucide-react";

const Hero = () => {
  const trustedUsers = [
    { id: 1, img: "/assets/images/trustee1.webp", alt: "Happy member" },
    { id: 2, img: "/assets/images/trustee2.webp", alt: "Happy member" },
    { id: 3, img: "/assets/images/trustee3.webp", alt: "Happy member" },
    { id: 4, img: "/assets/images/trustee4.webp", alt: "Happy member" },
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/cheerfulBaddyKids.webp"
          alt="Happy kids playing badminton"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Trusted By Badge */}
          <div className="inline-flex items-center gap-4 mb-8">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {trustedUsers.map((user, index) => (
                <div
                  key={user.id}
                  className="w-10 h-10 rounded-full border-2 border-purple-400 overflow-hidden bg-gray-900"
                  style={{ zIndex: trustedUsers.length - index }}
                >
                  <img
                    src={user.img}
                    alt={user.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white">
                <span className="font-bold text-purple-400">100K+</span>{" "}
                badminton lovers
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
            Train Hard.
            <br />
            <span className="text-purple-400">Play Soft.</span>
            <br />
            Win Easy.
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
            A badminton club for those who{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white font-semibold px-3 py-1">
                want to improve
              </span>
              <span className="absolute inset-0 bg-purple-600 -skew-x-6 rounded-lg" />
            </span>{" "}
            in every aspect of their game. From beginners to pros, we've got you
            covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-600/25 flex items-center gap-3">
              Become a Member
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

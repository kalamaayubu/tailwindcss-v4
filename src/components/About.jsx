import React from "react";
import {
  ArrowRight,
  Award,
  Users,
  Calendar,
  MapPin,
  Star,
  Check,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-[0.2em]">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Premium Badminton Destination
          </h2>
        </div>

        {/* Main Content with Organic Grid */}
        <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Artistic Image Collage */}
          <div className="relative h-[600px] md:h-[700px]">
            {/* Main Large Image */}
            <div className="absolute top-0 left-0 w-[70%] h-[60%] rounded-2xl overflow-hidden shadow-2xl group z-10">
              <img
                src="/assets/images/trustee4.webp"
                alt="Professional coaching session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Medium Image - Overlapping Top Right */}
            <div className="absolute top-[15%] right-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-2xl group z-20">
              <img
                src="/assets/images/hijabBamintonLadies.webp"
                alt="Women players enjoying badminton"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Small Image - Bottom Left */}
            <div className="absolute bottom-[15%] left-0 w-[45%] h-[35%] rounded-2xl overflow-hidden shadow-2xl group z-30">
              <img
                src="/assets/images/coaching.webp"
                alt="Intensive training session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Testimonial Card */}
            <div className="absolute bottom-[5%] right-[5%] w-[60%] bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-2 rounded-xl shadow-2xl z-40 border border-white/20 dark:border-gray-700/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-purple-600 dark:text-purple-400 fill-current" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "Best badminton facility in the city!"
                  </p>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white mt-1">
                    — Sarah K.
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements
            <div className="absolute top-[30%] left-[40%] w-20 h-20 border-2 border-purple-600/20 dark:border-purple-400/20 rounded-full -z-10 animate-pulse" />
            
            <div className="absolute bottom-[40%] right-[20%] w-32 h-32 border-2 border-purple-600/10 dark:border-purple-400/10 rounded-full -z-10" />
           */}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Main Content */}
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Where Champions Are Made
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We provide top-tier training, world-class facilities, and a
                vibrant community for players of all levels. From beginners
                taking their first swing to competitive athletes aiming for the
                podium.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Professional Courts
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Community Events
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Expert Coaching
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Community Events
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Flexible Hours
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Community Events
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

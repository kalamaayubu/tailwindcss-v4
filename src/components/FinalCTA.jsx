import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section
      className="relative w-full min-h-120 pt-12 overflow-hidden transition-colors duration-300
                        bg-white dark:bg-black text-gray-900 dark:text-white"
    >
      {/* Floating abstract shapes */}
      <div
        className="absolute -top-36 -left-36 w-80 h-80 rounded-full blur-3xl animate-blob-slow mix-blend-screen
                      bg-purple-200/25 dark:bg-purple-600/30"
      />
      <div
        className="absolute -bottom-10 right-16 w-64 h-64 rounded-full blur-3xl animate-blob-slower mix-blend-screen
                      bg-pink-200/20 dark:bg-pink-500/25"
      />
      <div
        className="absolute top-1/3 left-1/3 w-36 h-36 rounded-full blur-xl animate-spin-slow mix-blend-overlay
                      bg-black/10 dark:bg-white/10"
      />

      {/* Decorative typography */}
      <h1
        className="absolute text-[6rem] md:text-[8rem] font-black top-16 left-6 opacity-10 rotate-12 select-none pointer-events-none
                     text-gray-200 dark:text-white"
      >
        GAME
      </h1>
      <h1
        className="absolute text-[5rem] md:text-[7rem] font-black bottom-0 right-12 opacity-10 -rotate-6 select-none pointer-events-none
                     text-gray-300 dark:text-white"
      >
        PLAY
      </h1>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 gap-10 lg:gap-16">
        {/* Headline + Description */}
        <div className="space-y-6 lg:space-y-8 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Step Into The Court{" "}
            <span className="text-pink-500 dark:text-pink-400">Your Way</span>
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Transform your skills in a playground of motion, coaching, and
            competition. Every session is a story. Every match is your
            statement.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button
            className="group relative inline-flex items-center gap-4
                             bg-gray-900 dark:bg-white text-white dark:text-gray-900
                             font-bold px-6 mb-4 rounded-full shadow-2xl overflow-hidden
                             transition-colors duration-300"
          >
            <span className="relative whitespace-nowrap z-10 transition-transform group-hover:translate-x-2">
              Join Now
            </span>
            <ArrowRight className="relative z-10 w-6 h-6 transition-transform group-hover:translate-x-3" />
            <span
              className="absolute left-0 top-0 w-0 h-full
                             bg-purple-500/40 rounded-full
                             transition-all duration-500 group-hover:w-full"
            ></span>
          </button>
        </div>

        {/* Floating shuttlecock */}
        {/* <img
          src="/assets/images/shuttlecock.webp"
          alt="Flying shuttlecock"
          className="absolute w-24 lg:w-32 top-10 right-10 animate-float-slow"
        /> */}
      </div>
    </section>
  );
};

export default FinalCTA;

import { ArrowRight } from "lucide-react";

const Hero = () => {
  const trustedUsers = [
    "/assets/images/trustee1.webp",
    "/assets/images/trustee2.webp",
    "/assets/images/trustee3.webp",
    "/assets/images/trustee4.webp",
    "/assets/images/trustee1.webp",
    "/assets/images/trustee4.webp",
  ];

  return (
    <section className="dark:bg-gray-950 bg-white dark:text-white text-black pb-16 pt-12 md:pt-16 overflow-hidden  transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
        {/* ===== LEFT: TEXT ===== */}
        <div>
          {/* Trust */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-6">
              {trustedUsers.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Member"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-950 object-cover"
                />
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              100K+ players trust us
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Train Hard.
            <br />
            Play Smart.
            <br />
            <span className="text-purple-600 dark:text-purple-500">
              Win More.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg">
            A badminton club where beginners grow fast and pros stay sharp.
            Coaching, courts, and community in one place.
          </p>

          {/* CTA */}
          <button className="inline-flex  whitespace-nowrap items-center gap-2 px-6 py-3 rounded-full dark:bg-white dark:text-black bg-purple-600 text-white font-semibold dark:hover:bg-gray-200 transition shadow-lg group">
            Join Now
            <ArrowRight size={18} />
          </button>
        </div>

        {/* ===== RIGHT: STACKED MEDIA ===== */}
        <div className="relative h-105 hidden lg:block">
          {/* Back Image 1 */}
          <img
            src="/assets/images/cheerfulBaddyKids.webp"
            alt=""
            className="absolute top-0 left-6 w-64 h-40 object-cover rounded-2xl shadow-xl -rotate-6 dark:opacity-90"
          />

          {/* Back Image 2 */}
          <img
            src="/assets/images/baddyGuy.webp"
            alt=""
            className="absolute bottom-4 left-0 w-72 h-44 object-cover rounded-2xl shadow-xl rotate-[5deg] dark:opacity-90"
          />

          {/* MAIN VIDEO (Front) */}
          <div className="absolute right-0 top-10 w-85 h-52.5 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
            <video
              controls
              preload="none"
              poster="/assets/images/budsOnGround.webp"
              className="w-full h-full object-cover"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>

            <span className="absolute bottom-3 left-4 text-sm px-3 py-1 bg-black/80 dark:bg-black/60 text-white  rounded-full backdrop-blur-sm">
              Live training
            </span>
          </div>
        </div>
      </div>

      {/* ===== MOBILE MEDIA (STACKED VERTICALLY) ===== */}
      <div className="lg:hidden mt-12 px-6 space-y-6">
        <video
          controls
          preload="none"
          poster="/assets/images/friends.webp"
          className="w-full aspect-video rounded-2xl object-cover shadow-xl"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        <img
          src="/assets/images/baddyGuy.webp"
          alt=""
          className="w-full aspect-video object-cover rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;

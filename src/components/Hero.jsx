import { ArrowRight } from "lucide-react";

const Hero = () => {
  const trustedUsers = [
    "/assets/images/trustee1.webp",
    "/assets/images/trustee2.webp",
    "/assets/images/trustee3.webp",
    "/assets/images/trustee4.webp",
  ];

  return (
    <section className="bg-gray-950 text-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
        {/* ===== LEFT: TEXT ===== */}
        <div>
          {/* Trust */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-3">
              {trustedUsers.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Member"
                  className="w-10 h-10 rounded-full border-2 border-gray-950 object-cover"
                />
              ))}
            </div>
            <span className="text-gray-300 text-sm font-medium">
              100K+ players trust us
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Train Hard.
            <br />
            Play Smart.
            <br />
            <span className="text-purple-400">Win More.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            A badminton club where beginners grow fast and pros stay sharp.
            Coaching, courts, and community in one place.
          </p>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-200 transition shadow-lg">
            Become a Member
            <ArrowRight size={18} />
          </button>
        </div>

        {/* ===== RIGHT: STACKED MEDIA ===== */}
        <div className="relative h-[420px] hidden lg:block">
          {/* Back Image 1 */}
          <img
            src="/assets/images/cheerfulBaddyKids.webp"
            alt=""
            className="absolute top-0 left-6 w-64 h-40 object-cover rounded-2xl shadow-xl rotate-[-6deg] opacity-80"
          />

          {/* Back Image 2 */}
          <img
            src="/assets/images/friends.webp"
            alt=""
            className="absolute bottom-4 left-0 w-72 h-44 object-cover rounded-2xl shadow-xl rotate-[5deg] opacity-80"
          />

          {/* MAIN VIDEO (Front) */}
          <div className="absolute right-0 top-10 w-[340px] h-[210px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
            <video
              controls
              preload="none"
              poster="/assets/images/friends.webp"
              className="w-full h-full object-cover"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>

            <span className="absolute bottom-3 left-4 text-sm bg-black/60 px-3 py-1 rounded-full">
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
          src="/assets/images/cheerfulBaddyKids.webp"
          alt=""
          className="w-full aspect-video object-cover rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;

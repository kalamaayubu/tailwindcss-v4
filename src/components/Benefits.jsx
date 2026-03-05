import React from "react";

const Benefits = () => {
  const benefitsData = [
    {
      id: 1,
      title: "Boost Skills",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod necessitatibus sint qui dolores repellat.",
      image: "/assets/images/whiteBaddyLady.webp",
      imageAlt: "Player boosting skills on court",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Expert Coaching",
      description:
        "Learn from certified national-level athletes who've competed at the highest levels of the sport.",
      image: "/assets/images/racketsDown.webp",
      imageAlt: "Rackets lined up for coaching session",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Community Spirit",
      description:
        "Join a vibrant community of players who share your passion and push each other to new heights.",
      image: "/assets/images/whiteBaddyLady.webp",
      imageAlt: "Players enjoying community atmosphere",
      imagePosition: "left",
    },
  ];

  const BenefitItem = ({
    title,
    description,
    image,
    imageAlt,
    imagePosition,
    index,
  }) => (
    <div
      className={`
      flex flex-col lg:flex-row gap-8 lg:gap-16 items-center
      ${imagePosition === "right" ? "lg:flex-row-reverse" : ""}
    `}
    >
      {/* Image Container */}
      <div className="w-full lg:w-96 flex-shrink-0 group">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
          {/* Image */}
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Gradient Overlay - subtle on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 space-y-6">
        {/* Benefit Number Badge */}
        <div className="inline-flex items-center gap-2">
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
            Benefit 0{index + 1}
          </span>
          <div className="w-12 h-px bg-purple-600/50 dark:bg-purple-400/50" />
        </div>

        {/* Title */}
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* Feature List - Example of additional content */}
        <ul className="space-y-3 pt-4">
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <svg
              className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Personalized training plans</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <svg
              className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Flexible scheduling options</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <svg
              className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Progress tracking & feedback</span>
          </li>
        </ul>

        {/* Learn More Link */}
        <a
          href="#"
          className="group inline-flex items-center gap-2 mt-4 text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        >
          <span>Learn more about {title.toLowerCase()}</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="benefits"
      className="py-20 md:py-28 px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          {/* Eyebrow Text */}
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-[0.2em]">
            Why Choose Us
          </span>

          {/* Main Heading */}
          <h2 className=" text-gray-900 dark:text-white mt-6 mb-6">
            Benefits That Set Us Apart
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-0.5 bg-purple-600/30 dark:bg-purple-400/30 rounded-full" />
            <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
            <div className="w-12 h-0.5 bg-purple-600/30 dark:bg-purple-400/30 rounded-full" />
          </div>

          {/* Subheading */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6">
            Experience the difference that professional training and community
            support can make in your badminton journey.
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-24 lg:space-y-32">
          {benefitsData.map((benefit, index) => (
            <BenefitItem
              key={benefit.id}
              index={index}
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
              imageAlt={benefit.imageAlt}
              imagePosition={benefit.imagePosition}
            />
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-24 text-center">
          <div className="inline-block p-8 md:p-10 bg-linear-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl border border-purple-100 dark:border-gray-700 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              Join hundreds of players who've transformed their game with our
              premium services.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-600/25 dark:hover:shadow-purple-500/25">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

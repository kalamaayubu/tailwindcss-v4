import { Check } from "lucide-react";

const Benefits = () => {
  const benefitsData = [
    {
      id: 1,
      title: "Boost Skills",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod necessitatibus sint qui dolores repellat.",
      image: "/assets/images/hijabBamintonLadies.webp",
      imageAlt: "Player boosting skills on court",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Expert Coaching",
      description:
        "Learn from certified national-level athletes who've competed at the highest levels of the sport.",
      image: "/assets/images/LinDan.webp",
      imageAlt: "Rackets lined up for coaching session",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Community Spirit",
      description:
        "Join a vibrant community of players who share your passion and push each other to new heights.",
      image: "/assets/images/coaching3.webp",
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
      <div className="w-full lg:w-96 shrink-0 group">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-xl">
          {/* Image */}
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Gradient Overlay - subtle on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 space-y-6">
        {/* Benefit Number Badge */}
        <div className="inline-flex items-center gap-2">
          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
            Benefit 0{index + 1}
          </span>
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
            <Check className="text-purple-600 dark:text-purple-400" />
            <span>Personalized training plans</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Check className="text-purple-600 dark:text-purple-400" />
            <span>Flexible scheduling options</span>
          </li>
          <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Check className="text-purple-600 dark:text-purple-400" />
            <span>Progress tracking & feedback</span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <section
      id="benefits"
      className="py-20 md:py-28 px-4 md:px-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
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
      </div>
    </section>
  );
};

export default Benefits;

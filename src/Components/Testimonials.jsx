import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav",
    rating: 5,
    text:
      "Great experience! The booking was quick and the bike was in perfect condition.",
  },
  {
    name: "Neha",
    rating: 4,
    text:
      "Smooth pickup and friendly staff. Loved the flexible pricing options!",
  },
  {
    name: "Rohan",
    rating: 5,
    text:
      "Helmet included and no hidden fees. Will rent again for sure.",
  },
  {
    name: "Ishita",
    rating: 5,
    text:
      "Excellent support and a wide variety of bikes to choose from.",
  },
  {
    name: "Karan",
    rating: 4,
    text:
      "Easy location search and quick confirmation. Highly recommended!",
  },
];

function StarRow({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const total = hasHalf ? fullStars + 1 : fullStars;
  return (
    <div className="flex items-center gap-1 text-amber-500" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalf && (
        <div className="relative w-4 h-4">
          <FaStar className="absolute left-0 top-0 text-amber-300" />
        </div>
      )}
      {Array.from({ length: 5 - total }).map((_, i) => (
        <FaStar key={`empty-${i}`} className="text-gray-300" />
      ))}
    </div>
  );
}

function Row({ reverse = false }) {
  const content = [...testimonials, ...testimonials];
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 py-2"
        initial={{ x: 0 }}
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {content.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="min-w-72 max-w-72 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-slate-900 dark:text-slate-100">{t.name}</div>
              <StarRow rating={t.rating} />
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-4/5 mx-auto py-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-left">What riders say</h2>
        <p className="text-gray-600 text-left">Real reviews from recent rentals</p>
      </div>
      <div className="space-y-4">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}


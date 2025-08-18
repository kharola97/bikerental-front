import classic350Bike from "../assets/classic350.png";
import hunter350Bike from "../assets/hunter350.png";
import pulsar200Bike from "../assets/pulsar200.png";
import { Button } from "antd";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const bikesListing = [
  {
    title: "Green Wheels Bike Rentals",
    description:
      "Many Royal Enfield models, like the Classic 350, are known for their strong low-end torque, making them easy and enjoyable to ride, especially in urban environments and for touring.",
    name: "Classic 350",
    image: classic350Bike,
    rating: "4.5",
    brand: "Royal Enfield India",
    price_per_day: "₹500/day",
    distance_travelled: "1,000Km",
    engine: "299cc",
  },
  {
    title: "Cycle Hub",
    description:
      "The Royal Enfield Hunter 350 is a roadster-style motorcycle designed for urban riding, featuring a 349cc engine, 17-inch wheels, and a comfortable, rider-focused design.",
    name: "Hunter 350",
    image: hunter350Bike,
    rating: "3.9",
    brand: "Royal Enfield India",
    price_per_day: "₹1000/day",
    distance_travelled: "1,200",
    engine: "350cc",
  },
  {
    title: "Bike Depot",
    description:
      "The Bajaj Pulsar RS 200 is powered by 199.5cc BS6 engine which develops a power of 24.1 bhp and a torque of 18.7 Nm.",
    name: "Pulsar 200",
    image: pulsar200Bike,
    rating: "4.8",
    brand: "Bajaj Motors",
    price_per_day: "₹800/day",
    distance_travelled: "20,000",
    engine: "199cc",
  },
];

function StarRating({ value, size = "md" }) {
  const rating = Number(value) || 0;
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const total = hasHalf ? full + 1 : full;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={`f-${i}`} className={`text-amber-500 ${size === "sm" ? "w-3 h-3" : "w-4 h-4"}`} />
      ))}
      {hasHalf && <FaStar className={`text-amber-300 ${size === "sm" ? "w-3 h-3" : "w-4 h-4"}`} />}
      {Array.from({ length: 5 - total }).map((_, i) => (
        <FaStar key={`e-${i}`} className={`text-gray-300 ${size === "sm" ? "w-3 h-3" : "w-4 h-4"}`} />
      ))}
      <span className="ml-1 text-[11px] text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
}

const ListBikes = ({ bikes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
      {bikes.map((bike, i) => {
        return (
          <motion.div
            key={i}
            className="group border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: i * 0.04, ease: "easeOut" }}
          >
            <div className="bg-slate-50 dark:bg-slate-800">
              <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-semibold text-sm sm:text-base truncate text-slate-900 dark:text-slate-100">{bike.title}</h3>
                <StarRating value={bike.rating} size="sm" />
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">{bike.brand}</p>
              <p className="line-clamp-2 text-xs text-gray-600 dark:text-gray-300 mb-3">{bike.description}</p>
              <div className="flex items-center justify-between text-xs mb-3">
                <div className="font-semibold text-gray-900 dark:text-gray-100">{bike.price_per_day}</div>
                <div className="text-gray-600 dark:text-gray-300">{bike.engine}</div>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900">Free helmet</span>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900">Instant confirm</span>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-100 dark:border-amber-900">No deposit</span>
              </div>
              <Button
                type="button"
                className="!bg-blue-600 !text-white hover:!bg-blue-700 transition-colors duration-200 w-full"
              >
                View Details
              </Button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default function NearByBikes() {
  return (
    <section className="flex flex-col justify-center items-center p-6 w-4/5 mx-auto text-center">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-6 text-left">
          Nearby shops by bikes
        </h2>
      </div>
      <ListBikes bikes={bikesListing} />
    </section>
  );
}

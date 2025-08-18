import { motion } from "framer-motion";
import { HiShieldCheck } from "react-icons/hi";
import { TbCurrencyRupee } from "react-icons/tb";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const features = [
  {
    icon: HiShieldCheck,
    title: "Verified Shops",
    desc: "Every partner is vetted for quality and safety.",
  },
  {
    icon: GiFullMotorcycleHelmet,
    title: "Free Helmet",
    desc: "Ride safe with complimentary safety gear.",
  },
  {
    icon: TbCurrencyRupee,
    title: "Flexible Pricing",
    desc: "Hourly, daily, and weekly rental options.",
  },
];

export default function Features() {
  return (
    <section className="w-4/5 mx-auto py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-slate-900 dark:text-slate-100">Why choose BikeRent?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              className="rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: "easeOut" }}
            >
              <Icon className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-1 text-slate-900 dark:text-slate-100">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
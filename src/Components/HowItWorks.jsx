import { FaUserPlus } from "react-icons/fa";
import { LuCalendarCheck2 } from "react-icons/lu";
import { HiOutlineMapPin } from "react-icons/hi2";
import { motion } from "framer-motion";

const steps = [
  {
    heading: "How It Works",
    data: [
      {
        title: "Sign Up",
        description: "Create and account for your shop",
        icon: FaUserPlus,
      },
      {
        title: "Book Online",
        description: "Reserve with a simple online process",
        icon: LuCalendarCheck2,
      },
      {
        title: "Pick Up & Ride",
        description: "Collect and enjoy your ride",
        icon: HiOutlineMapPin,
      },
    ],
  },
];

const DivComponent = ({ heading, data }) => {
  return (
    <div className="pb-6 w-full">
      <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 dark:text-slate-100">{heading}</h2>
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <Icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section id="how" className="flex flex-col justify-center items-center p-6 mx-auto w-4/5">
      {steps.map((step, i) => (
        <DivComponent key={i} {...step} />
      ))}
    </section>
  );
}

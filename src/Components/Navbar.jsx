import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="flex flex-col items-center p-4 md:p-6 w-4/5 mx-auto">
      <nav className="flex justify-between items-center px-4 py-3 bg-white dark:bg-slate-900 w-full border border-gray-100 dark:border-slate-800 rounded-xl shadow-sm">
        <div className="text-xl font-bold text-blue-600">BikeRent</div>
        <div className="hidden md:flex items-center gap-6 text-gray-600 dark:text-gray-300 font-medium">
          <a href="#how" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How It Works</a>
          <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Testimonials</a>
          <a href="#footer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Partner</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {/* <button onClick={() => theme?.setIsDark?.(!theme?.isDark)} className="px-3 py-1 rounded border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800">
            {theme?.isDark ? "Light" : "Dark"}
          </button> */}
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Login</button>
        </div>
        <button aria-label="Menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden w-full bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl mt-2 overflow-hidden shadow-sm"
          >
            <div className="flex flex-col p-4 gap-3 text-gray-700 dark:text-gray-200">
              <a href="#how" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>How It Works</a>
              <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>Testimonials</a>
              <a href="#footer" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>Partner</a>
              <div className="flex items-center gap-3">
                <button onClick={() => theme?.setIsDark?.(!theme?.isDark)} className="flex-1 px-3 py-2 rounded border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800">{theme?.isDark ? "Light" : "Dark"}</button>
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded">Login</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

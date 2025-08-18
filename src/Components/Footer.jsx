import partnerLogo from "../assets/partnerLogo.png";

export default function Footer() {
  return (
    <footer id="footer" className="mt-10 border-t border-gray-200 dark:border-slate-800 bg-blue-50 dark:bg-slate-950">
      <section className="flex justify-center items-center py-10">
        <div className="px-2 w-4/5 mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 p-4 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2 text-left text-slate-900 dark:text-slate-100">Become a Partner</h1>
            <p className="text-gray-700 dark:text-gray-300">
              Join our platform and list your shop to rent out bikes. Reach thousands of riders in your city.
            </p>
            <div className="inline-block w-[180px]">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded font-semibold mt-3 w-full">
                List your shop
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={partnerLogo}
              alt="partner-logo"
              className="max-h-[100%] max-w-[60%] object-contain"
            />
          </div>
        </div>
      </section>
      <div className="w-4/5 mx-auto py-6 text-sm text-gray-600 dark:text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-semibold text-blue-600">BikeRent</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Support</a>
        </div>
        <div>© {new Date().getFullYear()} BikeRent</div>
      </div>
    </footer>
  );
}

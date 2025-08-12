const steps = [
  { title: "Find a Bike", desc: "Browse available bikes near your location" },
  { title: "Book Online", desc: "Reserve with a simple online process" },
  { title: "Pick Up & Ride", desc: "Collect and enjoy your ride" },
];

export default function HowItWorks() {
  return (
    <section className="flex flex-col justify-center items-center p-10 mx-auto bg-gradient-to-tr from neutral-50 to natural 500 w-2/3   text-center">
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {steps.map((step, i) => (
          <div key={i} className="border p-6 rounded shadow w-64">
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

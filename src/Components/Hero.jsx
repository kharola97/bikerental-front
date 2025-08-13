import bike from "../assets/bike2.jpg";

export default function Hero() {
  return (
    <section className="flex flex-row justify-center gap-55 max-h-  p-10">
      <div className="max-w-2xl text-center">
        <h1 className="text-7xl font-bold mb-4">Find & Rent Bikes Near You</h1>
        <p className="mb-6  text-gray-700">
          Discover and book rental bikes from local shops in your area.
        </p>
        <div className="flex items-center justify-center p-4 gap-2">
          <input
            type="text"
            placeholder="Enter your location"
            className="border px-4 py-2 rounded w-full max-w-xs"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Explore Bikes
          </button>
        </div>
      </div>
      <div className="flex justofy-center  items-center">
        <img
          src={bike}
          alt="Bike and Map"
          className="w-200 md:mt-0 max-h-fit rounded-xl"
        />
      </div>
    </section>
  );
}

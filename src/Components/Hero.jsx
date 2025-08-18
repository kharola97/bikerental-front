import bike from "../assets/bike2.jpg";

export default function Hero() {
  return (
    <div className="flex h-screen max-h-screen w-full justify-center bg-amber-500">
      <div className="flex flex-col  bg-blue-500 h-2/3 my-auto">
        <h1 className="text-5xl font-bold mb-8">
            Find & Rent Bikes Near You
          </h1>
        <p className="mb-6 text-gray-700">
            Discover and book rental bikes from local shops in your area.
          </p>
        <input type="text" placeholder="Enter your location..." />
      </div>
      <div className="text-7xl">this is image</div>
    </div>
  );
}

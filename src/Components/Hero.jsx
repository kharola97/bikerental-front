import bike from "../assets/bike2.jpg";
import LocationSearch from "../Components/LocationSearch";

export default function Hero() {
  return (
    <section>
      <div className="w-4/5 mx-auto flex flex-row justify-between items-center gap-8">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-5xl font-bold mb-8">
            Find & Rent Bikes Near You
          </h1>
          <p className="mb-6 text-gray-700">
            Discover and book rental bikes from local shops in your area.
          </p>
          <div className="flex flex-col pt-2 gap-3 w-full max-w-md mx-auto">
            <LocationSearch />
            <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
              Explore Bikes
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={bike}
            alt="Bike and Map"
            className="max-h-[500px] rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

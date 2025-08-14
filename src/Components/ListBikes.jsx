import classic350Bike from "../assets/classic350.jpeg";
import hunter350Bike from "../assets/hunter350.jpeg";
import pulsar200Bike from "../assets/pulsar200.jpeg";

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

const ListBikes = ({ bikes }) => {
  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      {bikes.map((bike, i) => (
        <div key={i} className="border border-gray-300 bg-slate-50 p-6 rounded">
          <h3 className="font-semibold text-lg">{bike.title}</h3>
          <p className="text-gray-600">{bike.description}</p>
        </div>
      ))}
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

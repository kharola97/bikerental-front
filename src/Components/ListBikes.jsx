import classic350Bike from "../assets/classic350.png";
import hunter350Bike from "../assets/hunter350.png";
import pulsar200Bike from "../assets/pulsar200.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Button } from "antd";

const bikesListing = [
  {
    title: "Green Wheels Bike Rentals",
    description:
      "Many Royal Enfield models, like the Classic 350, are known for their strong low-end torque, making them easy and enjoyable to ride, especially in urban environments and for touring.",
    name: "Classic 350",
    image: classic350Bike,
    rating: "2.5",
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

const StarRating = ({ rating }) => {
  rating = parseFloat(rating);
  const stars = [];
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (halfStars ? 1 : 0);
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar key={`full-${i}`} className="text-yellow-400 w-3 h-3" />
    );
  }
  if (halfStars) {
    stars.push(
      <FaStarHalfAlt key="half" className="text-yellow-400 w-3 h-3" />
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar key={`empty-${i}`} className="text-gray-400 w-3 h-3" />
    );
  }
  return <div className="flex gap-1">{stars}</div>;
};

const ListBikes = ({ bikes }) => {
  return (
    <div className="grid grid-cols-1 gap-3 w-full">
      {bikes.map((bike, i) => {
        return (
          <div
            key={i}
            className="flex border border-gray-200 bg-slate-50/50 rounded overflow-hidden h-[115px]"
          >
            <div className="w-[30%] h-full flex items-center justify-center bg-slate-100/50">
              <img
                src={bike.image}
                alt={bike.name}
                className="max-h-[90%] max-w-[90%] object-contain"
              />
            </div>
            <div className="w-[50%] h-full border-gray-300 flex flex-col justify-center items-center">
              <h3 className="font-bold text-sm pb-2">{bike.title}</h3>
              <div className="flex items-center pb-2 gap-3">
                <StarRating rating={bike.rating} />
                <p className="text-xs text-gray-700">{bike.rating}</p>
              </div>
              <p className="text-xs text-gray-700 pb-2">{bike.brand}</p>
            </div>
            <div className="flex flex-col flex-1 p-4 items-center justify-center text-sm gap-3">
              <p className="text-xs text-gray-1000 pb-2">
                {bike.price_per_day}
              </p>
              <Button
                type="button"
                className="!bg-blue-500 !text-white hover:!bg-blue-600 transition-colors duration-200"
              >
                View Details
              </Button>
            </div>
          </div>
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

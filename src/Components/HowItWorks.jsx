import { FaRegUser } from "react-icons/fa";
import { MdOutlineBookOnline } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const steps = [
  {
    heading: "How It Works",
    data: [
      {
        title: "Sign Up",
        description: "Create and account for your shop",
        icon: FaRegUser,
      },
      {
        title: "Book Online",
        description: "Reserve with a simple online process",
        icon: MdOutlineBookOnline,
      },
      {
        title: "Pick Up & Ride",
        description: "Collect and enjoy your ride",
        icon: FaMapMarkerAlt,
      },
    ],
  },
];

const DivComponent = ({ heading, data }) => {
  return (
    <div className="pb-6">
      <h2 className="text-3xl font-bold mb-6 text-left">{heading}</h2>
      <div className="flex flex-wrap gap-6">
        {data.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="p-6 rounded shadow flex-1 min-w-[200px] max-w-sm"
            >
              <Icon className="w-10 h-10 mx-auto mb-4 text-blue-500" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section className="flex flex-col justify-center items-center p-6 mx-auto bg-gradient-to-tr from neutral-50 to natural 500 w-4/5 text-center">
      {steps.map((step, i) => (
        <DivComponent key={i} {...step} />
      ))}
    </section>
  );
}

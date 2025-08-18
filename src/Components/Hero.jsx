import bike from "../assets/bike2.jpg";

export default function Hero() {
  return (
    <div className="flex h-screen max-h-screen w-full justify-center bg-amber-500">
      <div className="flex flex-col  bg-blue-500 h-2/3 my-auto">
        <h1>this is my heading withour heading </h1>
        <p>this is my text below the heading </p>
        <input type="text" placeholder="Enter your location..." />
      </div>
      <div className="text-7xl">this is image</div>
    </div>
  );
}

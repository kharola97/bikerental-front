export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white">
      <div className="text-xl font-bold text-blue-600">BikeRent</div>
      <ul className="flex gap-6 text-gray-600 font-medium">
        <li>Home</li>
        <li>How It Works</li>
        <li>Partner With Us</li>
        <li>FAQ</li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-1 rounded">Login</button>
    </nav>
  );
}

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import React,  {useState} from "react"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleHamburgerClick= ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white">
      <div className=" text-xl font-bold text-blue-600">BikeRent</div>
      <ul className="hidden md:flex gap-6 text-gray-600 font-medium ">
        <li>Home</li>
        <li>How It Works</li>
        <li>Partner With Us</li>
        <li>FAQ</li>
      </ul>
      <button className="hidden sm:flex bg-blue-600 text-white px-4 py-1 rounded">Login</button>
      <button className="sm:hidden  text-2xl text-gray-700 cursor-pointer" onClick={handleHamburgerClick}>
       {isOpen ?  <IoMdClose/> :<RxHamburgerMenu/>} 
      </button>
     
        
      <ul
  className={`absolute top-14 right-0 bg-neutral-100  rounded shadow-md flex flex-col justify-center items-center gap-4 w-full sm:hidden
  transition-all duration-500 ease-in-out
  ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
>
  <li className={`w-full p-2 text-center hover:text-blue-600 cursor-pointer hover:bg-blue-100 transition-all duration-500 delay-100 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>Home</li>
  <li className={`w-full p-2 text-center hover:text-blue-600 cursor-pointer hover:bg-blue-100 transition-all duration-500 delay-200 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>How It Works</li>
  <li className={`w-full p-2 text-center hover:text-blue-600 cursor-pointer hover:bg-blue-100 transition-all duration-500 delay-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>Partner With Us</li>
  <li className={`w-full p-2 text-center hover:text-blue-600 cursor-pointer hover:bg-blue-100 transition-all duration-500 delay-400 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>FAQ</li>
   <button className=" bg-blue-400 text-white px-4 py-1 rounded">Login</button>
</ul>
        
      
    </nav>
  );
}

import React from "react";
import { Next } from "../assets";
import { AiOutlineArrowRight } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col sticky top-0 right-0 left-0 h-[140px]">
      <div className="w-full bg-black px-40 flex items-center justify-between h-[40%]">
        <span className="text-white font-bold tracking-wider text-2xl">
          Vercel
        </span>
        <span className="text-white text-lg tracking-wide flex gap-1 items-center font-bold">
          Deploy
          <span className="font-semibold">Next.js</span>
          on Vercel
          <AiOutlineArrowRight color="#eee" size={20} />
        </span>
      </div>
      <div className="w-full bg-white backdrop-blur-lg px-40 flex items-center justify-between h-[60%]">
        <div className="w-20 flex items-center gap-12">
          <img src={Next} alt="next" className="w-full h-full object-cover" />
          <ul className="flex items-center gap-5 list-none">
            <li className="text-[15px] text-gray-500 font-medium cursor-pointer hover:text-black transition">
              Showcase
            </li>
            <li className="text-[15px] text-gray-500 font-medium cursor-pointer hover:text-black transition">
              Docs
            </li>
            <li className="text-[15px] text-gray-500 font-medium cursor-pointer hover:text-black transition">
              Blog
            </li>
            <li className="text-[15px] text-gray-500 font-medium cursor-pointer hover:text-black transition">
              Analytics
            </li>
            <li className="text-[15px] text-gray-500 font-medium cursor-pointer hover:text-black transition">
              Templates
            </li>
            <li className="text-[15px] text-gray-500 font-medium cursor-pointer hover:text-black transition">
              Enterprise
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <button
            type="button"
            className="text-center py-1 px-2 rounded-md border border-gray-400 hover:border-black transition"
          >
            Feedback
          </button>
          <button
            type="button"
            className="text-center py-1 px-3 rounded-md border border-black bg-black text-white hover:bg-white hover:text-black transition"
          >
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

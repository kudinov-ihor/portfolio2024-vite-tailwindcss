import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import logo_come_back_alive from "../assets/img/logo_come_back_alive.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { FaSun, FaMoon } from "react-icons/fa";
const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="container mx-auto flex justify-between items-center py-[30px]">
      <div className="flex gap-5 justify-center items-center">
        <Link
          to="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        >
          <p className="blue-gradient_text ">KI</p>
        </Link>

        
        <button
          className=" w-12 h-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-700 transition duration-300 ease-in-out"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <div className="text-gray-700 dark:text-gray-300">
              <FaMoon />
            </div>
          ) : (
            <div className="text-yellow-500 dark:text-yellow-300">
              <FaSun />
            </div>
          )}
        </button>
        
      </div>
      <img src={logo_come_back_alive} alt="Come Back Aive" className="h-10" />
      <nav>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="relative max-lg:hidden font-normal p-[20px] after:absolute after:w-[1px] after:h-[30%] after:bg-black after:right-0 after:top-[50%] after:translate-y-[-50%] last:after:h-0"
          >
            {link.label}{" "}
          </Link>
        ))}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
        
      </nav>
    </header>
  );
};

export default Header;

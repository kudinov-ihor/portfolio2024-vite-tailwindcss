import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import logo_come_back_alive from "../assets/img/logo_come_back_alive.svg";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-[30px]">
      <div className="flex gap-5 items-center">
        <h4 className="header-logo">
          Kudinov Ihor
        </h4>
        <span className="text-lg">Front End Developer</span>
        <img src={logo_come_back_alive} alt="Come Back Aive" className="h-[100%]" />
      </div>
      <nav>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="relative font-normal p-[20px] after:absolute after:w-[1px] after:h-[30%] after:bg-black after:right-0 after:top-[50%] after:translate-y-[-50%] last:after:h-0"
          >
            {link.label}{" "}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

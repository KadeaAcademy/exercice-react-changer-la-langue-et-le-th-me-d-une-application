import { useState } from "react";
import { Menu, Sun, Moon } from "react-feather";
import navbarLogo from "../assets/image/navbar-logo.svg";

const Navbar = () => {
  const [navbarOpen, SetNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={"flex-wrap lg:flex items-center justify-between mb-20 lg:mb-40"}
    >
      <div className="flex items-center justify-between mb-10 lg:mb-0">
        <img src={navbarLogo} alt="Logo" />
  
        <div className="flex items-center">
          <button
            className="flex items-center justify-center border border-red-500 w-10 h-10 text-red-500 rounded-md outline-none lg:hidden ml-auto"
            onClick={() => SetNavbarOpen(!navbarOpen)}
          >
            <i>
              <Menu />
            </i>
          </button>
        </div>
      </div>
  
      <ul
        className={`${
          navbarOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20`}
      >
        <li className="font-medium text-gray-500 text-lg hover:text-red-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#">Services</a>
        </li>
  
        <li className="font-medium text-gray-500 text-lg hover:text-red-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#">Works</a>
        </li>
  
        <li className="font-medium text-gray-500 text-lg hover:text-red-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="#">Blog</a>
        </li>
  
        {/* Theme Selector */}
        <li className="flex items-center">
          <button
            className="flex items-center justify-center w-10 h-10 text-red-500 rounded-md mr-4"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <Sun className="text-gray-800" />
            ) : (
              <Moon className="text-gray-800" />
            )}
          </button>
        </li>
  
        {/* Language Selector */}
        <li className="flex items-center">
          <select
            className="bg-transparent border border-gray-500 text-gray-500 text-lg rounded-md px-3 py-2 focus:outline-none"
            defaultValue="FR"
          >
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="ES">ES</option>
          </select>
        </li>
      </ul>
    </nav>
  );
  
};

export default Navbar;

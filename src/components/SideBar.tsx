import { NavLink } from "react-router-dom";
import {
  Budgets,
  Logo,
  MinimizeMenu,
  Overview,
  Pots,
  RecurringBills,
  Transactions,
} from "./ui/icons";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const menuItems = [
    {
      icon: <Overview width="20" />,
      title: "Overview",
      link: "/",
    },
    {
      icon: <Transactions width="20" />,
      title: "Transactions",
      link: "/transactions",
    },
    {
      icon: <Budgets width="20" />,
      title: "Budgets",
      link: "/budgets",
    },
    {
      icon: <Pots width="20" />,
      title: "Pots",
      link: "/pots",
    },
    {
      icon: <RecurringBills width="20" />,
      title: "Recurring Bills",
      link: "/recurring_bills",
    },
  ];

  return (
    <div
      id="sidebar"
      className={`hidden h-screen w-full flex-col gap-6 rounded-r-lg bg-grey-900 text-gray-300 lg:flex ease-in-out duration-700 ${
        isOpen ? "max-w-[300px]" : "max-w-[80px]"
      }`}
      style={{ backgroundColor: "var(--clr-neutral-800)" }}
    >
      <div className="flex h-[101px] items-center justify-start pl-8 py-10 mr-9 truncate">
        <span className={`w-[122px]`}>
          <Logo />
        </span>
      </div>
      <nav className="w-full flex-grow">
        <ul className="flex flex-col gap-1 pr-6">
          {menuItems.map((data, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={data.link}
                  className="w-full flex items-center gap-4 px-8 py-4 rounded-r-lg hover:text-white ease-in-out duration-700"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive
                        ? `${isOpen ? "white" : ""}`
                        : "",
                      color: isActive ? "var(--clr-accent-700)" : "",
                      borderLeft: isActive
                        ? "4px solid var(--clr-accent-700)"
                        : "",
                    };
                  }}
                >
                  <span className="w-[20px]">{data.icon}</span>
                  <span className="truncate font-bold">{data.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        className="flex items-center gap-4 px-8 mr-4 py-4 mb-6 mt-auto hover:text-white truncate"
        onClick={toggleSidebar}
      >
        <span
          className={`${isOpen ? "" : "rotate-180"} ease-in-out duration-700`}
        >
          <MinimizeMenu />
        </span>
        <span
          className={`${
            isOpen ? "opacity-1" : "opacity-0"
          } delay-700 duration-500`}
        >
          Minimize Menu
        </span>
      </button>
    </div>
  );
};

export default Sidebar;

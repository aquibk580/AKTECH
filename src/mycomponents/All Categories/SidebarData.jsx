import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { PiComputerTowerFill } from "react-icons/pi";
import { SiPcgamingwiki } from "react-icons/si";

export const SidebarData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    id: 2,
    title: "Custom PC",
    path: "/custompc",
    icon: <SiPcgamingwiki />,
    cName: "nav-text",
  },
  {
    id: 3,
    title: "Category",
    path: "/AllCategories",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    id: 4,
    title: "Pre-Built PC",
    path: "#",
    icon: <PiComputerTowerFill />,
    cName: "nav-text",
  },
  {
    id: 5,
    title: "About",
    path: "#",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

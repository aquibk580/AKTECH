import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
import { PiComputerTowerFill } from "react-icons/pi";
import { SiPcgamingwiki } from "react-icons/si";

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: "Custom PC",
        path: '/custompc',
        icon: <SiPcgamingwiki />,
        cName: 'nav-text'
    },
    {
        title: "Category",
        path: '/AllCategories',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: "Pre-Built PC",
        path: '#',
        icon: <PiComputerTowerFill />,
        cName: 'nav-text'
    },
    {
        title: "About",
        path: '#',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
]

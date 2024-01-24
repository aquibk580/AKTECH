import React from "react";
import "./AllCategories.css";
import img8 from "../Images/Processor.jpg";
import img9 from "../Images/Motherboard.jpg";
import img10 from "../Images/AIO Liquid Cooler.webp";
import img11 from "../Images/Air Cooler.webp";
import img12 from "../Images/Ram.webp";
import img13 from "../Images/Graphics Card.webp";
import img14 from "../Images/SSD.webp";
import img15 from "../Images/WD-Blue.webp";
import img16 from "../Images/Power Supply.webp";
import img17 from "../Images/Cabinet.webp";
import img18 from "../Images/Case fans.webp";
import img19 from "../Images/Custom Cables.webp";
import img20 from "../Images/Monitor.webp";
import img21 from "../Images/Keyboard.webp";
import img22 from "../Images/Mouse.webp";
import img23 from "../Images/Mouse pad.jpg";
import img24 from "../Images/Headphones.webp";
import img25 from "../Images/Gaming Chair.webp";
import img26 from "../Images/UPS.webp";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

export const AllCategories = () => {
  const categoryData = [
    {
      img: img8,
      name: "Processor",
      path: "/category/processor",
    },
    {
      img: img9,
      name: "Motherboard",
      path: "/category/motherboard",
    },
    {
      img: img10,
      name: "AIO Liquid Cooler",
      path: "/Processor",
    },
    {
      img: img11,
      name: "Air Cooler",
      path: "/Processor",
    },
    {
      img: img12,
      name: "RAM",
      path: "/Processor",
    },
    {
      img: img13,
      name: "Graphics Card",
      path: "/Processor",
    },
    {
      img: img14,
      name: "SSD",
      path: "/Processor",
    },
    {
      img: img15,
      name: "WD-Blue",
      path: "/Processor",
    },
    {
      img: img16,
      name: "Power Supply",
      path: "/Processor",
    },
    {
      img: img17,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      img: img18,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      img: img19,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      img: img20,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      img: img21,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      img: img22,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      img: img23,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      img: img24,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      img: img25,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      img: img26,
      name: "Cabinet",
      path: "/Processor",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="category-main flex flex-col f">
        <h1>Categories</h1>
        <div className="category flex flex-row">
          {categoryData.map((value) => {
            return(
          <div
            className="category-box flex flex-col"
            onClick={() => navigate(value.path)}
          >
            <img src={value.img} alt="" />
            <h6>{value.name}</h6>
          </div>
          )
           })}
          </div>
      </div>
    </>
  );
};

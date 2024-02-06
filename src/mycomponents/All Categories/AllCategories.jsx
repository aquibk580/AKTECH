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

export const AllCategories = () => {
  const categoryData = [
    {
      id: 1,
      img: img8,
      name: "Processor",
      path: "/category/processor",
    },
    {
      id: 2,
      img: img9,
      name: "Motherboard",
      path: "/category/motherboard",
    },
    {
      id: 3,
      img: img10,
      name: "AIO Liquid Cooler",
      path: "/Processor",
    },
    {
      id: 4,
      img: img11,
      name: "Air Cooler",
      path: "/Processor",
    },
    {
      id: 5,
      img: img12,
      name: "RAM",
      path: "/Processor",
    },
    {
      id: 6,
      img: img13,
      name: "Graphics Card",
      path: "/Processor",
    },
    {
      id: 7,
      img: img14,
      name: "SSD",
      path: "/Processor",
    },
    {
      id: 8,
      img: img15,
      name: "WD-Blue",
      path: "/Processor",
    },
    {
      id: 9,
      img: img16,
      name: "Power Supply",
      path: "/Processor",
    },
    {
      id: 10,
      img: img17,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      id: 11,
      img: img18,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      id: 12,
      img: img19,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      id: 13,
      img: img20,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      id: 14,
      img: img21,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      id: 15,
      img: img22,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      id: 16,
      img: img23,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      id: 17,
      img: img24,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      id: 18,
      img: img25,
      name: "Cabinet",
      path: "/Processor",
    },
    {
      id: 19,
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
            return (
              <div
                className="category-box flex flex-col" key={value.id}
                onClick={() => navigate(value.path)}
              >
                <img src={value.img} alt="" />
                <h6>{value.name}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

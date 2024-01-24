import React from "react";
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

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    slidesToSlide: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

export const productData = [
  {
    id: 1,
    imageurl: img8,
    name: "Processor",
    path:"/category/processor"
  },
  {
    id: 2,
    imageurl: img9,
    name: "Motherboard",
    path:"/category/motherboard"
  },
  {
    id: 3,
    imageurl: img10,
    name: "Liquid Cooler",
  },
  {
    id: 4,
    imageurl: img11,
    name: "Air Cooler",
  },
  {
    id: 5,
    imageurl: img12,
    name: "Ram",
  },
  {
    id: 6,
    imageurl: img13,
    name: "Graphics Card",
  },
  {
    id: 7,
    imageurl: img14,
    name: "SSD",
  },
  {
    id: 8,
    imageurl: img15,
    name: "Hard Drive",
  },
  {
    id: 9,
    imageurl: img16,
    name: "Power Supply",
  },
  {
    id: 10,
    imageurl: img17,
    name: "Cabinet",
  },
  {
    id: 11,
    imageurl: img18,
    name: "Case Fans",
  },
  {
    id: 12,
    imageurl: img19,
    name: "Custom Cables",
  },
  {
    id: 13,
    imageurl: img20,
    name: "Monitor",
  },
  {
    id: 14,
    imageurl: img21,
    name: "Keyboard",
  },
  {
    id: 15,
    imageurl: img22,
    name: "Mouse",
  },
  {
    id: 16,
    imageurl: img23,
    name: "Mouse Pad",
  },
  {
    id: 17,
    imageurl: img24,
    name: "Headset",
  },
  {
    id: 18,
    imageurl: img25,
    name: "Gaming Chair",
  },
  {
    id: 19,
    imageurl: img26,
    name: "UPS",
  },
  {
    id: 20,
    imageurl: img8,
    name: "Processor",
  },
  {
    id: 21,
    imageurl: img9,
    name: "Motherboard",
  },
];

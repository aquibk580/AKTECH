import React from "react";
import "./category-item.css";
import m1 from "./Category Images/Gigabyte-B550M-DS3H-AC-Wi-Fi.webp";
import m2 from "./Category Images/MSI-MAG-B550-Tomahawk-MAX-WIFI.webp";
import m3 from "./Category Images/Gigabyte-B650M-Gaming-X-AX-Wi-Fi.webp";
import m4 from "./Category Images/MSI-Pro-B760M-E.webp";
import m5 from "./Category Images/Asus-ROG-MAXIMUS-Z790-Hero-WIFI.webp";
import m6 from "./Category Images/Asus-ROG-Strix-X670E-A-Gaming-WiFi.webp";
import m7 from "./Category Images/MSI-MEG-X670E-ACE-Wi-Fi.jpg";
import m8 from "./Category Images/MSI-MPG-Z790-Edge-WIFI.webp";
import p1 from "./Category Images/Intel-Core-I3-13100.webp";
import p2 from "./Category Images/AMD-Ryzen-3-4300G.webp";
import p3 from "./Category Images/Intel-Core-I5-14600K.webp";
import p4 from "./Category Images/Amd-Ryzen-5-5600X-Processor.webp";
import p5 from "./Category Images/Intel-Core-I7-14700K.webp";
import p6 from "./Category Images/AMD-Ryzen-7-7800X3D.webp";
import p7 from "./Category Images/Intel-Core-I9-14900K.webp";
import p8 from "./Category Images/AMD-Ryzen-9-7950X3D.webp";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const obj = [
  {
    type: "processor",
    products: [
      { id:1, name: "intel Core i3 13100", price: "₹13,190", img: p1 },
      { id:2, name: "AMD Ryzen 3 4300G", price: "₹8,750", img: p2 },
      { id:3, name: "Intel Core i5 14600K", price: "₹30,650", img: p3 },
      { id:4, name: "AMD Ryzen 5 5600X", price: "₹16,590", img: p4 },
      { id:5, name: "Intel Core i7 14700K", price: "₹40,980", img: p5 },
      { id:6, name: "AMD Ryzen 7 7800X", price: "₹36,490", img: p6 },
      { id:7, name: "Intel Core i9 14900K", price: "₹55,390", img: p7 },
      { id:8, name: "AMD Ryzen 9 7950X", price: "₹57,990", img: p8 },
    ],
  },
  {
    type: "motherboard",
    products: [
      { id:1, name: "Gigabyte B550M DS3H", price: "₹8,390", img: m1 },
      { id:2, name: "MSI B550 Tomahawk", price: "₹17,420", img: m2 },
      { id:3, name: "Gigabyte B650 gaming X", price: "₹17,020", img: m3 },
      { id:4, name: "MSI PRO B760M-E", price: "₹17,020", img: m4 },
      { id:5, name: "ROG MAXIMUS Z790", price: "₹61,990", img: m5 },
      { id:6, name: "ROG Strix X670E-E", price: "₹49,190", img: m6 },
      { id:7, name: "MSI MEG X670E ACE", price: "₹75,810", img: m7 },
      { id:8, name: "MSI MPG Z790 Edge", price: "₹38,850", img: m8 },
    ],
  },
];

export const CategoryItem = (props) => {
  const { type } = useParams();

  let selectedObj = obj.filter((value) => {
    return value.type === type;
  });
  selectedObj = selectedObj[0];
  const [value, onChange] = useState(6140);
  useEffect(() => {
    const ele = document.querySelector(".buble");

    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  return (
    <>
      <div className="category-item-contain flex row">
        <div className="filter flex flex-col py-5">
          <form action="">
            <h2>Filters</h2>
            <div className="slider-parent">
              <label htmlFor="points">Price</label>
              <br />
              <input
                type="range"
                min="6140"
                max="76490"
                id="points"
                steps="1"
                value={value}
                onChange={({ target: { value: radius } }) => {
                  onChange(radius);
                }}
              />
              <div className="buble">{"₹" + value}</div>
              <p className="slideValue py-3">Price Range : ₹6,140 - ₹76,490</p>
              <hr />
            </div>
            <div className="filter-brand py-3">
              <h6 className="py-2">Brand</h6>
              <input type="checkbox" id="check-asrock" name="check-asrock" />
              <label className="px-2" htmlFor="check-asrock">
                Asrock
              </label>
              <br />
              <input type="checkbox" id="check-asus" name="check-asus" />
              <label className="px-2" htmlFor="check-asus">
                Asus
              </label>
              <br />
              <input type="checkbox" id="check-msi" name="check-msi" />
              <label className="px-2" htmlFor="check-msi">
                MSI
              </label>
              <br />
              <input
                type="checkbox"
                id="check-gigabyte"
                name="check-gigabyte"
              />
              <label className="px-2" htmlFor="check-gigabyte">
                Gigabyte
              </label>
              <br />
              <input type="checkbox" id="check-NZXT" name="check-NZXT" />
              <label className="px-2" htmlFor="check-NZXT">
                NZXT
              </label>
              <br />
            </div>
            <hr />
            <div className="filter-feature-1 py-3">
              <h6 className="py-2">Memory Type</h6>
              <input type="checkbox" id="check-mt-ddr5" name="check-mt-ddr5" />
              <label className="px-2" htmlFor="check-mt-ddr5">
                DDR5
              </label>
              <br />
              <input type="checkbox" id="check-mt-ddr4" name="check-mt-ddr4" />
              <label className="px-2" htmlFor="check-mt-ddr4">
                DDR4
              </label>
              <br />
            </div>
            <hr />
            <div className="filter-feature-2 py-3">
              <h6 className="py-2">Form Factor</h6>
              <input type="checkbox" id="check-ff-atx" name="check-ff-atx" />
              <label className="px-2" htmlFor="check-ff-atx">
                ATX
              </label>
              <br />
              <input type="checkbox" id="check-ff-matx" name="check-ff-matx" />
              <label className="px-2" htmlFor="check-ff-matx">
                MATX
              </label>
            </div>
            <div className="filter-feature-3 py-3">
              <h6 className="py-2">Socket</h6>
              <input
                type="checkbox"
                id="check-s-lga1700"
                name="check-s-lga1700"
              />
              <label className="px-2" htmlFor="check-s-lga1700">
                LGA 1700
              </label>
              <br />
              <input
                type="checkbox"
                id="check-s-lga1200"
                name="check-s-lga1200"
              />
              <label className="px-2" htmlFor="check-s-lga1200">
                LGA 1200
              </label>
              <br />
              <input type="checkbox" id="check-s-am5" name="check-s-am5" />
              <label className="px-2" htmlFor="check-s-am5">
                AM5
              </label>
              <br />
              <input type="checkbox" id="check-s-am4" name="check-s-am4" />
              <label className="px-2" htmlFor="check-s-am4">
                AM4
              </label>
            </div>
          </form>
        </div>

        <div className="category-item-main f py-4 flex flex-col motherboard-item-main">
          <h1>{selectedObj?.type}</h1>
          <div className="category-item-row flex flex-row py-3">
            {selectedObj.products.map((value) => {
              return (
                <div className="category-item-box flex flex-col" key={value.id}>
                  <img src={value.img} alt="" />
                  <h5>{value.name}</h5>
                  <div className="custom-stars flex flex-row">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="in-stock flex flex-row">
                    <i className="fa-solid fa-check red"></i>
                    <p>In Stock</p>
                  </div>
                  <p className="custom-price red">{value.price}</p>
                  <button className="bg-red white">Add To Cart</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

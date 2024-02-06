import React from "react";
import {Link} from "react-router-dom"

export const Product = ({data}) => {
  const {path,imageurl,name} = data
  return (
    <Link to={path} className="multicarousel-box flex flex-col">
      <img className="multicarousel-box-image" src={imageurl} alt="" />
      <h5 className="my-3 black underlined-none">{name}</h5>
    </Link>
  );
};

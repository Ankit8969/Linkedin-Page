import React from "react";

const FeaturedImage = ({ item }) => {
  return (
    <div className="featured-box">
      <div className="image-box">
        <img src={item.image} alt="" />
      </div>
      <div className="about-box">
        <p>{item.name}</p>
        <p>{item.dummy}</p>
      </div>
    </div>
  );
};

export default FeaturedImage;

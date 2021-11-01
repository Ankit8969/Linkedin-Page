import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopUpAllFeatured from "../popup/popup-all-featured";
import "../styles/featured.css";
import FeaturedImage from "./featured-image-box";
import { showAllFeatured, showAddFeatured } from "./../store/action";
import PopUpAddFeatured from "../popup/popup-add-featured";

const Featured = () => {
  const [slider, setSlider] = useState(0);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRight = () => {
    if (parseInt(slider + 100) > parseInt(state.list.length * 308 - 700))
      return;
    setSlider(slider + 100);
  };

  const handleLeft = () => {
    if (slider === 0) return;
    setSlider(slider - 100);
  };

  return (
    <section className="featured">
      <div className="featured-header">
        <span>Featured</span>
        <div className="featured-button">
          <div className="see-all" onClick={() => dispatch(showAllFeatured())}>
            <span>See all</span>
          </div>
          <div className="featured-btn" onClick={handleLeft}>
            <i class="fas fa-chevron-left"></i>
          </div>
          <div className="featured-btn" onClick={handleRight}>
            <i class="fas fa-chevron-right"></i>
          </div>
          <div
            className="featured-btn"
            onClick={() => dispatch(showAddFeatured())}
          >
            <i class="fas fa-plus"></i>
          </div>
          <div className="featured-btn">
            <i class="fas fa-pencil-alt"></i>
          </div>
        </div>
      </div>
      <div className="featured-section">
        <div className="slider-carosul" style={{ right: slider }}>
          {state.list.map((item) => (
            <FeaturedImage item={item} />
          ))}
        </div>
      </div>
      {state.showAllFeatured ? <PopUpAllFeatured list={state.list} /> : ""}
      {state.showAddFeatured ? <PopUpAddFeatured /> : ""}
    </section>
  );
};

export default Featured;

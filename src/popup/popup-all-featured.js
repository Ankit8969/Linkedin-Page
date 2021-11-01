import React from "react";
import "./popup-all-featured.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showAllFeatured } from "../store/action";

const PopUpAllFeatured = ({ list }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <article className="cover-all-page">
      <section className="popup-all-featured">
        <div className="header">
          <span>Featured</span>
          <span
            onClick={() => dispatch(showAllFeatured())}
            style={{ cursor: "pointer" }}
          >
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div className="popup-all-featured-scroll">
          {list.map((item) => (
            <div className="single-popup">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="featured-about">
                <p>
                  <b> {item.name} </b>
                </p>
                <p> {item.dummy} </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div
        className="overlay"
        onClick={() => dispatch(showAllFeatured())}
      ></div>
    </article>
  );
};

export default PopUpAllFeatured;

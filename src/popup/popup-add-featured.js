import React, { useState } from "react";
import "./popup-all-featured.css";
import "./popup-add-featured.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showAddFeatured, addPost } from "../store/action";

const PopUpAddFeatured = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = () => {
    dispatch(addPost({ url: url, title: title, about: about }));
    dispatch(showAddFeatured());
  };

  return (
    <article className="cover-all-page">
      <section className="popup-all-featured">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-box">
            <label>Enter the Url</label>
            <input
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="about-box">
            <div>
              <label>Enter the Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>About</label>
              <input
                type="text"
                required
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </section>
      <div
        className="overlay"
        onClick={() => dispatch(showAddFeatured())}
      ></div>
    </article>
  );
};

export default PopUpAddFeatured;

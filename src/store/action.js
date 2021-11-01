import { createAction } from "@reduxjs/toolkit";

export const addFeatured = createAction("ADD-FEATURED");
export const deleteFeatured = createAction("DELETE-FEATURED");
export const showAllFeatured = createAction("SHOW-ALL-FEATURED");
export const showAddFeatured = createAction("SHOW-ADD-FEATURED");
export const addPost = createAction("ADD-POST");

import { list } from "../data/featured-data";

const initialState = {
  list: list,
  showAllFeatured: false,
  showAddFeatured: false,
  url: "",
  title: "",
  about: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-FEATURED":
      return { ...state, list: [...state.list, action.payload.item] };
    case "DELETE-FEATURED": {
      let obj = { ...state };
      obj.list.filter((item) => item.id !== action.payload.id);
      return { ...state };
    }
    case "SHOW-ALL-FEATURED": {
      return { ...state, showAllFeatured: !state.showAllFeatured };
    }
    case "SHOW-ADD-FEATURED": {
      return { ...state, showAddFeatured: !state.showAddFeatured };
    }
    case "ADD-POST": {
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + action.payload.title.length,
            name: action.payload.title,
            dummy: action.payload.about,
            image: action.payload.url,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export default reducer;

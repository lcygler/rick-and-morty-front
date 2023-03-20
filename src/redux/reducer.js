import { ADD_FAVORITE, CLEAR_FAVORITE, REMOVE_FAVORITE } from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== action.payload
        ),
      };
    case CLEAR_FAVORITE:
      return {
        ...state,
        myFavorites: [],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;

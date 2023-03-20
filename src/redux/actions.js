export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const CLEAR_FAVORITE = "CLEAR_FAVORITE";

export const addFavorite = (character) => {
  return {
    type: ADD_FAVORITE,
    payload: character,
  };
};

export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};

export const clearFavorites = () => {
  return {
    type: CLEAR_FAVORITE,
  };
};

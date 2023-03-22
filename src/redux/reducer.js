import {
  ADD_FAVORITE,
  CLEAR_FAVORITE,
  FILTER,
  ORDER,
  REMOVE_FAVORITE,
  RESET,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  currentFilter: "All",
  currentOrder: "Default",
};

const sortCharacters = (characters, order) => {
  switch (order) {
    case "Ascending":
      return characters.sort((a, b) => a.id - b.id);
    case "Descending":
      return characters.sort((a, b) => b.id - a.id);
    default:
      return characters;
  }
};

const filterCharacters = (characters, gender) => {
  return gender === "All"
    ? characters
    : characters.filter((char) => char.gender === gender);
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAVORITE:
      const updatedChars = state.allCharacters.filter(
        (char) => char.id !== payload
      );
      return {
        ...state,
        myFavorites: [...updatedChars],
        allCharacters: [...updatedChars],
      };

    case CLEAR_FAVORITE:
      return {
        ...state,
        myFavorites: [],
        allCharacters: [],
      };

    case FILTER:
      const filterAllChars = [...state.allCharacters];
      const filteredChars = filterCharacters(filterAllChars, payload);
      const filteredAndOrderedChars = sortCharacters(
        filteredChars,
        state.currentOrder
      );
      return {
        ...state,
        myFavorites: filteredAndOrderedChars,
        currentFilter: payload,
      };

    case ORDER:
      const orderAllChars = [...state.allCharacters];
      const orderedChars = sortCharacters(orderAllChars, payload);
      const orderedAndFilteredChars = filterCharacters(
        orderedChars,
        state.currentFilter
      );
      return {
        ...state,
        myFavorites: orderedAndFilteredChars,
        currentOrder: payload,
      };

    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
        currentFilter: "All",
        currentOrder: "Default",
      };

    default:
      return { ...state };
  }
};

export default rootReducer;

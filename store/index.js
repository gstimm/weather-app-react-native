import { createStore } from 'redux';

const initialState = { locations: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addLocation':
      const searches = state.locations;

      if (searches.find((location) => location.city === action.location.city)) {
        return state;
      }
      if (searches.length === 3) {
        searches.splice(0, 1);
      }
      searches.push(action.location);
      searches.reverse();
      return {
        ...state,
        locations: [...searches],
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

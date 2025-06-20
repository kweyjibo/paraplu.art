export const initialState = {
  items: [],
  isLoading: false,
  currentItem: {},
  error: null,
};

export function createReducer({ start, success, successCurrent, error }) {
  return function reducer(state, action) {
    switch (action.type) {
      case start:
        return { ...state, isLoading: true, error: null };

      case success:
        return {
          ...state,
          isLoading: false,
          items: action.payload,
          error: null,
        };

      case successCurrent:
        return {
          ...state,
          isLoading: false,
          currentItem: action.payload,
          error: null,
        };

      case error:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  };
}

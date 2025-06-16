export const initialState = {
  items: [],
  isLoading: false,
  currentItem: {},
  error: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true };

    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };

    case "FETCH_SUCCESS_CURRENT":
      return { ...state, isLoading: false, currentItem: action.payload };

    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

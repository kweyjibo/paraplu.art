import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { toSlug } from "../utils/helpers";
import { initialState, reducer } from "./baseReducer";

const BASE_URL = "/data";

const WallpapersContext = createContext();

function WallpapersProvider({ children }) {
  const [{ items, isLoading, currentItem, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    const fetchWallpapers = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const res = await fetch(`${BASE_URL}/wallpapers.json`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_ERROR",
          payload: "There was an error loading data...",
        });
      }
    };

    fetchWallpapers();
  }, []);

  const getWallpaperBySlug = useCallback(
    (slug) => {
      const wallpaper = items.find(
        (wallpaper) => toSlug(wallpaper.wallpaperName) === slug
      );
      if (wallpaper) {
        dispatch({ type: "FETCH_SUCCESS_CURRENT", payload: wallpaper });
      } else {
        dispatch({ type: "FETCH_ERROR", payload: "Wallpaper not found" });
      }
    },
    [items]
  );

  return (
    <WallpapersContext.Provider
      value={{
        items,
        isLoading,
        currentItem,
        error,
        getWallpaperBySlug,
      }}
    >
      {children}
    </WallpapersContext.Provider>
  );
}

function useWallpapers() {
  const context = useContext(WallpapersContext);
  if (context === undefined) {
    throw new Error("useWallpapers must be used within a WallpapersProvider");
  }
  return context;
}

export { WallpapersProvider, useWallpapers };

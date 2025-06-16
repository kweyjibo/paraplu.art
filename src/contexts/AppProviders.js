import { CardsProvider } from "./CardsContext";
import { WallpapersProvider } from "./WallpapersContex";

const AppProviders = ({ children }) => {
  return (
    <CardsProvider>
      <WallpapersProvider>{children}</WallpapersProvider>
    </CardsProvider>
  );
};

export default AppProviders;

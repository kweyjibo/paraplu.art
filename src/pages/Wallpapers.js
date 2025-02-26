import MetaData from "../components/meta-data/MetaData";
import WallpaperList from "../components/wallpapers/WallpaperList";

function Wallpapers() {
  return (
    <>
      <MetaData
        title="Wallpapers - Paraplu.art"
        description="View all wallpapers for mobile"
      />
      <WallpaperList />
    </>
  );
}

export default Wallpapers;

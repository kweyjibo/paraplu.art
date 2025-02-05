const API_URL = "/data";

export async function getWallpapers() {
  const res = await fetch(`${API_URL}/wallpapers.json`);

  if (!res.ok) throw Error("Failed getting wallpapers");

  const data = await res.json();
  return data;
}

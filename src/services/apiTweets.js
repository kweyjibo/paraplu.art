const API_URL = "/data";

export async function getTweets() {
  const res = await fetch(`${API_URL}/tweets.json`);

  if (!res.ok) throw Error("Failed getting wallpapers");

  const data = await res.json();
  return data;
}

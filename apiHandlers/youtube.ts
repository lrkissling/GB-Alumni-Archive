import { config } from "/deps.ts";

export const getVideosForPlaylist = (playlistID: string) => {
  const params = new URLSearchParams({
    playlistId: playlistID,
    part: "snippet,id",
    order: "date",
    maxResults: "50",
    key: config().YOUTUBE_API_KEY,
  });

  console.log(params);

  return fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?${params}`, {
    headers: { Accept: "application/json" },
  })
  .then(response => response)
  .catch(error => {
    console.warn(error);
    return Promise.reject(error.message || error)
  });
};
import { config } from "/deps.ts";

export const getChannelByUsername = (username: string) => {
  const params = new URLSearchParams({
    forUsername: username,
    part: "snippet,contentDetails,statistics",
    key: config().YOUTUBE_API_KEY,
  });

  console.log(params);

  return fetch(`https://youtube.googleapis.com/youtube/v3/channels?${params}`, {
    headers: { Accept: "application/json" },
  })
  .then(response => response)
  .catch(error => {
    console.warn(error);
    return Promise.reject(error.message || error)
  });
};
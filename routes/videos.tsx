/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

import { YOUTUBE_CHANNELS } from "/constants.ts";
import { config } from "/deps.ts";
import { YoutubePlaylist } from "/interfaces/youtube.ts";


interface Video {
  id: string;
  title: string;
  description: string;
  publishedAt: Date;
}

// interface Videos extends Array<Video>{}

export const handler: Handlers<Video[] | null> = {
  async GET(_, ctx) {
    const params = new URLSearchParams({
      playlistId: YOUTUBE_CHANNELS[0].uploadsID,
      part: "snippet,id",
      order: "date",
      maxResults: "50",
      key: config().YOUTUBE_API_KEY,
    });

    const resp = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?${params}`, {
      headers: { Accept: "application/json" },
    });

    if(resp.status === 404) {
      return ctx.render(null);
    }

    const playlist: YoutubePlaylist = await resp.json();
    const videos: Video[] = playlist.items.map(i => ({
      id: i.id,
      title: i.snippet.title,
      description: i.snippet.description,
      publishedAt: i.snippet.publishedAt,
    }));

    return ctx.render(videos);
  }
}

const YoutubeVideos = ({ data }: PageProps<Video[] | null>) => {
  if (!data) {
    return <h1>Videos not found</h1>;
  }

  const videosHTML = data.map(v => (
    <div>
      <p>ID: {v.id}</p>
      <p>Title: {v.title}</p>
      <p>Description: {v.description}</p>
      <p>Published At: {v.publishedAt}</p>
      <hr />
    </div>
  ));

  return (
    <div>
      {videosHTML}
    </div>
  );
}

export default YoutubeVideos;
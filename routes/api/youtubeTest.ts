import { HandlerContext } from "$fresh/server.ts";
import { getVideosForPlaylist } from "/apiHandlers/youtube.ts";
import { YOUTUBE_CHANNELS } from "/constants.ts";


export const handler = (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  return getVideosForPlaylist(YOUTUBE_CHANNELS[0].uploadsID);
};
import { HandlerContext } from "$fresh/server.ts";
import { getChannelByUsername } from "/apiHandlers/youtube.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  return getChannelByUsername("ybbaaabby");
};
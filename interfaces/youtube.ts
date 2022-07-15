export interface YoutubePlaylist {
  kind:          string;
  etag:          string;
  nextPageToken: string;
  items:         Item[];
  pageInfo:      PageInfo;
}

export interface Item {
  kind:    ItemKind;
  etag:    string;
  id:      string;
  snippet: Snippet;
}

enum ItemKind {
  YoutubePlaylistItem = "youtube#playlistItem",
}

interface Snippet {
  publishedAt:            Date;
  channelId:              string;
  title:                  string;
  description:            string;
  thumbnails:             Thumbnails;
  channelTitle:           string;
  playlistId:             string;
  position:               number;
  resourceId:             ResourceID;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId:    string;
}

interface ResourceID {
  kind:    ResourceIDKind;
  videoId: string;
}

enum ResourceIDKind {
  YoutubeVideo = "youtube#video",
}

interface Thumbnails {
  default:   Thumbnail;
  medium:    Thumbnail;
  high:      Thumbnail;
  standard?: Thumbnail;
  maxres?:   Thumbnail;
}

interface Thumbnail {
  url:    string;
  width:  number;
  height: number;
}

interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}

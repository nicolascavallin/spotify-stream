type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
};

type ExternalUrls = {
  spotify: string;
};

type Followers = {
  href: null;
  total: number;
};

type Image = {
  height: number | null;
  url: string;
  width: number | null;
};

type Owner = {
  display_name?: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: OwnerType;
  uri: string;
  name?: string;
};

type OwnerType = "user" | "artist";

type Tracks = {
  href: string;
  items: Item[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
};

type Item = {
  added_at: string;
  added_by: Owner;
  is_local: boolean;
  primary_color: null;
  track: Track;
  video_thumbnail: VideoThumbnail;
};

type Track = {
  album: Album;
  artists: Owner[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: TrackType;
  uri: string;
};

type Album = {
  album_group: AlbumGroup;
  album_type: AlbumGroup;
  artists: Owner[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: AlbumGroup;
  uri: string;
};

type AlbumGroup = "single" | "album" | "compilation";

type ExternalIDS = {
  isrc: string;
};

type TrackType = "track";

type VideoThumbnail = {
  url: null;
};

export { Playlist, Item, Owner };

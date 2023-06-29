export type TrackInput = {
  title: string;
};

export type AlbumInput = {
  title: string;
  tracks: TrackInput[];
};

export type ArtistInput = {
  name: string;
  albums: AlbumInput[];
  concerts: { id: number }[];
};

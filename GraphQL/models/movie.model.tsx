export interface IMovieListObject {
  __typename: string;
  _id: string;
  id: number;
  release_date: Date;
  title: string;
  vote_average: number;
  runtime: number;
  vote_count: number;
  overview: string;
  genres: IGenre[];
  tagline: string;
  crew: ICrew[];
}

export interface IGenre {
  name: string;
}

export interface ICrew {
  name: string;
  job: string;
}

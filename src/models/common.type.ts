export enum GenreType {
  COMEDY = 'comedy',
  HORROR = 'horror',
  DRAMA = 'drama',
  THRILLER = 'thriller',
  MUSICAL = 'musical',
  BIOGRAPHY = 'biography',

  MOVIE = 'movie',
  SERIES = 'series',
}

export type ContentType = {
  name: string,
  title: string,
  logo: string
}

export type MoviesType = {
  id: number,
  year: number,
  type: GenreType,
  title: string,
  description: string,
  actors: string[],
  directors: string[],
  country: string[],
  poster: string,
}

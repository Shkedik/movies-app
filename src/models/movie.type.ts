import { GenreType } from "./common.type";

export type MovieType = {
  id: number,
  year: number,
  type: GenreType,
  title: string,
  description: string,
  actors: string[],
  directors: string[],
  country: string[],
  slug: string,
  poster: string,
  stills: string[],
}

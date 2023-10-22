import { MovieType } from "@/models/movie.type";

export const getMoviesStaticPaths = (movies: MovieType[]) => {
  return movies.length ?
	movies?.map((movie) => {
		return {
			params: {
				slug: movie.slug,
			},
		};
	}) : [];
}
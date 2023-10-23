import React, { FC } from 'react';
import MovieCard from './components/MovieCard/MovieCard';
import { MovieType } from '@/models/movie.type';

interface ListMoviesProps {
	movies: MovieType[],
}

const ListMovies: FC<ListMoviesProps> = ({movies}) => {
  return (
    <div className="my-5 h-full">
      {movies.map((movie) => <MovieCard
          movie={movie}
          key={`${movie.title}-${movie.year}`}
        />
      )}
    </div>
  );
};

export default ListMovies;

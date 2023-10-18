import React, { FC } from 'react';
import { MoviesType } from '@/models/common.type';
import MovieCard from './components/MovieCard/MovieCard';

interface ListMoviesProps {
	movies: MoviesType[],
}

const ListMovies: FC<ListMoviesProps> = ({movies}) => {
  return (
    <div className="my-5 h-full">
      {movies.map((movie) => <MovieCard movie={movie}/>)}
    </div>
  );
};

export default ListMovies;

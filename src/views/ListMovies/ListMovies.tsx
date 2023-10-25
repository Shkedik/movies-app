import React, { FC, useEffect, useMemo, useState } from 'react';
import MovieCard from './components/MovieCard/MovieCard';
import { MovieType } from '@/models/movie.type';
import CustomInput from '@/components/CustomInput/CustomInput';
import { FilteredEnum, GenreType } from '@/models/common.type';
import CustomSelector from '@/components/CustomSelector/CustomSelector';

interface ListMoviesProps {
	movies: MovieType[],
}

const ListMovies: FC<ListMoviesProps> = ({movies}) => {
  const [filterYear, setFilterYear] = useState<number | string>('');
  const [filterGenre, setFilterGenre] = useState<GenreType>(GenreType.NONE);
  const [delayedMovies, setDelayedMovies] = useState<MovieType[]>(movies);
  const genresArray = Object.values(GenreType) as string[];

  useEffect(() => {
    const delay = setTimeout(() => {
      if (filterYear !== '' && filterGenre !== GenreType.NONE) {
        const filteredMovies = movies.filter(movie => (movie.year === Number(filterYear) && (movie.type === filterGenre)));
        setDelayedMovies(filteredMovies);
        return;
      }

      if (filterYear !== '') {
        const filteredMovies = movies.filter(movie => movie.year === Number(filterYear));
        setDelayedMovies(filteredMovies);
        return;
      }

      if(filterGenre !== GenreType.NONE) {
        const filteredMovies = movies.filter(movie => movie.type === filterGenre);
        setDelayedMovies(filteredMovies);
        return;
      }

      setDelayedMovies(movies);
    }, 800);

    return () => clearTimeout(delay);
  }, [filterYear, movies, filterGenre]);

  const items = useMemo(() => {
    if (filterYear !== '' || filterGenre !== GenreType.NONE) {
      return delayedMovies;
    }
    return movies;
  }, [delayedMovies, filterYear, movies, filterGenre]);

  return (
    <div>
      <div className="mt-2">
        <CustomInput
          title={'Filter by year'}
          type={FilteredEnum.TEXT}
          filteredData={filterYear}
          setFilteredData={setFilterYear}
        />

        <CustomSelector
          filterGenre={genresArray}
          setFilteredData={setFilterGenre}
        />

      </div>
      <div className="my-5 h-full">
        {items.map((movie) => <MovieCard
            movie={movie}
            key={`${movie.title}-${movie.year}-${movie.id}`}
          />
        )}
      </div>
    </div>
  );
};

export default ListMovies;

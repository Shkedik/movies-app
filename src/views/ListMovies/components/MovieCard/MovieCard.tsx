import React, { FC } from 'react';
import Image from 'next/image';

import { MoviesType } from '@/models/common.type';


interface MovieCardProps {
	movie: MoviesType,
}

const MovieCard: FC<MovieCardProps> = ({movie}) => {
  return  (
    <div className="flex">
      <div className="mr-5">
        <Image
          src={movie.poster}
          width={200}
          height={300}
          alt={movie.title}
        />
      </div>
      <div className="flex flex-col">
        <h5>{movie.title}</h5>
        <p>{movie.year}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  )
};

export default MovieCard;

import React, { FC } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { ROUT_MOVIE } from '@/constants/routers';
import { MovieType } from '@/models/movie.type';


interface MovieCardProps {
	movie: MovieType,
}

const MovieCard: FC<MovieCardProps> = ({movie}) => {
  return  (
    <div className="flex my-5">
      <Link className="mr-5" href={`${ROUT_MOVIE}/${movie.slug}`}>
        <Image
          src={movie.poster}
          width={200}
          height={300}
          alt={movie.title}
        />
      </Link>
      <div className="flex flex-col">
        <div className="flex">
          <h5>{movie.title},</h5>
          <p>{movie.year}</p>
        </div>
        <p>{movie.description}</p>
      </div>
    </div>
  )
};

export default MovieCard;

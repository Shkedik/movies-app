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
    <div className="flex flex-col items-center md:flex-row md:items-start my-5">
      <Link className="mr-5" href={`${ROUT_MOVIE}/${movie.slug}`}>
        <Image
          src={movie.poster}
          width={200}
          height={300}
          alt={movie.title}
        />
      </Link>
      <div className="flex flex-col mt-2 md:mt-0 pb-4 border-b border-gray-400 md:border-none">
        <div className="flex">
          <h5 style={{ fontFamily: 'GolosTextWebDemiBold' }}>{movie.title}, </h5>
          <p>{movie.year},</p>
          <p>{movie.type}</p>
        </div>
        <p>{movie.description}</p>
      </div>
    </div>
  )
};

export default MovieCard;

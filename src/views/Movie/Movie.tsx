import React, { FC } from 'react';
import Image from 'next/image';

import { MovieType } from '@/models/movie.type';
import Carousel from '@/components/Carousel/Carousel';

interface MovieCardProps {
	movie: MovieType,
}

const MovieCard: FC<MovieCardProps> = ({movie}) => {
  return  (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center md:flex-row md:items-start my-5">
        <div className="mx-5">
          <Image
            src={movie?.poster}
            width={200}
            height={300}
            alt={movie?.title}
            priority={true}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex mt-2">
            <h5>{movie?.title},</h5>
            <p >{movie?.year}</p>
          </div>
          <p className="mt-2">{movie?.description}</p>
          <p className="flex mt-2">Создатели: &nbsp;
            {movie?.directors?.map((director, idx) => !(idx === director.length - 1) ? `${director}, ` : `${director}`)}
          </p>
          <p className="flex mt-2">Актёры: &nbsp;
            {movie?.actors?.map((actor, idx) => !(idx === actor.length - 1) ? `${actor}, ` : `${actor}`)}
          </p>
        </div>
      </div>
      <Carousel images={movie.stills} />
    </div>
  )
};

export default MovieCard;

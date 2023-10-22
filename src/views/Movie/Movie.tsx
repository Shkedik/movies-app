import React, { FC } from 'react';
import Image from 'next/image';

import { MovieType } from '@/models/movie.type';
import Carousel from '@/components/Carousel/Carousel';

interface MovieCardProps {
	movie: MovieType,
}

const MovieCard: FC<MovieCardProps> = ({movie}) => {
  return  (
    <>
      <div className="flex my-5">
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
          <div className="flex mt-2">Создатели: &nbsp;
            <p>{movie?.directors?.map((director, idx) => !(idx === director.length - 1) ? `${director}, ` : `${director}`)}</p>
          </div>
          <div className="flex mt-2">Актёры: &nbsp;
            <p>{movie?.actors?.map((actor, idx) => !(idx === actor.length - 1) ? `${actor}, ` : `${actor}`)}</p>
          </div>
        </div>
      </div>
      <Carousel images={movie.stills} />
    </>
  )
};

export default MovieCard;

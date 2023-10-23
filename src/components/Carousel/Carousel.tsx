import React, { FC, useState } from 'react';
import Image from 'next/image';

type Props = {
  images: string[]
}

const Carousel: FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-screen-lg w-[48rem]">
      <div className="overflow-hidden relative h-[32rem]">
        {images?.map((image, idx) => {
          return (
            <Image
              src={image}
              layout="fill"
              alt={`still-${idx}`}
              priority={true}
              className={`${
                idx === currentIndex ? 'block' : 'hidden'
              } w-full h-full transition duration-500 ease-in-out`}
            />
          )
        })}
        <div className="absolute top-0 left-0 w-full flex justify-between h-full">
          <button
            onClick={prevSlide}
            className="bg-opacity-25 hover:bg-opacity-100 bg-gray-800 text-white font-bold py-2 rounded w-8"
          >
            {'<'}
          </button>
          <button
            onClick={nextSlide}
            className="bg-opacity-25 hover:bg-opacity-100 bg-gray-800 text-white font-bold py-2 rounded w-8"
          >
            {'>'}
          </button>
        </div>
      </div>
      <div className="flex justify-center  mt-6">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

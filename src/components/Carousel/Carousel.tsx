import React, { FC, useState } from 'react';
import Image from 'next/image';
import ImageModal from '../ImageModal';

type Props = {
  images: string[]
}

const Carousel: FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [openedImage, setOpenedImage] = useState<string | null>('');

  const prevSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="w-96 sm:w-[38rem] md:w-[44rem] lg:w-[48rem] h-full">
      <div className="overflow-hidden relative h-64 sm:h-[24rem] md:h-[28rem] lg:h-[36rem] cursor-pointer">
        {images?.map((image, idx) => {
          return (
            <>
              <div className="overflow-hidden relative h-64 sm:h-[24rem] md:h-[28rem]
                lg:h-[36rem] cursor-pointer bg-gray-800 z-10 bg-transparent"
                onClick={()=> setOpenedImage(image)}>
                  <Image
                    key={`${image}-${idx}`}
                    src={image}
                    layout="fill"
                    alt={`still-${idx}`}
                    priority={true}
                    className={`${
                      idx === currentIndex ? 'block' : 'hidden'
                    } w-full h-full transition duration-500 ease-in-out`}
                  />
                  {openedImage !== '' && openedImage === image ?
                  <ImageModal
                    imageUrl={image}
                    onClose={setOpenedImage}
                  /> : null}
              </div>
            </>
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
      <div className="flex justify-center mt-6">
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

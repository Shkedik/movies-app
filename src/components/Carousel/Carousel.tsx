import React, { FC } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1
};

type Props = {
  images: string[]
}

const Carousel: FC<Props> = ({images}) => {
  console.log('images', images);

  return (
    <div className="max-w-screen-lg max-h-80">
      <Slider {...settings} className="max-h-80">
      {images?.map((image, idx) => {
        return (
          <Image
            src={image}
            width={200}
            height={300}
            alt={`still-${idx}`}
            priority={true}
          />
        )
      })}
      </Slider>
    </div>
  )}
;

export default Carousel;

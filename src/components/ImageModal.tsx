import React, { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import { getImageDimensions } from '@/utils/getImageDimensions';

type ImageModalType = {
  imageUrl: string;
  onClose: Dispatch<SetStateAction<string | null>>;
}

type ImageParameters = {
  width: number;
  height: number;
}

const ImageModal: React.FC<ImageModalType> = ({ imageUrl, onClose }) => {
  const [imageParameters, setImageParameters] = useState<ImageParameters>();

  getImageDimensions(imageUrl)
  .then((dimensions) => {
    setImageParameters(dimensions as ImageParameters);
  })
  .catch((error) => {
    console.error('Error getting data about image:', error);
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose(null);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50" onClick={handleClick}>
      <div className="bg-white p-5 flex items-center justify-center h-64 sm:h-[24rem] md:h-[28rem] lg:h-[36rem]
        w-96 sm:w-[38rem] md:w-[44rem] lg:w-[48rem]">
          {imageParameters?.height && imageParameters.width ?
          <Image
          key={imageUrl}
          src={imageUrl}
          alt={''}
          priority={true}
          width={imageParameters?.width}
          height={imageParameters?.height}
          className="h-64 sm:h-[24rem] md:h-[28rem] lg:h-[34rem]
          w-96 sm:w-[38rem] md:w-[44rem] lg:w-[48rem]"
        /> : null}
      </div>
    </div>
  );
};

export default ImageModal;

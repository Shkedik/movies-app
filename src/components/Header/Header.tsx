import React, { FC } from 'react';
import Image from 'next/image';
import { ContentType } from '@/models/common.type';

interface HeaderProps {
  content: ContentType,
}

const Header: FC<HeaderProps> = ({content}) => {
  return (
    <div className='flex mx-80 justify-between items-center h-auto'>
      <Image
        src={`${content.logo}`}
        width={30}
        height={30}
        alt={'logo'}
      />

      <h2>{content.name}</h2>
      <h6>{content.title}</h6>
    </div>
  );
};

export default Header;

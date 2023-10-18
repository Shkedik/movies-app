import React, { FC } from 'react';
import Image from 'next/image';
import { ContentType } from '@/models/common.type';

interface HeaderProps {
  content: ContentType,
}

const Header: FC<HeaderProps> = ({content}) => {
  return (
    <div className="flex mx-80 h-24 justify-between items-center h-auto">
      <Image
        src={`${content.logo}`}
        width={30}
        height={30}
        alt={'logo'}
      />

      <h2 className="text-4xl"
        style={{ fontFamily: 'GolosTextWebBold' }}
        >{content.name}</h2>
      <h6  className="text-base"
        style={{ fontFamily: 'GolosTextWebDemiBold' }}
        >{content.title}</h6>
    </div>
  );
};

export default Header;

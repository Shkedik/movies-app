import React, { FC } from 'react';
import Image from 'next/image';
import { ContentType } from '@/models/common.type';
import Link from 'next/link';
import { Links } from '@/constants/common';

interface HeaderProps {
  content: ContentType,
}

const Header: FC<HeaderProps> = ({content}) => {
  return (
    <div className="flex h-24 justify-between items-center h-auto bg-sky-500/100">
      <Link  className="flex ml-2" href={Links.HOME}>
        <div className="mr-5">
          <Image
            src={content.logo}
            width={30}
            height={30}
            alt={'logo'}
          />
        </div>

        <h2 className="text-4xl"
          style={{ fontFamily: 'GolosTextWebBold' }}
          >{content.name}
        </h2>
      </Link>

      <h6 className="hidden md:block text-base mr-2"
        style={{ fontFamily: 'GolosTextWebDemiBold' }}
        >{content.title}
      </h6>
    </div>
  );
};

export default Header;

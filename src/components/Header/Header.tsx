import { ContentType } from '@/models/common.type';
import React, { FC } from 'react';

interface HeaderProps {
  content: ContentType,
}

const Header: FC<HeaderProps> = ({content}) => {
  return <div max-w-full h-96>
    Header Component
  </div>
};

export default Header;

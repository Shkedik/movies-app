import React from "react";
import Breadcrumbs from "@marketsystems/nextjs13-appdir-breadcrumbs";

export const CustomBreadcrumbs = () => {
  return <Breadcrumbs
    useDefaultStyle
    rootLabel="Home"
    containerClassName="mt-2"
    inactiveItemClassName="text-grey opacity-50 mx-1 after:ml-1 after:content-['/']"
    activeItemClassName="text-black opacity-100 pointer-events-none mx-1"
    listStyle={{ display: 'flex' }}
  />;
};
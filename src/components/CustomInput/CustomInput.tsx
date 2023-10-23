import React, { FC } from 'react';
import { FilteredEnum } from "@/models/common.type";

type Props = {
  title: string,
  type: FilteredEnum,
  filteredData: string | number,
  setFilteredData: React.Dispatch<React.SetStateAction<number | string>>,
}

const CustomInput: FC<Props>  = ({title, type, filteredData, setFilteredData }) => {
  return (
    <input
      type={type}
      placeholder={title}
      value={filteredData}
      onChange={(e) => setFilteredData(e.target.value)}
    />
  );
}

export default CustomInput;

import React, { FC } from 'react';
import { GenreType } from "@/models/common.type";

type Props = {
  filterGenre: string[],
  setFilteredData: React.Dispatch<React.SetStateAction<GenreType>>,
}

const CustomSelector: FC<Props> = ({filterGenre, setFilteredData}) => {
  return (
    <select
      value={filterGenre}
      onChange={(e) => setFilteredData(e.target.value as GenreType)}
    ></select>
  );
}

export default CustomSelector;

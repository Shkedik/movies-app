import React, { FC } from 'react';
import { GenreType } from "@/models/common.type";

type Props = {
  filterGenre: string[],
  setFilteredData: React.Dispatch<React.SetStateAction<GenreType>>,
}

const CustomSelector: FC<Props> = ({filterGenre, setFilteredData}) => {
  return (
    <select
      className={"border-black border-2 w-400 p-2.5 ml-4"}
      onChange={(e) => setFilteredData(e.target.value as GenreType)}
    >
      {filterGenre.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}

export default CustomSelector;

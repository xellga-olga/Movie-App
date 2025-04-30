import React from 'react';
import Select from "./ui/Select.jsx";

const SelectMovieCard = () => {
  return (
      <div className='flex justify-between p-5'>
        <h2 className='text-white text-xl font-bold'>Movies</h2>
        <Select>
          <option value="action">All</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Adventure</option>
        </Select>
      </div>
  );
};

export default SelectMovieCard;
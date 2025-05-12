import React from 'react';
import Select from "./ui/Select.jsx";

const SelectMovieCard = ({genre, setGenre}) => {

  return (
      <div className='flex justify-between p-5'>
        <h2 className='text-white text-xl font-bold'>Movies</h2>
        <Select value={genre} onChange={e => setGenre(e.target.value)} >
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="animation">Animation</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="documentary">Documentary</option>
          <option value="drama">Drama</option>
          <option value="family">Family</option>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="music">Music</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Science Fiction</option>
          <option value="tvmovie">TV Movie</option>
          <option value="thriller">Thriller</option>
          <option value="war">War</option>
          <option value="western">Western</option>
        </Select>
      </div>
  );
};

export default SelectMovieCard;
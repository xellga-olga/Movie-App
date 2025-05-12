import React, {useState} from 'react';

const MovieCard = ({ title, imageUrl, overview }) =>  {

  const [showOverview, setShowOverview] = useState(false);


    return (
        <div
          onClick={() => {setShowOverview(!showOverview)}}
          className='relative group cursor-pointer bg-gray-900  bg-opacity-90 flex flex-col items-center w-60 h-full overflow-hidden p-4 rounded-lg  '>
          <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
          <img
            src={imageUrl}
            alt="Image"
            className="w-ful h-full object-cover text-white"
          />
          {showOverview && (
            <div className="absolute inset-0 bg-gray-950 bg-opacity-80  text-amber-50 font-bold flex items-center justify-center text-center p-5 transition duration-300">
              <p className="text-sm">{overview}</p>
            </div>
          )}



        </div>
    );
}

export default MovieCard;
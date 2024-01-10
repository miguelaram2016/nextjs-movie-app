import React from 'react';
import Image from 'next/image';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div className='year'>
        <p>{Year}</p>
      </div>

      <div className='image-container'>
        <Image 
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} 
          alt={Title} 
          width={310}
          height={460}
          className='movie-image'
        />
      </div>

      <div className='movie-info'>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
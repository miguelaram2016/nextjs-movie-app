"use client"
import {useEffect, useState} from 'react';
import Image from 'next/image';
import SearchIcon from '../../../public/search.svg';
import MovieCard from './MovieCard.jsx'

const MovieLand = () => {
  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('');
  }, []);

  return (
    <div>
      <h1 className='title'>MovieLand</h1>
      <div className="search">
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        ></input>
        <Image 
          src={SearchIcon}
          className='search-icon'
          alt="search"
          onClick={()=>{searchMovies(searchTerm)}}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className='movies-list'>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie}/>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found!</h2>
          </div>
        )}

    </div>
  )
}

export default MovieLand;
import SearchBar from "./components/SearchBar.jsx";
import MovieCard from "./components/MovieCard.jsx";
import AuthPage from "./components/pages/AuthPage.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import SelectMovieCard from "./components/SelectMovieCard.jsx";
import Pagination from "./components/ui/Pagination.jsx";
import {Frown} from "lucide-react";


function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); //какая сейчас активная стр / меняе текущую стр

  const [totalPages, setTotalPages] = useState(0); //сколько всего стр приходит с api

  const [searchMovie, setSearchMovie] = useState("");

  const [notFoundMovies, setNotFoundMovies] = useState(false);

  const [genre, setGenre] = useState('all');


  // const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=' + import.meta.env.VITE_MOVIE_API_KEY;


  // useEffect(() => {
  //   //загружаем популрные фильмы
  //   const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&page=${currentPage}`;
  //
  //   fetch(BASE_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log('Data', data);
  //       setFavoriteMovies(data.results);//сохраняем список фильмов
  //       setTotalPages(data.total_pages);//сохраняем сколько всего стр
  //     })
  // }, [currentPage]); //когда стр меняется обновляем стр
  //
  // useEffect(() => {
  //   //загружаем фильмы по запросу
  //     if (searchMovie.trim() === "") return;
  //
  //     const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&query=${encodeURIComponent(searchMovie)}&page=${currentPage}`;
  //
  //   fetch(SEARCH_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       setFavoriteMovies(data.results);
  //       setTotalPages(data.total_pages)
  //     })
  // }, [searchMovie, currentPage])

 useEffect(() => {
   const fetchFavoriteMovies = async () => {
     const url = searchMovie.trim() === ''
     ? `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&page=${currentPage}`
     : `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&query=${encodeURIComponent(searchMovie)}&page=${currentPage}`

     try {
       const res = await fetch(url);
       const data = await res.json();

       if (data.results.length === 0) {
         setNotFoundMovies(true);
         console.log("No movies found.");
       } else  {
         setNotFoundMovies(false);
       }

       setFavoriteMovies(data.results);
       setTotalPages(data.total_pages)
     } catch (error) {
       console.log('error: ', error);
     }
   }

   fetchFavoriteMovies();
 }, [searchMovie, currentPage, genre]);


  return (
    <Router>
      <div className='bg-black min-h-screen'>
        <Routes>
          <Route path='/login' element={<AuthPage />} />
          <Route
            path='/'
            element={
              <div>
                <SearchBar onSearch={setSearchMovie} />
                <div className='w-full h-0.5 bg-gray-700'></div>

                <SelectMovieCard genre={genre} setGenre={setGenre} />

                <div
                  className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 place-items-center'>
                  {favoriteMovies && favoriteMovies.map((movie, index) => {

                    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

                    return (
                      <MovieCard
                        key={index}
                        title={movie.title}
                        imageUrl={imageUrl}
                        overview={movie.overview}
                        favoriteMovies={favoriteMovies}
                      />
                    )
                  })}
                </div>

                {notFoundMovies && favoriteMovies.length === 0 && (
                  <div className="text-red-600 flex gap-2 justify-center items-center font-bold text-center text-3xl mt-20">
                    No movies found
                    <Frown />
                  </div>
                )}

                <div>
                  {
                    favoriteMovies.length > 0 && totalPages > 1 && (
                      <Pagination
                        currentPage={currentPage}
                        onPageChange={setCurrentPage} //функция сообщает о смене стр
                        totalPages={totalPages}
                      />
                    )
                  }
                </div>


              </div>

            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
import SearchBar from "./components/SearchBar.jsx";
import MovieCard from "./components/MovieCard.jsx";
import AuthPage from "./components/pages/AuthPage.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import SelectMovieCard from "./components/SelectMovieCard.jsx";
import Pagination from "./components/ui/Pagination.jsx";


function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);



  // const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=' + import.meta.env.VITE_MOVIE_API_KEY;


  useEffect(() => {
    const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_MOVIE_API_KEY}&page=${currentPage}`;

    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Data', data);
        setFavoriteMovies(data.results);
      })
  }, []);


  return (
    <Router>
      <div className='bg-black min-h-screen'>
        <Routes>
          <Route path='/login' element={<AuthPage />} />
          <Route
            path='/'
            element={
              <div>
                <SearchBar/>
                <div className='w-full h-0.5 bg-gray-700'></div>

                <SelectMovieCard/>

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
                      />
                    )
                  })}
                </div>

                <div className=''>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={3}
                    onPageChange={(page) => {
                      setCurrentPage(page);
                    }}
                  />
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
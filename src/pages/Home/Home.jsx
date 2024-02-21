import { useState } from "react";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import Header from "../../components/Header/Header";
import MoviesCatalog from "../HomeComponents/MoviesCatalog/MoviesCatalog";
import { Pagination } from "../HomeComponents/Pagination/Pagination";
import { useMovies } from "../../hooks/useMovies";

export default function Home() {
  const [moviesPerPage, setMoviesPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("🚀 ~ Home ~ currentPage:", currentPage);

  const { movies, totalPages } = useMovies(currentPage);

  const nextPage = () => {
    setCurrentPage((prevStatePage) => prevStatePage + 1);
  };

  return (
    <>
      <Header />
      <FilterButtons />

      <MoviesCatalog
        movies={movies}
        moviesPerPage={moviesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalMovies={totalPages * moviesPerPage}
        setMoviesPerPage={setMoviesPerPage}
      />

      <Pagination
        moviesPerPage={moviesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalMovies={totalPages * moviesPerPage}
        totalPages={totalPages}
        setMoviesPerPage={setMoviesPerPage}
        nextPage={nextPage}
      />
    </>
  );
}

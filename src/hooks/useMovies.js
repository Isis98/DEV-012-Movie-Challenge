import { useState, useEffect } from "react";
import {API_BASE_URL, API_TOKEN} from '../constants/apiConstants'

const apiUrl = `${API_BASE_URL}/3/discover/movie`;

const useMovies = (page) => {
  const [movies, setMovies] = useState([]);
  console.log("🚀 ~ useMovies ~ movies:", movies);
  const [totalPages, setTotalPages] = useState(0);

  console.log(movies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allMovies = [];

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        };

        const response = await fetch(`${apiUrl}?page=${page}`, options);

        if (!response.ok) {
          throw new Error("Error fetching movies");
        }

        const movieData = await response.json();

        if (totalPages === 0) {
          setTotalPages(Math.min(movieData.total_pages, 20));
        }

        allMovies = [...allMovies, ...movieData.results];
        // currentPage++;

        setMovies(allMovies);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [page, totalPages]);

  return { movies, totalPages };
};

export { useMovies };

import React, { useState, useEffect } from "react";
import { API_BASE_URL, API_TOKEN } from "../constants/apiConstants";

const apiGenreUrl = `${API_BASE_URL}3/genre/movie/list?language=es`;
// Exportar los generos como un estado
const useGenres = () => {
  const [genres, setGenres] = useState([]);
    console.log("🚀 ~ useGenres ~ genres:", genres)

  // Crear los headers
  useEffect(() => {
    const headers = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    fetch(apiGenreUrl, headers)
      .then((response) => response.json())
      .then((response) => {
        setGenres(response.genres);
      })
      .catch((error) => console.error("Error:", error.message));
  }, []);

  return { genres };
};

export { useGenres };

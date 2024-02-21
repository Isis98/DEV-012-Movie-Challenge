import { useState } from "react";
import { useGenres } from "../../hooks/useGenres";
import { useOriginalLanguages } from "../../hooks/useLanguages";
import { filterMoviesByGenre } from "../../Utils/Filters";


export default function FilterButtons() {
  const { genres } = useGenres();
  
  const { languages } = useOriginalLanguages();

//   const filteredMoviesByGenre = filterMoviesByGenre(movies, value, id)

  

  return (
    <>
      <nav>
        <select data-id="genre" name="genre">
          <option disabled selected hidden>
            Género
          </option>
          {genres.map((genre) => {
            return <option value={genre.id}>{genre.name}</option>;
          })}
        </select>
        <select data-id="audience" name="audience">
          <option disabled selected hidden>
            Audiencia
          </option>
          <option value="adult">Adultos</option>
          <option value="child"> Niños</option>
        </select>
        <select data-id="language">
          <option disabled selected hidden>
            Idioma
          </option>
          {languages.map((language) => {
            return (
              <option value={language.iso_639_1}>
                {language.english_name}
              </option>
            );
          })}
        </select>
      </nav>
    </>
  );
}

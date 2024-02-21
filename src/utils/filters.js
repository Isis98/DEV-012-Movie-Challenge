// const movies =  [
//       {
//         "adult": false,
//         "backdrop_path": "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
//         "genre_ids": [
//           878,
//           28,
//           18
//         ],
//         "id": 933131,
//         "original_language": "ko",
//         "original_title": "황야",
//         "overview": "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
//         "popularity": 2655.112,
//         "poster_path": "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
//         "release_date": "2024-01-26",
//         "title": "Badland Hunters",
//         "video": false,
//         "vote_average": 6.728,
//         "vote_count": 340
//       },
//       {
//         "adult": false,
//         "backdrop_path": "/unvtbkgxh47BewQ8pENvdOdme0r.jpg",
//         "genre_ids": [
//           28,
//           18
//         ],
//         "id": 1212073,
//         "original_language": "de",
//         "original_title": "60 Minuten",
//         "overview": "Desperate to keep custody of his daughter, a mixed martial arts fighter abandons a big match and races across Berlin to attend her birthday party.",
//         "popularity": 1686.33,
//         "poster_path": "/aajCqg315CoJPu1NmgPCkbRjnl6.jpg",
//         "release_date": "2024-01-19",
//         "title": "Sixty Minutes",
//         "video": false,
//         "vote_average": 6.973,
//         "vote_count": 294
//       },
    
//     ]

// const filterBy=  28

//  Validar que el genero seleccionado este en el listado de genero de la peliculas

const filterMoviesByGenre = (movies, filterBy, genre_id) => {
  const filteredMoviesByGenre = movies.filter((movie) => {
    return movie[filterBy] === movie[genre_id];
  });

  return filteredMoviesByGenre;
};

export { filterMoviesByGenre };

const omdbapi  = {
  baseurl: 'http://omdbapi.com/',
  searchByTitle(movieTitle) {
    const url = `${this.baseurl}?s=${movieTitle}`;
    return ajax.getJSON(url).then(this.cleanSearchData);
  },
  cleanSearchData(response) {  // Take weird omdbapi ideas... and make it our own
    const cleanSearchResults = response.Search.map((movieEntry) => {
      const cleanMovieData = {
        poster: movieEntry.Poster,
        title: movieEntry.Title,
        year: movieEntry.Year,
        imdbID: movieEntry.imdbID,
      };
      return cleanMovieData;  // return to map
    });
    return cleanSearchResults;
  },
  getByID(imdbID) {
    const url = `${this.baseurl}?i=${imdbID}`;
    return ajax.getJSON(url).then(this.cleanMovieData.bind(this));
  },
  cleanMovieData(response) {
    console.log(this);
    const cleanedMovie = {
      title: response.Title,
      year: response.Year,
      rated: response.Rated,
      director: response.Director,
      writer: response.Writer,
      cast: response.Actors,
      plot: response.Plot,
      poster: response.Poster,
      score: response.imdbRating,
      type: response.Type,
    };
    cleanedMovie.cast = this.cleanCast(cleanedMovie.cast);
    return cleanedMovie;
  },
  cleanCast(cast) {
    if (cast) {
      return cast.split(',').map((name) => name.trim());
    }
    return null;
  },
};




//

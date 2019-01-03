console.log('Ready!');

const resultView = new SearchListView({
  results: [],
  el: document.querySelector('div.results'),
});

const movieView = new MovieView({
  el: document.querySelector('div.movie-details'),
});

resultView.el.addEventListener('movie-click', (e) => {
  const id = e.detail.imdbID;
  omdbapi.getByID(id).then((data) => {
    movieView.movie = data;
    movieView.render();
  });
});

const searchBarEl = document.querySelector('form.search-bar');
searchBarEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputEl = searchBarEl.querySelector('input[name="movie-title"]');
  const title = inputEl.value;
  omdbapi.searchByTitle(title).then((data) => {
    resultView.results = data;
    resultView.render();
  });
});

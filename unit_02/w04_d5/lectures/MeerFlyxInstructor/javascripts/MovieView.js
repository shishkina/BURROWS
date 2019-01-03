class MovieView {
  constructor({ movie, el }) {
    this.movie = movie;
    this.el = el;
  }
  render() {
    this.el.innerHTML = '';
    this.el.innerHTML = `
      <h1>${this.movie.title}</h1>
      <p>${this.movie.plot}</p>
      <span>${this.movie.rated}</span>
      <img src=${this.movie.poster} />
    `;
  }
}

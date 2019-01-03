class SearchListView {
  constructor({ results, el }) {
    this.el = el;
    this.results = results;
  }
  render() {
    this.el.innerHTML = '';
    let resultNode;
    this.results.forEach((result) => {
      resultNode = document.createElement('img');
      resultNode.setAttribute('class', 'movie');
      resultNode.addEventListener('click', (e) => {
        const clickEvent = new CustomEvent('movie-click', {
          detail: { imdbID: result.imdbID },
          bubbles: true,
        });
        resultNode.dispatchEvent(clickEvent);
      });
      resultNode.src = result.poster;
      this.el.appendChild(resultNode);
    });
  }
}

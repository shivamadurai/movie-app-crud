const store = require('./appStore');

const render = require('./render');

store.subscribe(() => {
  const g = render(store.getState());
  if(g) document.getElementById('searchResults').appendChild(g);
});

document.getElementById('searchTextInput').addEventListener('keypress', (event) => {
  const searchTerm = event.target.value;
  store.dispatch({
    type: 'SEARCH_TERM_CHANGED',
    searchTerm
  });
});

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=60e542f63b64928acbe2322bedf2e7a5&language=en-US&query=${store.getState().searchTerm}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(r => {
        store.dispatch({
          type: 'SEARCH_COMPLETE',
          searchResults: r
        });
    });
  store.dispatch({
    type: 'START_SEARCH'
  });
});

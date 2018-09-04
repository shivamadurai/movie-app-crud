const gallery = require('../gallery');

module.exports = state => {
  if(!state.searchResults) return null;

  if (state.searchResults.results.length) {
      state.searchResults.results.every((result) => {
          const title = result.title;
          const description = result.overview;
          const imageUrl = 'https://image.tmdb.org/t/p/w200' + result.poster_path;

          console.log('here', result);
          return gallery({
            title,
            description,
            imageUrl
          });
      });
  }

};

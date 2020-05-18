export default class Fetch {
  constructor(searchString) {
    this.key = 'c75f0ee4';
    this.baseUrl = 'https://www.omdbapi.com';
    this.searchString = searchString;
  }

  getUrl(parameters) {
    return `${this.baseUrl}?${parameters}&apiKey=${this.key}`;
  }

  async searchMovie(searchString, page = 1) {
    const url = this.getUrl(`s=${searchString}&page=${page}`);
    const data = await fetch(url).then(response => response.json()).then(result => {
      return this.getMovieInfo(result);
    });
    return {
      moviesList: data,
      totalResults: data.totalResults,
      searchString: searchString
    };
  }

  async getMovieInfo(dataList) {
    const moviesTasks = dataList.Search;
    const movieInfo = moviesTasks.map(async item => {
      await fetch(this.getUrl(`i=${item.imdbID}`)).then(response => response.json()).then(movieItem => {
        item = movieItem;
      });
      return item;
    });
    return Promise.all(movieInfo);
  }
}

// async searchMovie(searchString, page = 1) {
//   const url = this.getUrl(`s=${searchString}&page=${page}`);
//   const response = await fetch(url);
//   const data = await response.json();

//   if (data.Response !== 'True') {
//     return null;
//   }

//   const moviesTasks = data.Search.map((item) => {
//     return this.getMovieInfo(item.imdbID);
//   });

//   const movies = await Promise.all(moviesTasks);

//   return {
//     moviesList: movies,
//     totalResults: data.totalResults,
//     searchString: searchString
//   };
// }

// async getMovieInfo(movieId) {
//   const url = this.getUrl(`i=${movieId}`);
//   const resp = await fetch(url);
//   const movieInfo = await resp.json();

//   return movieInfo;

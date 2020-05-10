export default class Fetch {
  constructor(searchString) {
    this.key = '4f7b4a11';
    this.baseUrl = 'http://www.omdbapi.com';
    this.searchString = searchString;
  }

  getUrl(parameters) {
    return `${this.baseUrl}?${parameters}&apiKey=${this.key}`;
  }

  async searchMovie(searchString) {
    const url = this.getUrl(`s=${searchString}`);
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response !== 'True') {
      return null;
    }

    const moviesTasks = data.Search.map((item) => {
      return this.getMovieInfo(item.imdbID);
    });

    const movies = await Promise.all(moviesTasks);

    return movies;
  }

  async getMovieInfo(movieId) {
    const url = this.getUrl(`i=${movieId}`);
    const resp = await fetch(url);
    const movieInfo = await resp.json();

    return movieInfo;
  }

  async getMovie() {
    const url = `http://www.omdbapi.com?s=Transformers&apikey=${this.key}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
}

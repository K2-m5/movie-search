export default class Fetch {
  constructor() {
    this.key = '4f7b4a11';
  }

  async getMovie() {
    const url = `http://www.omdbapi.com/?t=Transformers&y=2007&apikey=${this.key}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  }
}

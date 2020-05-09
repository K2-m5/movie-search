import Components from '../Component/Component';

export default class Card extends Components {
  constructor(data) {
    super();

    this.data = data;
  }

  createCard() {
    const cardRoot = this.createElement('div', 'card', 'swiper-slide');

    this.headerCard = this.createElement('a', 'card-header');
    this.headerCard.textContent = `${this.data.Title}`;
    this.headerCard.href = `https://www.imdb.com/title/${this.data.imdbID}/videogallery/`;
    this.headerCard.target = '_blank';

    this.bodyCard = this.createElement('div', 'card-body');
    this.bodyCard.style.backgroundImage = `url(${this.data.Poster})`;

    this.footerCard = this.createElement('div', 'card-footer');
    this.footerCard.textContent = `${this.data.Year}`;

    this.imdbCard = this.createElement('div', 'card-imbd');
    this.imdbCard.append(this.createElement('span'), `${this.data.imdbRating}`);

    cardRoot.append(
      this.headerCard,
      this.bodyCard,
      this.footerCard,
      this.imdbCard
    );

    return cardRoot;
  }
}

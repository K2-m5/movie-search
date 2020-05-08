import Components from '../Component/Component';

export default class Card extends Components {
  constructor(data) {
    super();

    this.headerCard = this.createElement('a', 'card-header');
    this.data = data;
  }

  render() {
    const cardRoot = this.createElement('div', 'card', 'swiper-slide');

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

// function card() {
//   const cardRoot = document.createElement('div');
//   const headerCard = document.createElement('a');
//   const bodyCard = document.createElement('div');
//   const footerCard = document.createElement('div');
//   const imbdCard = document.createElement('dib');
//   const rating = document.createElement('span');

//   cardRoot.classList.add('card', 'swiper-slide');
//   headerCard.classList.add('card-header');
//   bodyCard.classList.add('card-body');
//   footerCard.classList.add('card-footer');
//   imbdCard.classList.add('card-imbd');

//   bodyCard.style.backgroundImage = 'url(https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg)';
//   footerCard.textContent = '2007';

//   cardRoot.appendChild(headerCard);
//   cardRoot.appendChild(bodyCard);
//   cardRoot.appendChild(footerCard);

//   cardRoot.appendChild(imbdCard);
//   imbdCard.appendChild(rating);

//   return cardRoot;
// }

// export { card as default };

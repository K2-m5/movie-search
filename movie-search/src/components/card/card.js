import Components from '../Component/Component';

export default class Card extends Components {
  constructor(data) {
    super();
    this.data = data;
    this.cardRoot = this.createElement('div', 'card', 'swiper-slide');
    this.headerCard = this.createElement('a', 'card-header');
    this.headerCard.textContent = `${this.data.Title}`;
    this.headerCard.href = `https://www.imdb.com/title/${this.data.imdbID}/videogallery/`;
    this.headerCard.target = '_blank';
    this.bodyCard = this.createElement('div', 'card-body');
    this.bodyCard.styles.backgroundImage = `url(${this.data.Poster})`;
    this.footerCard = this.createElement('div', 'card-footer');
    this.footerCard.textContent = `${this.data.Year}`;
    this.imbdCard = this.createElement('div', 'card-imbd');
    this.rating = this.createElement('span');
    this.footerCard.textContent = `${this.data.imdbRating}`;
    this.cardRoot.append(this.headerCard, this.bodyCard, this.footerCard, this.imbdCard.append(this.rating));
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

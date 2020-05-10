import { createElement } from '../Component/Component';

export default class Card {
  static createCardMarkup(card) {
    const cardRoot = createElement('div', 'card', 'swiper-slide');
    const headerCard = createElement('a', 'card-header');

    headerCard.textContent = `${card.Title}`;
    headerCard.href = `https://www.imdb.com/title/${card.imdbID}/videogallery/`;
    headerCard.target = '_blank';

    const bodyCard = createElement('div', 'card-body');
    bodyCard.style.backgroundImage = `url(${card.Poster})`;

    const footerCard = createElement('div', 'card-footer');
    footerCard.textContent = `${card.Year}`;

    const imdbCard = createElement('div', 'card-imbd');
    imdbCard.append(createElement('span'), `${card.imdbRating}`);

    cardRoot.append(
      headerCard,
      bodyCard,
      footerCard,
      imdbCard
    );

    return cardRoot;
  }
}

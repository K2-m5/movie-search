import './style.css';

import initializeMarkup from './View';


initializeMarkup();

// async function newFetch() {
//   await initializeMarkup();

//   const searchBtn = document.querySelector('.search-btn');

//   function searchMovie() {
//     const form = document.forms.search;
//     const movie = form[0].value.toString();
//     searchBtn.event = initializeMarkup(movie);
//   }

//   searchBtn.addEventListener('click', searchMovie);
// }


// const form = document.forms.search;



// const searchBtn = document.querySelector('.search-btn');
// const form = document.forms.search;
// const valueForm = form[0].value.toString();
// const cards = [];
// const wrapper = document.querySelector('.swiper-wrapper');

// async function setFetch() {
//   const fetchObj = new Fetch();
//   const data = await fetchObj.searchMovie(valueForm);

//   for (let i = 0; i < data.length; i += 1) {
//     cards.push(new Card(data[i]));
//   }

//   function render() {
//     for (let i = 0; i < cards.length; i += 1) {
//       wrapper.appendChild(cards[i].render());
//     }
//   }
//   render(data);
// }

// searchBtn.addEventListener('click', setFetch(valueForm));

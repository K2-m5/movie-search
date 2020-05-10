
import StructureHtml from './components/StructureHtml/StructureHtml';
import Fetch from './components/Fetch/Fetch';
import initSwiper from './Swiper';

// export default class View extends StructureHtml {
//   constructor(data) {
//     super(initSwiper());

//     this.data = data;
//   }
// }

export default async function initializeMarkup() {
  const fetchObj = new Fetch();
  const movie = 'Transformers';
  const data = await fetchObj.searchMovie(movie);
  console.log(data);

  const structureHTML = new StructureHtml(data);
  document.body.appendChild(structureHTML.createHeader());
  document.body.appendChild(structureHTML.createBody());
  document.body.appendChild(structureHTML.creatFooter());

  initSwiper();
}
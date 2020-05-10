import './style.css';

import StructureHtml from './components/StructureHtml/StructureHtml';
import Fetch from './components/Fetch/Fetch';

async function initializeMarkup() {
  const fetchObj = new Fetch();
  const movie = 'Transformers';
  const data = await fetchObj.searchMovie(movie);

  const structureHTML = new StructureHtml(document.body, data);

  structureHTML.createMarkup();
}

initializeMarkup();

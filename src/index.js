import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import {
  divBox,
  catFoto,
  catName,
  catTemperament,
  catInformation,
  span,
} from './js/one-cat-info';

const selectListCats = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorMassage = document.querySelector('.error');

selectListCats.addEventListener('change', () => {
  catInfo.innerHTML = '';
  renderOneCat();
});

errorMassage.hidden = true;

renderCats();
async function renderCats() {
  try {
    loader.hidden = false;
    selectListCats.hidden = true;
    const cats = await fetchBreeds();
    renderCatsInSelect(cats);
  } catch (error) {
    errorMassage.hidden = false;
    console.log(error);
  }
}

function renderCatsInSelect(catsArr) {
  const markup = catsArr
    .map(({ id, name }) => {
      return `<option value=${id}> ${name}
      </option>`;
    })
    .join('');
  selectListCats.innerHTML = markup;
  selectListCats.hidden = false;
  loader.hidden = true;
}

async function renderOneCat() {
  if (selectListCats.value) {
    loader.hidden = false;

    const cat = await fetchCatByBreed(selectListCats.value);
   
    catInfo.append(catFoto(cat));
    const div = divBox();
    catInfo.append(div);
    div.append(catName(cat));
    div.append(catInformation(cat));
    div.append(span());
    div.append(catTemperament(cat));

    loader.hidden = true;
  }
}

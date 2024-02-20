import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import {
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

selectListCats.addEventListener('click', renderOneCat());
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
  renderOneCat();
}

async function renderOneCat() {
  if (selectListCats.value) {
    loader.hidden = false;
    catInfo.hidden = true;
    const cat = await fetchCatByBreed(selectListCats.value);
    catInfo.append(catFoto(cat));
    catInfo.append(catName(cat));
    catInfo.append(span());
    catInfo.append(catTemperament(cat));
    catInfo.append(catInformation(cat));
    loader.hidden = true;
    catInfo.hidden = false;
  }
}

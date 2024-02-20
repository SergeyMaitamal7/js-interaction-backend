function catFoto(cat) {
  const catFoto = document.createElement('img');
  catFoto.src = cat[0].url;
  catFoto.width = 256;
  catFoto.alt = cat[0].breeds[0].name;
  return catFoto;
}

function catName(cat) {
  const catName = document.createElement('h1');
  catName.textContent = cat[0].breeds[0].name;
  return catName;
}
function catTemperament(cat) {
  const catTemperament = document.createElement('p');
  catTemperament.textContent = cat[0].breeds[0].temperament;
  return catTemperament;
}

function span() {
  const span = document.createElement('span');
  span.textContent = 'Temperament:';
  return span;
}

function catInformation(cat) {
  const catInformation = document.createElement('p');
  catInformation.textContent = cat[0].breeds[0].description;
  return catInformation;
}

export { catFoto, catName, catTemperament, catInformation, span };

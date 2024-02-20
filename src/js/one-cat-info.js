function divBox() {
  const div = document.createElement('div');
  div.className = 'box';
  return div;
}

function catFoto(cat) {
  const catFoto = document.createElement('img');
  catFoto.src = cat[0].url;
  catFoto.width = 480;
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

export { divBox, catFoto, catName, catTemperament, catInformation, span };

import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_WPfnDW7Iv9JYL57WoHFtJKhyAe7sdjGFCqKA2Gf3bdPwhhRq2MJhAaoxcqmDfbfd';

const url = 'https://api.thecatapi.com/v1/breeds';
const urlOneCat = 'https://api.thecatapi.com/v1/images/search?breed_ids=';

async function fetchBreeds() {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}

async function fetchCatByBreed(breedId) {
  const response = await axios.get(`${urlOneCat}${breedId}`);
  console.log(response.data);
  return response.data;
}

export { fetchBreeds, fetchCatByBreed };

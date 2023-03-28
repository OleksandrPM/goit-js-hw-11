export { fetchImages };

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34821763-cd0390e9b5fa3f24bbb43d369';

const requestParameters = {
  baseUrl: BASE_URL,
  key: API_KEY,
  q: function getSearchTerm(searchTerm) {
    return searchTerm;
  },
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function fetchImages(searchTerm) {
  const fetchUrl = buildFetchUrl(searchTerm);

  return fetch(fetchUrl).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function buildFetchUrl(searchTerm) {
  const { baseUrl, key, q, image_type, orientation, safesearch } =
    requestParameters;

  return `${baseUrl}?key=${key}&q=${q(
    searchTerm
  )}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`;
}

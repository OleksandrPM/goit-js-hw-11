import axios from 'axios';

import {
  showEmptyArrayMessadge,
  showEndCollectionMessadge,
  showTotalHitsMessadge,
} from './messadges';

export { getApiResponse, requestParameters };

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '34821763-cd0390e9b5fa3f24bbb43d369';

const requestParameters = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 40,
};

function getApiResponse(searchTerm) {
  requestParameters.q = searchTerm;

  return axios
    .get(BASE_URL, { params: requestParameters })
    .then(response => {
      const images = response.data;

      const pagesAmount = Math.ceil(
        images.totalHits / requestParameters.per_page
      );

      showInfo(images, pagesAmount);

      if (requestParameters.page === pagesAmount) {
        requestParameters.page = 1;
      } else {
        requestParameters.page += 1;
      }

      return images;
    })
    .catch(error => {
      console.log(error);
    });
}

function showInfo(images, pagesAmount) {
  if (images.totalHits === 0) {
    showEmptyArrayMessadge();
  } else if (requestParameters.page === 1) {
    showTotalHitsMessadge(images.totalHits);
  }
  if (requestParameters.page === pagesAmount) {
    showEndCollectionMessadge();
  }
}

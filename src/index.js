import './css/styles.css';
import { getApiResponse, requestParameters } from './js/fetchImages';
import { getGallery } from './js/gallery';

const searchFormEl = document.querySelector('.search-form');
const inputEl = searchFormEl.querySelector('input');
const searchBtnEl = searchFormEl.querySelector('button');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.load-more');

inputEl.addEventListener('input', onInputElInput);
searchBtnEl.addEventListener('click', onSearchBtnElClick);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

let searchText = '';

function onInputElInput() {
  requestParameters.page = 1;
  searchText = inputEl.value;
  searchBtnEl.disabled = false;
  loadMoreBtnEl.classList.add('visually-hidden');
}

function onSearchBtnElClick(event) {
  event.preventDefault();
  galleryEl.innerHTML = '';

  getApiResponse(searchText).then(images => {
    if (images.totalHits > requestParameters.per_page) {
      loadMoreBtnEl.classList.remove('visually-hidden');
    }
    searchBtnEl.disabled = true;

    getGallery(images.hits);
  });
}

function onLoadMoreBtnClick() {
  getApiResponse(searchText).then(images => {
    getGallery(images.hits);
    scrollGallerySmoozly(galleryEl);

    if (requestParameters.page === 1) {
      loadMoreBtnEl.classList.add('visually-hidden');
    }
  });
}

function scrollGallerySmoozly(galleryEl) {
  const { height: cardHeight } =
    galleryEl.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

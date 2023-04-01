import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export { getGallery };

const itemsInRow = 5;

const galleryEl = document.querySelector('.gallery');

let imageWidth = galleryEl.offsetWidth / (itemsInRow + 0.1 * (itemsInRow - 1));

function getGallery(images) {
  galleryEl.insertAdjacentHTML('beforeend', renderGallery(images));
  let lightbox = new SimpleLightbox('.gallery a');
}

function renderGallery(images) {
  return images.map(imageObject => renderImage(imageObject)).join('');
}

function renderImage(imageObject) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = imageObject;

  return `<a href="${largeImageURL}">
  <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" width="${imageWidth}"/>
  <div class="info">
  <p class="info-item"><b>Likes ${likes}</b></p>
  <p class="info-item"><b>Views ${views}</b></p>
  <p class="info-item"><b>Comments ${comments}</b></p>
  <p class="info-item"><b>Downloads ${downloads}</b></p>
  </div>
  </div>
  </a>`;
}

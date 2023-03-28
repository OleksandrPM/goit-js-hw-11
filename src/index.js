import './css/styles.css';
import { fetchImages } from './fetchImages';

const messadges = {
  emptyArrayMessadge:
    'Sorry, there are no images matching your search query. Please try again.',
  endCollectionMessadge:
    "We're sorry, but you've reached the end of search results.",

  totalHitsMessadge: function getTotalHitsMessadge(totalHits) {
    return `Hooray! We found ${totalHits} images.`;
  },
};

//delete
fetchImages('flowers').then(images => {
  console.log(images.totalHits, images.total);
  // if (countries.length === 1) {
  //   renderCountryInfo(countries, cardStylesProperties.svgHeight);
  //   styleCountryCard(countryInfoEl, cardStylesProperties);
  // } else if (countries.length > 1 && countries.length <= 10) {
  //   renderCountryList(countries, listStylesProperties.svgHeight);
  //   styleCountryList(countryListEl, listStylesProperties);
  // } else {
  //   Notify.info(toMuchMessage);
  // }
});

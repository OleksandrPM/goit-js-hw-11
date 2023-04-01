import { Notify } from 'notiflix';

export {
  showEmptyArrayMessadge,
  showEndCollectionMessadge,
  showTotalHitsMessadge,
};

const messadges = {
  emptyArrayMessadge:
    'Sorry, there are no images matching your search query. Please try again.',
  endCollectionMessadge:
    "We're sorry, but you've reached the end of search results.",

  totalHitsMessadge: function getTotalHitsMessadge(totalHits) {
    return `Hooray! We found ${totalHits} images.`;
  },
};

function showEmptyArrayMessadge() {
  Notify.failure(messadges.emptyArrayMessadge);
}

function showEndCollectionMessadge() {
  Notify.info(messadges.endCollectionMessadge);
}

function showTotalHitsMessadge(totalHits) {
  Notify.success(messadges.totalHitsMessadge(totalHits));
}

const sortAllElem = document.getElementById('sort-all');
const sortShortsElem = document.getElementById('sort-shorts');
const sortNotViewElem = document.getElementById('sort-!view');
const sortViewElem = document.getElementById('sort-view');
const sortVideoElem = document.getElementById('sort-video');
const sortRecentElem = document.getElementById('sort-uploaded-recently');
const sortLiveElem = document.getElementById('sort-live');

function sortSelector(selectedButton) {
  sortAllElem
    .classList.remove('active');
  sortShortsElem
    .classList.remove('active');
  sortNotViewElem
    .classList.remove('active');
  sortViewElem
    .classList.remove('active');
  sortVideoElem
    .classList.remove('active');
  sortRecentElem
    .classList.remove('active');
  sortLiveElem
    .classList.remove('active');

  selectedButton
    .classList.add('active');
}

sortAllElem.addEventListener('click', function() {sortSelector(sortAllElem)});
sortShortsElem.addEventListener('click', function() {sortSelector(sortShortsElem)});
sortNotViewElem.addEventListener('click', function() {sortSelector(sortNotViewElem)});
sortViewElem.addEventListener('click', function() {sortSelector(sortViewElem)});
sortVideoElem.addEventListener('click', function() {sortSelector(sortVideoElem)});
sortRecentElem.addEventListener('click', function() {sortSelector(sortRecentElem)});
sortLiveElem.addEventListener('click', function() {sortSelector(sortLiveElem)});


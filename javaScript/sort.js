const sortButtons = [
  document.getElementById('sort-all'),
  document.getElementById('sort-shorts'),
  document.getElementById('sort-!view'),
  document.getElementById('sort-view'),
  document.getElementById('sort-video'),
  document.getElementById('sort-uploaded-recently'),
  document.getElementById('sort-live')
]

function sortSelector(selectedButton) {
  for (let i = 0; i < sortButtons.length; i++) {
    sortButtons[i]
      .classList.remove('active');
  }

  selectedButton
    .classList.add('active');
}

for (let i = 0; i < sortButtons.length; i++) {
  sortButtons[i]
    .addEventListener('click', function() {sortSelector(sortButtons[i])});
}
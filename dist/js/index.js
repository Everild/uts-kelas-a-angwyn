const Open = document.querySelector('#open');
const OpenActive = document.querySelector('#openActive');

Open.addEventListener('click', function() {
    OpenActive.classList.toggle('open__active')
})

const Search = document.querySelector('#search');
const SearchActive = document.querySelector('#searchActive');

Search.addEventListener('click', function() {
    SearchActive.classList.toggle('search__active')
})



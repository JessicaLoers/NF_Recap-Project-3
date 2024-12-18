import CharacterCard from './components/CharacterCard/CharacterCard.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

const maxPage = 42;
let page = 1;
let searchQuery = '';

nextButton.addEventListener('click', () => {
  if (page >= maxPage) return;

  page++;
  fetchCharacters();
});

prevButton.addEventListener('click', () => {
  if (page >= maxPage) return;
  page--;
  fetchCharacters();
});

searchBar.addEventListener('submit', (event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters();
});

async function fetchCharacters() {
  const result = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await result.json();
  console.log(data);
  const characters = data.results;
  cardContainer.innerHTML = '';
  const cards = characters.map((character) => CharacterCard(character));
  cards.forEach((card) => cardContainer.append(card));
  pagination.textContent = `${page} / ${maxPage}`;
}

fetchCharacters();

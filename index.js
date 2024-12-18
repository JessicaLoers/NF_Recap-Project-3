import CharacterCard from './components/CharacterCard/CharacterCard.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = '';

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

async function fetchCharacters() {
  const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const data = await result.json();
  const characters = data.results;
  cardContainer.innerHTML = '';
  const cards = characters.map(CharacterCard);
  cards.forEach((card) => cardContainer.append(card));

  pagination.textContent = `${page} / ${maxPage}`;
}

fetchCharacters();

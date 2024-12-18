import CharacterCard from './components/CharacterCard/CharacterCard.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
// change the maxPage value.
const maxPage = 42;
//Use "let" because the value of "page" will change as the user navigates between pages
let page = 1;
const searchQuery = '';

// Add an event listener to the "Next" button for navigating to the next page
nextButton.addEventListener('click', () => {
  // If the current page is already the maximum page (42), do nothing
  if (page >= maxPage) return;

  // Increment the current page
  page++;
  // Fetch and display the characters for the new page
  fetchCharacters();
});

// Add an event listener to the "Previous" button for navigating to the next page
prevButton.addEventListener('click', () => {
  // If the current page is already the first page (1), do nothing
  if (page >= maxPage) return;
  // Decrement the current page
  page--;
  // Fetch and display the characters for the new page
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

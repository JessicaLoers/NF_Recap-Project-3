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
// Use "let" because the value of "searchQuery" will be updated with each new search input
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

// Add an event listener to handle the form submission for the search bar
searchBar.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the search query entered by the user from the form's input field
  searchQuery = event.target.elements.query.value;
  // !! Reset the page to 1 to start the search from the first page of results
  page = 1;
  // Fetch and display characters based on the new search query
  fetchCharacters();
});

async function fetchCharacters() {
  const result = await fetch(
    // The query string includes "searchQuery" to filter characters by the user's input, dynamically adjusting the API request
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await result.json();
  console.log(data);
  const characters = data.results;
  cardContainer.innerHTML = '';
  const cards = characters.map(CharacterCard);
  cards.forEach((card) => cardContainer.append(card));
  pagination.textContent = `${page} / ${maxPage}`;
}

fetchCharacters();

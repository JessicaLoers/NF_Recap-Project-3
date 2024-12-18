import CharacterCard from './components/CharacterCard/CharacterCard.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = '';

async function fetchCharacters() {
  // Fetch data from the Rick and Morty API for a specific page
  const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  // Parse the JSON response to get the data object
  const data = await result.json();
  // Extract the list of characters from the "results" field of the API response
  const characters = data.results;
  // Clear the cardContainer to remove any previous content before adding new character cards
  cardContainer.innerHTML = '';
  // Create cards for each character
  const cards = characters.map(CharacterCard);
  // Append each card to the container
  cards.forEach((card) => cardContainer.append(card));
}

fetchCharacters();

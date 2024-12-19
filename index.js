import CharacterCard from './components/CharacterCard/CharacterCard.js';
import NavButton from './components/NavButton/NavButton.js';
import NavPagination from './components/NavPagination/NavPagination.js';
import SearchBar from './components/SearchBar/SearchBar.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');
const navigation = document.querySelector('[data-js="navigation"]');

const maxPage = 42;
let page = 1;
let searchQuery = '';

// Create the "Previous" button by calling the NavButton component
// The first argument ('prev') is the text content of the button, which determines its label
// The second argument is a callback function (onClick) that defines what happens when the button is clicked (see comment in the NavButton.js)
const prevButton = NavButton('prev', () => {
  if (page <= 1) return;
  page--;
  fetchCharacters();
});

// Same as above but with different arguments: 'next' is the button content, () => {} is the callback function
const nextButton = NavButton('next', () => {
  if (page >= maxPage) return;
  page++;
  fetchCharacters();
});

// Create the "Pagination Display" by calling the NavButton component
const pagination = NavPagination();

const searchBar = SearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters();
});

// Don not forget to append the DOM Elements
navigation.append(prevButton, pagination, nextButton);
searchBarContainer.append(searchBar);

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
  /*  ⬆️
  Simple Solution  to update the pagination contente (page numbers) dynamically
   */

  // pagination.update(page, maxPage);
  /*  ⬆️
  Advanced Solution to update the pagination dynamically using the new method
  The "update" method is defined in NavPagination.js (see comments in NavPagination.js)
  It dynamically sets the text content of the pagination to display the current and total pages
   */
}

fetchCharacters();

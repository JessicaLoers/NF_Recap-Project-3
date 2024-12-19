export default function NavPagination() {
  const pagination = document.createElement('span');
  pagination.classList.add('navigation__pagination');

  pagination.textContent = '1 / 42';

  /*  ⬆️
  Simple Solution  to update the pagination contente (page numbers) dynamically
   */

  //   pagination.update = (currentPage, totalPages) => {
  //     pagination.textContent = `${currentPage} / ${totalPages}`;
  //   };

  /*  ⬆️ Advanced Solution to update the pagination content:
    Add a method to update the text dynamically, called in the "fetchCharacters" function
    Explanation:
    - The "pagination" element is an object because in JavaScript, DOM elements are represented as objects.
    - We use "pagination.update" to dynamically add a custom method to this object.
    - The method is created using bracket notation ("pagination.update") and can be called later, like any function in an object.
    - This approach allows us to encapsulate the logic for updating the text within the pagination itself, making the code cleaner and easier to maintain. */

  return pagination;
}

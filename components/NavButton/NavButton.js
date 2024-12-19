export default function NavButton(text, onClick) {
  // Create a button element
  const button = document.createElement('button');

  // Add a class to style the button
  button.classList.add('button');

  // Set the button's text content dynamically based on the "text" argument
  // This allows the button to have a label like "prev" or "next"
  button.textContent = text;

  // The "onClick" argument is passed when calling the NavButton function
  // It is a callback function that defines the specific behavior of the button when clicked (increment page / decrement page)
  button.addEventListener('click', onClick);

  // Return the button element so it can be appended to the DOM
  return button;
}

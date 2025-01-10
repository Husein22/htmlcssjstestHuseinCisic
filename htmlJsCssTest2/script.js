
// Reference to the book list container
const bookList = document.getElementById("book-list");

// Reference to the "Add Book" button
const addBookBtn = document.getElementById("add-book-btn");

// Event listener for the "Add Book" button
addBookBtn.addEventListener("click", () => {
  // Prompt the user for book details
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author name:");
  const description = prompt("Enter a short description:");

  // Validate input
  if (!title || !author || !description) {
    alert("All fields are required to add a book.");
    return;
  }

  // Create a new book card
  const bookCard = document.createElement("article");
  bookCard.className = "book-card";

  // Add content to the book card
  bookCard.innerHTML = `
    <h2>Title: ${title}</h2>
    <p><strong>Author:</strong> ${author}</p>
    <p><strong>Description:</strong> ${description}</p>
  `;

  // Append the new book card to the book list
  bookList.appendChild(bookCard);
});

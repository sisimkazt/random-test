import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites");

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  quoteElement.textContent = randomQuote.quote;
  quoteAuthorElement.textContent = randomQuote.author;

  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";
  toggleFavoriteBtn.hidden = false; // <- показываем кнопку
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;

  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  renderFavorites();
}

function renderFavorites() {
  favoritesContainer.innerHTML = ""; // очистка старого содержимого

  const favoriteQuotes = quotes.filter((q) => q.isFavorite);

  favoriteQuotes.forEach((q) => {
    const card = document.createElement("div");
    card.classList.add("favorite-card");

    const quoteText = document.createElement("p");
    quoteText.textContent = `"${q.quote}"`;

    const authorText = document.createElement("p");
    authorText.textContent = `${q.author}`;

    card.appendChild(quoteText);
    card.appendChild(authorText);
    favoritesContainer.appendChild(card);
  });
}

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

import quotes from "./quotes.js";
import DOM from "./dom.js";

// Переменная для хранения индекса текущей цитаты
let currentQuoteIndex = null;

// Инициализация
window.addEventListener("DOMContentLoaded", () => {
  hideFavoriteButton();

  DOM.generateBtn.addEventListener("click", handleGenerateQuote);
  DOM.toggleFavBtn.addEventListener("click", handleToggleFavorite);
});

// Обработчики
function handleGenerateQuote() {
  currentQuoteIndex = getRandomIndex();
  const quote = quotes[currentQuoteIndex];

  renderQuote(quote);
  updateFavoriteButton(quote.isFavorite);
  showFavoriteButton();
}

function handleToggleFavorite() {
  if (currentQuoteIndex === null) return;

  const quote = quotes[currentQuoteIndex];
  quote.isFavorite = !quote.isFavorite;

  updateFavoriteButton(quote.isFavorite);
  renderFavorites();
}

// Отображение цитаты
function renderQuote({ quote, author }) {
  DOM.quoteEl.textContent = quote;
  DOM.authorEl.textContent = author;
}

// Отображение кнопки избранного
function updateFavoriteButton(isFavorite) {
  DOM.starEl.textContent = isFavorite ? "★" : "☆";
  DOM.starEl.style.color = isFavorite ? "gold" : "gray";
  DOM.favText.textContent = isFavorite
    ? "Remove from favorites"
    : "Add to favorites";
}

// Создание и отображение карточек избранных цитат
function renderFavorites() {
  DOM.favoritesGrid.innerHTML = "";

  quotes
    .filter((q) => q.isFavorite)
    .forEach(({ quote, author }) => {
      const card = document.createElement("div");
      card.className = "favorite-card";
      card.innerHTML = `<p>"${quote}"</p><p>${author}</p>`;
      DOM.favoritesGrid.appendChild(card);
    });
}

// Вспомогательные функции
function getRandomIndex() {
  return Math.floor(Math.random() * quotes.length);
}

function hideFavoriteButton() {
  DOM.toggleFavBtn.classList.add("hidden");
}

function showFavoriteButton() {
  DOM.toggleFavBtn.classList.remove("hidden");
}

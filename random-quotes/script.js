const quotes = [
  {
    quote: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower",
    author: "Steve Jobs",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: "Steve Jobs",
  },
  {
    quote: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde",
  },
  {
    quote: "In the middle of difficulty lies opportunity",
    author: "Albert Einstein",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts",
    author: "Winston Churchill",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work",
    author: "Thomas Edison",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    quote: "Do what you can, with what you have, where you are",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "The best way to predict the future is to invent it",
    author: "Alan Kay",
  },
  {
    quote: "It always seems impossible until it's done",
    author: "Nelson Mandela",
  },
  {
    quote: "Don't count the days, make the days count",
    author: "Muhammad Ali",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else",
    author: "Booker T. Washington",
  },
  {
    quote: "Imagination is more important than knowledge",
    author: "Albert Einstein",
  },
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener("click", generateRandomQuote);

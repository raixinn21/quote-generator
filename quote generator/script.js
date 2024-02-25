const quotes = {
    all: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Stay hungry, stay foolish. - Steve Jobs",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. - Confucius"
    ],
    inspirational: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Stay hungry, stay foolish. - Steve Jobs",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. - Confucius"
    ],
    science: [
        "Science is the key to our future, and if you don't believe in science, then you're holding everybody back. - Bill Nye",
        "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. - Isaac Asimov",
        "Somewhere, something incredible is waiting to be known. - Carl Sagan",
        "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson",
        "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world. - Louis Pasteur"
    ]
};

let currentCategory = 'all';
let currentQuoteIndex = 0;

const quoteElement = document.getElementById('quote');
const categorySelect = document.getElementById('category');
const prevButton = document.getElementById('prev-btn');
const randomButton = document.getElementById('random-btn');
const nextButton = document.getElementById('next-btn');
const themeSwitch = document.getElementById('theme-switch');
const fontSizeRange = document.getElementById('font-size');

function updateQuote() {
    const categoryQuotes = quotes[currentCategory];
    if (!categoryQuotes || categoryQuotes.length === 0) {
        quoteElement.textContent = "No quotes available for this category.";
        return;
    }
    quoteElement.textContent = categoryQuotes[currentQuoteIndex];
}

function nextQuote() {
    const categoryQuotes = quotes[currentCategory];
    if (!categoryQuotes || categoryQuotes.length === 0) return;
    currentQuoteIndex = (currentQuoteIndex + 1) % categoryQuotes.length;
    updateQuote();
}

function prevQuote() {
    const categoryQuotes = quotes[currentCategory];
    if (!categoryQuotes || categoryQuotes.length === 0) return;
    currentQuoteIndex = (currentQuoteIndex - 1 + categoryQuotes.length) % categoryQuotes.length;
    updateQuote();
}

function randomQuote() {
    const categoryQuotes = quotes[currentCategory];
    if (!categoryQuotes || categoryQuotes.length === 0) return;
    currentQuoteIndex = Math.floor(Math.random() * categoryQuotes.length);
    updateQuote();
}

categorySelect.addEventListener('change', function() {
    currentCategory = this.value;
    currentQuoteIndex = 0;
    updateQuote();
});

prevButton.addEventListener('click', prevQuote);
randomButton.addEventListener('click', randomQuote);
nextButton.addEventListener('click', nextQuote);

themeSwitch.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

fontSizeRange.addEventListener('input', function() {
    quoteElement.style.fontSize = `${this.value}px`;
});

updateQuote();

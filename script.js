// selectors
const newQuoteBtn = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");
const twitter = document.getElementById("twitter");

// const hiddingTheLoader = () => {
//   quoteContainer.hidden = false;
//   loader.hidden = true;
// };
// const showingTheLoader = () => {
//   quoteContainer.hidden = true;
//   loader.hidden = false;
// };
const tweetQuote = () => {
  const twitterQuote = quote.innerText;
  const twitterAuthor = author.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterQuote} - ${twitterAuthor}`;
  window.open(twitterUrl, "_blank");
};
// connect with quote-Api
async function getQuote() {
//   showingTheLoader();
  const apiUrl = "http://api.quotable.io/random";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    quote.innerText = data.content;
    author.innerText = data.author;
    if (data.content.length > 100) {
      quote.classList.add("bigerthan30");
    } else {
      quote.classList.remove("bigerthan30");
    }
    // hiddingTheLoader();
  } catch (error) {
    console.log(error);
  }
}

// Event Listner
newQuoteBtn.addEventListener("click", getQuote);
twitter.addEventListener("click", tweetQuote);

// on Load
getQuote();

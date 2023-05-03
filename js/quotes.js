const quotes = [
  {
    quote:
      "There is rather joy in life in hardship." +
      "A voyage without wind waves, how monotonous! The more hardships I suffer, the more my heart beats.",
    author: "-Friedrich Wilhelm Nietzsche-",
  },
  {
    quote: "Taste what you left behind! After hardships, it is sweet.",
    author: "-Johann Wolfgang von Goethe-",
  },
  {
    quote: "What people commonly call fate is mostly their own stupidity.",
    author: "-Arthur Schopenhauer-",
  },
  {
    quote: "待人春風 持己秋霜",
    author: "-菜根譚-",
  },
  {
    quote: "내 감정의 주인은 나다.",
    author: "-JuJu-",
  },
  {
    quote: "Where does a thought go when it's forgotten?",
    author: "-Sigismund Schlomo Freud-",
  },
  {
    quote: "No great mind has ever existed without a touch of madness.",
    author: "-Aristotle-",
  },
  {
    quote: "Precision beats power and timing beats speed.",
    author: "-Conor The Notorious McGregor-",
  },
  {
    quote: "Veni, Vidi, Vici.",
    author: "-Gaius Julius Caesar-",
  },
  {
    quote: "True knowledge exists in knowing that you know nothing.",
    author: "-Socrates-",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const tdysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = tdysQuote.quote;
author.innerText = tdysQuote.author;

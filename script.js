/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
of Patricia: Quotes of Strong Women
******************************************/

let quotes = [
  {
    quote: "I believe in being strong when everything seems to be going wrong.",
    source: "Audrey Hepburn",
    citation: "UNICEF Audrey Hepburn Quotes, quotesgram.com/unicef-audrey-hepburn-quotes",
    year: "Accessed 29 Sept. 2015"
    category: 'Audrey Hepburn Advice' },
  },


   {
    quote:"And one day she discovered that she was fierce, and strong, and full of fire, and that not even she could hold herself back because her passion burned brighter than her fears.",
    source:"Mark Anthony",
    citation:"The Beautiful Truth",
    year:"August 10, 2016"
    category: 'Fierce Woman' },
  },



   {
    quote:"We need women who are so strong they can be gentle, so educated they can be humble, so fierce they can be compassionate, so passionate they can be rational, and so disciplined they can be free",
    source:"Kavita Ramdas",
    citation:"Having it all doesn't mean doing it all': Women's grad advice to women, by Eun Kyung Kim",
    year:"October 14, 2016"
    category: 'Strong Woman' },
  },



  {
    quote:"Women are like teabags. We don’t know our true strength until we are in hot water.",
    source:"Eleanor Roosevelt",
    citation:"https://www.brainyquote.com/quotes/eleanor_roosevelt_127143",
    year:"27 September 2019"
    category: 'A Woman in Hot Water' },
  },


  {
    quote:"She was a wild one; always stomping on eggshells that everyone else tip-toed on.",
    source:"Kaitlin Foster",
    citation:"#KaitlinFoster",
    year:"27 September 2019"
    category: 'Wild Woman' },
  },


  {
    quote:"She was powerful not because she wasn’t scared but because she went on so strongly, despite the fear.",
    source:"Atticus",
    citation:"https://www.goodreads.com/quotes/9449336",
    year:"21 September 2019"
    category: 'Powerful Woman' },
  }
];

///These were an array of objects representing "Strong Woman" Viewpoints; included are the quotes and source. "///
//////Extra Function: Added more properties that included citations. year and my choice of category./// 


function getRandomQuote() {
 let randomNumber = Math.floor(Math.random() * Math.floor(quotes.length));
 return quotes[randomNumber];
};

/// 1:2 Main functions; function getRandomQuote is the Code to get quote from array ///


function printQuote() {
  let printedQuote = getRandomQuote(quotes);
let HTML = '';
HTML += '<p class="quote">' + printedQuote.quote + '</p>' +
'<p class="source">' + printedQuote.source + ' ';
if (printedQuote.citation !== undefined) {
  HTML += '<span class="citation">' + printedQuote.citation + '</span>'
} 
if (printedQuote.year !== undefined) {
 HTML += '<span class="year">' + printedQuote.year +  ', </span>'
} 
if (printedQuote.location !== undefined) {
  HTML += '<span class="location">' + printedQuote.location + ', <span>'
} 
if (printedQuote.category !== undefined) {
  HTML += '<span class="category">' + printedQuote.category + ', <span>'
} 
  HTML += '</p>';
  document.getElementById('quote-box').innerHTML = HTML;
  
/// 2:2 Main Functions; function printQuote is the Code to print the quote, Note: will call the getRandomQuote function then print the quote to the page using the template provided ///


function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let rbgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  document.body.style.background = rbgColor;
  };
  
///Extra Function: function randomColor utilizes the quote change to randomly change the background color of the page, as well///
  
  
  const timerFunc =()=> {
  
///resets timer on click///
  
  clearInterval(window.timer);
  
///clears the function setInterval///
  
  printQuote();
  
///calls the function printQuote///
  
  window.timer = setInterval(printQuote, 3000);
  
///restarts the timer///
  
  };
  
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  document.getElementById('loadQuote').addEventListener("click", randomColor, false);
  
  ///Provided EventListener///
  
  

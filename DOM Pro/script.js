

// Variables
// let btn = document.querySelector('#new-quote');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person');

// const quotes = [{
//     person: 'Confucius',
//     quote: "Our lives begin to end the day we become silent about things that matter."
//   },
//   {
//     person: 'Martin Luther King, Jr.',
//     quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck."
//   },
//   {
//     person: 'Dalai Lama',
//     quote: "The journey of a thousand miles begins with one step."
//   },
//   {
//     person: 'Lao Tzu',
//     quote: "The only journey is the one within."
//   },
//   {
//     person: 'Albert Einstein',
//     quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
//   },
//   {
//     person: 'Maya Angelou',
//     quote: "You may not control all the events that happen to you, but you can decide not to be reduced by them."
//   },
//   {
//     person: 'Mark Twain',
//     quote: "The secret of getting ahead is getting started."
//   },
//   {
//     person: 'Helen Keller',
//     quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
//   },
//   {
//     person: 'Steve Jobs',
//     quote: "Your time is limited, don't waste it living someone else's life."
//   },
//   {
//     person: 'Aristotle',
//     quote: "It is during our darkest moments that we must focus to see the light."
//   },
//   ];

// // Add event listener for the "New Quote" button
// btn.addEventListener('click', function(){
//     let random = Math.floor(Math.random() * quotes.length);

//     quote.innerText = quotes[random].quote;
//     person.innerText = quotes[random].person;
// })
// Variables
// Variables
let btn = document.getElementById('new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
  person: 'Confucius',
  quote: "Our lives begin to end the day we become silent about things that matter."
},
{
  person: 'Martin Luther King, Jr.',
  quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck."
},
{
  person: 'Dalai Lama',
  quote: "The journey of a thousand miles begins with one step."
},
{
  person: 'Lao Tzu',
  quote: "The only journey is the one within."
},
{
  person: 'Albert Einstein',
  quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
},
{
  person: 'Maya Angelou',
  quote: "You may not control all the events that happen to you, but you can decide not to be reduced by them."
},
{
  person: 'Mark Twain',
  quote: "The secret of getting ahead is getting started."
},
{
  person: 'Helen Keller',
  quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."
},
{
  person: 'Steve Jobs',
  quote: "Your time is limited, don't waste it living someone else's life."
},
{
  person: 'Aristotle',
  quote: "It is during our darkest moments that we must focus to see the light."
}

  // ... Add more quotes as needed
];

// Add event listener for the "New Quote" button
btn.addEventListener('click', function () {
  console.log('Button Clicked'); // Check if the button click is detected

  let random = Math.floor(Math.random() * quotes.length);

  console.log('Random Quote:', quotes[random]); // Check if a random quote is selected

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

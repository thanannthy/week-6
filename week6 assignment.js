// Properties 
// define class 3 classes such as cards, players and decks
class Card {
    constructor(value,suit) {
        this.value = value;
        this.suit = suit
    }

}

class Player  {
    constructor(name,hand) {
        this.name = name; 
        this.hand = hand; 
    }
}

const chris = new Player ("Chris",[]);
const tha = new Player ("Tha",[]);


class Deck {
  constructor() {
    this.deck = [];
  }
    createDeck() {
      const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  
      for (let suit of suits) {
        for (let value of values) {
          this.deck.push(new Card(value, suit));
        }
      }
          // Here's a JavaScript implementation of the Durstenfeld shuffle, an optimized version of Fisher-Yates:

///* Randomize array in-place using Durstenfeld shuffle algorithm */
//function shuffleArray(array) {
   // for (var i = array.length - 1; i > 0; i--) {
      //  var j = Math.floor(Math.random() * (i + 1));
       // var temp = array[i];
       // array[i] = array[j];
    }
    shuffle() {
      for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
      }
    }
  }

  // player who hold 2 cards with the highest value wins. 
function playGame () { 
    const deck = new Deck();
  deck.createDeck();
  deck.shuffle();
  
  for (let i = 0; i < deck.deck.length; i += 2) {
    chris.hand.push(deck.deck[i]);
    tha.hand.push(deck.deck[i + 1]);
    
    }
    
// Function to calculate the score for a given hand


function calculateScore(hand) {
    let score = 0;
    for (const card of hand) {
      
      if (['J', 'Q', 'K'].includes(card.value)) {
        score += 0;
      } else if (card.value === 'A') {
        score += 1;
      } else {
        score += parseInt(card.value);
      }
    }
    return score;


  }
  console.log(chris.name + "'s hand:", chris.hand);
  console.log(tha.name + "'s hand:", tha.hand);
  

  // Calculate the scores for each player's hand
  chris.score = calculateScore(chris.hand);
  tha.score = calculateScore(tha.hand);
 

  console.log(chris.name + "'s score:", chris.score);
  console.log(tha.name + "'s score:", tha.score);

 // Determine the winner
 let winner;
 if (chris.score > tha.score) {
   winner = chris;
 } else if (chris.score < tha.score) {
   winner = tha;
 } else {
   winner = null; // Tie
 }

 if (winner) {
   console.log(`Winner: ${winner.name}`);
 } else {
   console.log("It's a tie!");
 }
}

playGame();

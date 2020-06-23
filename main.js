var cards = [];
var playerHand = [];

// populateDeck Function
var populateDeck = function () {
  var suits = ["C", "S", "D", "H"];
  var values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  var Card = function (value, suit, cardValue) {
    this.value = value;
    this.suit = suit;
    this.cardValue = cardValue;
  };
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      var cardValue;
      var newCard;
      if (
        values[j] === "A" ||
        values[j] === "Jack" ||
        values[j] === "Queen" ||
        values[j] === "King"
      ) {
        cardValue = 10;
      } else {
        cardValue = parseInt(values[j]);
      }

      newCard = new Card(values[j], suits[i], cardValue);

      cards.push(newCard);
    }
  }

  return cards;
};

// shuffleDeck function
var shuffleDeck = function (deck) {
  for (var i = 0; i < cards.length; i++) {
    var randomLocation1 = Math.floor(Math.random() * cards.length);
    var randomLocation2 = Math.floor(Math.random() * cards.length);
    var temp = deck[randomLocation1];
    deck[randomLocation1] = deck[randomLocation2];
    deck[randomLocation2] = temp;
  }

  return deck;
};

cards = shuffleDeck(populateDeck());
var dealCard = function () {
  card = cards.shift();
  return card;
};

// initialDeal Function - deals the player 2 cards from the shuffled deck
var initialDeal = function () {
  playerHand.push(dealCard());
  playerHand.push(dealCard());
};

var game = function () {
  initialDeal();
  alert(JSON.stringify(playerHand));

  if (playerHand[0].cardValue > 8) {
    alert("You have a high card");
  }

  console.log(cards.length);
};

game();

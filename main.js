var cards = [];
var playerHand = [];

// populateDeck Function
var populateDeck = function () {
  var suits = ["C", "S", "D", "H"];
  var values = [
    "Ace",
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
    this.cardValue = parseInt(cardValue);
  };
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      var cardValue;
      var newCard;
      if (
        values[j] === "Jack" ||
        values[j] === "Queen" ||
        values[j] === "King"
      ) {
        cardValue = 10;
      } else if (values[j] === "Ace") {
        cardValue = 11;
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

// newRoundPrompt Function
var newRoundPrompt = function () {
  playerHand = [];
  if (confirm("Do you want to play another round?")) {
    game();
  } else {
    alert("Thank you for playing.");
  }
};

// checkUserStatus Function
var checkUserStatus = function (totalValue) {
  if (
    (playerHand[0].value === "A" && playerHand[1].cardValue === 10) ||
    (playerHand[0].cardValue === 10 && playerHand[1].value === "A")
  ) {
    alert("BLACKJACK! YOU WON!");
    newRoundPrompt();
  } else if (totalValue === 21) {
    alert("You won!");
    newRoundPrompt();
  } else if (totalValue > 21) {
    alert("You bust!");
    newRoundPrompt();
  }
};

// displayHand Function
var displayHand = function () {
  var handString = "Your Hand: \n";
  var total = 0;

  playerHand.forEach(function (card) {
    handString += card.value + " of " + card.suit + ", \n";
    total += card.cardValue;
  });

  handString += "Total Points: " + total;

  alert(handString);
  checkUserStatus(total);
};

// userActionPrompt Function
var userActionPrompt = function () {
  var action = prompt("Enter 's' to stand, or 'h' to hit.");
  while (action === "h") {
    playerHand.push(dealCard());
    displayHand(playerHand);
    action = prompt("Enter 's' to stand, or 'h' to hit.");
  }
  newRoundPrompt();
};

// game function
var game = function () {
  initialDeal();
  displayHand(playerHand);
  userActionPrompt();
};

game();

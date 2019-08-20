 //memory game
// The card array
const cards = document.querySelectorAll('.card');
// module.exports = cards;
let openedCard = false;
let lockBoard = false; //second set of cards must not be opened unless the other have flipped back or are disabled
let cardOne, cardTwo;

//shuffles cards and display each card in the deck on game lockBoard
function shuffle() {
    cards.forEach(card => {
        let randomPlace = Math.floor(Math.random() * 12);
        card.style.order = randomPlace;
    });
    
 

    
};



//When the game starts or restarts, all cards should be shuffled and in position


(function startGame() {
    shuffle();
})();

// when the card is clicked on it must open unless its opened already

cards.forEach(card => card.addEventListener('click', openCard));

//Allows two cards to be clicked at a time and checks if they match
function openCard() {

    if (lockBoard) return;
    if (this === cardOne) return;

    this.classList.add('open');


    if (!openedCard) {
        openedCard = true;
        cardOne = this;

        return;
    }

    cardTwo = this;
    checkMatch();
    
};



//The function checks if the two flipped cards match
//If the cards match, the cards remain open, else they flip back and close
function checkMatch() {
    if (cardOne.dataset.framework === cardTwo.dataset.framework) {
        return disableCards();
    } else {
        closeCards();
    }
};



//This function prevents opened cards to be clickable
function disableCards() {
    cardOne.removeEventListener('click', openCard);
    cardTwo.removeEventListener('click', openCard);

    resetBoard();
};


// The set timeout for the unmatched cards to flip back and close is 700
function closeCards() {
    lockBoard = true;

    setTimeout(() => {
        cardOne.classList.remove('open');
        cardTwo.classList.remove('open');

        resetBoard();
    }, 700);
};

//if the two cards are opened, the board must be reset such that the unmatched cards are flipped back, 
//or the matched cards remain opened and the the event listener can be activated
function resetBoard() {
    [openedCard, lockBoard] = [false, false];
    [cardOne, cardTwo] = [null, null];
    let boardObj = {
        openedCard, lockBoard, cardOne, cardTwo
    };
    return boardObj;
};

module.exports = shuffle;
module.exports = openCard;
module.exports = checkMatch;
module.exports= disableCards;
module.exports = closeCards;
module.exports = setTimeout;
module.exports = resetBoard;
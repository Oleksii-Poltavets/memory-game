const cardsArray = [
    {
        name: 'cheeseburger',
        image: './images/cheeseburger.png'
    },
    {
        name: 'fries',
        image: './images/fries.png'
    },
    {
        name: 'hotdog',
        image: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: './images/milkshake.png'
    },
    {
        name: 'pizza',
        image: './images/pizza.png'
    },
    {
        name: 'cheeseburger',
        image: './images/cheeseburger.png'
    },
    {
        name: 'fries',
        image: './images/fries.png'
    },
    {
        name: 'hotdog',
        image: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: './images/milkshake.png'
    },
    {
        name: 'pizza',
        image: './images/pizza.png'
    },
]

cardsArray.sort(() => 0.5 - Math.random());

const board = document.querySelector('#grid');
const score = document.querySelector('#score');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for(let i = 0; i < cardsArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        board.append(card);
    }
}
createBoard();

function checkTheCards() {
    const cards = document.querySelectorAll('img');
    const cardOneId = cardsChosenIds[0];
    const cardTwoId = cardsChosenIds[1];
    if(cardsChosen[0] === cardsChosen[1] && cardOneId !== cardTwoId) {
        alert('It`s a match!');
        cards[cardOneId].setAttribute('src', './images/white.png');
        cards[cardTwoId].setAttribute('src', './images/white.png');
        cards[cardOneId].removeEventListener('click', flipCard);
        cards[cardTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else if (cardOneId === cardTwoId) {
        alert('You clicked the same card');
        cards[cardOneId].setAttribute('src', './images/blank.png');
    } else {
        cards[cardOneId].setAttribute('src', './images/blank.png');
        cards[cardTwoId].setAttribute('src', './images/blank.png');
    }
    score.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsWon.length === 6) {
        score.textContent = 'Congratulations, you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardsArray[cardId].image);
    if (cardsChosen.length === 2) {
        setTimeout(checkTheCards, 500);
    }
}
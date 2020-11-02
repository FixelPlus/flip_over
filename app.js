document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: '1',
        img: 'images/1.png'
    },
    {
        name: '1',
        img: 'images/1.png'
    },
    {
        name: '2',
        img: 'images/2.png'
    },
    {
        name: '2',
        img: 'images/2.png'
    },
    {
        name: '3',
        img: 'images/3.png'
    },
    {
        name: '3',
        img: 'images/3.png'
    },
    {
        name: '4',
        img: 'images/4.png'
    },
    {
        name: '4',
        img: 'images/4.png'
    },
    {
        name: '5',
        img: 'images/5.png'
    },
    {
        name: '5',
        img: 'images/5.png'
    },
    {
        name: '6',
        img: 'images/6.png'
    },
    {
        name: '6',
        img: 'images/6.png'
    }
]

// array variable calles a JS API method sort() with a specified f-on to make the sorting random
cardArray.sort( ()=> {
    return 0.5 - Math.random();
})

// these variables linked to the divs with corresponding classes
const grid = document.querySelector('.grid')

// this var is linked to the div with corresponding ID
const resultDisplay = document.querySelector('#result')

var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board
function createBoard(){
    for(let i = 0; i< cardArray.length; i++){
        var card = document.createElement('img') // similar to HTML tag <img>
        card.setAttribute('src', 'images/blank.png') // like in HTML <img data-id = "i">
        card.setAttribute('data-id', i) //basically it's the same but with JS we can make it dynamic
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

/** function createBoard2(){
    for(let i = 0; i < cardArray.length; i++){
        
    }
    }
} **/

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
       alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
       alert('Try again')
    }
    /** if( cards[optionOneId].getAttribute('src') === 'images/white.png' 
        || cards[optionTwoId].getAttribute('src') === 'images/white.png'){
            cards.removeEventListener('click', flipCard)
        } */
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if( cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congrats! You found them all'
    }
}
//flip your card 
function flipCard(){
    var cardId = this.getAttribute ('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2 ){
        setTimeout(checkForMatch, 100)
    }
}

createBoard()
})
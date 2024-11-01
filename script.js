const totalContainer = document.querySelector('.container');

// const cardsContainer = document.querySelector('.cards-container');
// console.log(cardsContainer);


const images = ["./images/ace of clubs.png", "./images/ace of diamonds.png", "./images/ace of hearts.png", "./images/ace of spades.png", "./images/king of clubs.png", "./images/king of diamonds.png", "./images/king of hearts.png", "./images/king of spades.png", "./images/queen of clubs.png", "./images/queen of diamonds.png", "./images/queen of hearts.png", "./images/queen of spades.png", "./images/jack of clubs.png", "./images/jack of diamonds.png", "./images/jack of hearts.png", "./images/joker of spades.png", "./images/2 hearts.png", "./images/3 of hearts.png", "./images/4 hearts.png", "./images/5 hearts.png", "./images/6 hearts.png","./images/7 hearts.png", "./images/8 of hearts.png", "./images/9 hearts.png", "./images/10 hearts.png", "./images/2 od diamonds.png", "./images/3 of diamonds.png", "./images/4 of diamonds.png", "./images/5 of diamonds.png", "./images/6 of diamonds.png", "./images/7 diamonds.png", "images/8 diamonds.png", "./images/9 diamonds.png", "./images/10 diamonds.png",
"./images/2 of clubs.png", "./images/3 of clubs.png", "./images/4 of clubs.png", "./images/5 of clubs.png", "./images//6 of clubs.png", "./images/7 of of clubs.png", "./images/8 of clubs.png", "./images/9 of clubs.png", "./images/10 of clubs.png","./images/2 of spades.png", "./images/3 of of spades.png", "./images/4 of spades.png", "./images/5 of spades.png", "./images/6 of spades.png", "./images/7 of spades.png", "./images/8 of spades.png", "./images/9 of spades.png", "./images/10 of spades.png"]


let remainingCards = [...images]
console.log(remainingCards);







function render() {
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    totalContainer.appendChild(cardsContainer);
    function shuffle() {
        cardsContainer.innerHTML = '';  // This removes all previous cards
        for (let index = 0; index < 4; index++) {

            // Check if we need to refill the deck
            if (remainingCards.length === 0) {
                remainingCards = [...images]; // Refill with all cards
                alert("Deck has been reshuffled!");
            }
    
            
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card'
        
            const img = document.createElement('img');
            remainingCards.sort(() => Math.random() - 0.5)
            console.log(images);
            console.log(remainingCards);
            img.src = remainingCards[index];
    
            // Use a regular expression to extract the card name from the src attribute
            const cardName = img.src.match(/\/([^\/]+)\.png$/)[1]  // Gets text between last / and .png
                .replace(/%20/g, ' ')  // Replace %20 with spaces
                .replace(/\bof\s+of\b/g, 'of')  // Fix double "of" in some paths
                .toLowerCase()  // Convert to lowercase
                .replace(/\b\w/g, c => c.toUpperCase());  // Capitalize first letter of each word
            img.alt = cardName;
    
    
            const paragraph = document.createElement('p');
            paragraph.textContent = cardName;
    
    
            cardContainer.appendChild(img);
            cardContainer.appendChild(paragraph);
    
            cardsContainer.appendChild(cardContainer);
    
            // Remove the used card from remainingCards
            remainingCards.splice(index, 1);
            console.log(`Remaining cards: ${remainingCards.length}`);
            
        }

    }
    shuffle();
        

    const dealBtn = document.createElement('button');
    dealBtn.className = 'deal-button';
    dealBtn.textContent = 'Deal';
    totalContainer.appendChild(dealBtn);

    dealBtn.addEventListener('click', shuffle)
}









window.addEventListener('load', render)

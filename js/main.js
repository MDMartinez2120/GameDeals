const gameCard = document.getElementById('gameCard')
const searchBar = document.getElementById('searchBar');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': CS_API_KEY,
        'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
    }
};

let games = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredGames = games.filter((e) => {
        return e.title.toLowerCase().includes(searchString)
    });
    displayGame(filteredGames);
    console.log(searchString)
});

function getGameInfo(title){
    fetch(`https://cheapshark-game-deals.p.rapidapi.com/games?id=700`, options)
        .then(response => response.json())
        .then(response => {

            const basicGameInfo = Object.entries(response)[0];
            const gameDeals = Object.entries(response)[1];

            const gameFilter = basicGameInfo.filter((e) => {
                return e.title && e.thumb && e.steamAppID;
            });

            let games = gameFilter.map(data => ({
                name: data.title.toUpperCase(),
                image: data.thumb,
                steam: data.steamAppID
            }))

            const dealFilter = gameDeals.filter((e) => {
                return e.price;
            })

            let gamePrice = dealFilter.map(data => ({
                price: data.price
            }))

            displayGame(games)
            console.log(basicGameInfo)
            console.log(gameFilter)
            console.log(gameDeals)
        });
}

const displayGame = (game) => {
    const gameHTMLString = game.map((gameData) => `
        <li class="card">
        <div id="imgBg"><img class="card-img" src = "${gameData.image}"/>
        </div>
            <hr>
            <h2 class="card-title">${gameData.name}</h2>
            <hr>
            <p class="card-subtitle">${gameData.steam}</p>
        </li>
    `).join('')
    gameCard.innerHTML = gameHTMLString;
}

const displayPrices = (gamePrice) => {
    const gamePriceHTMLString = gamePrice.map((gameData) => `
        <li class="card">
        </div>
            <hr>
            <h2 class="card-title">${gameData.price}</h2>
        </li>
    `).join('')
    gameCard.innerHTML = gamePriceHTMLString;
}



getGameInfo();
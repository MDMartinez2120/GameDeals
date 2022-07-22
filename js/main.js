const gamecard = document.getElementById('gameCard')
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
            const values = Object.values(response);
            const gameFilter = values.filter((e) => {
                return e.title && e.thumb && e.steamAppID;
            });

            let games = gameFilter.map(data => ({
                name: data.title.toUpperCase(),
                image: data.thumb,
                steam: data.steamAppID
            }))
            displayGame(games)
            console.log(values)
            console.log(gameFilter)
        });
}

const displayGame = (game) => {
    const gameHTMLString =  game.map((gameData) => `
        <li class="card">
        <div id="imgBg"><img class="card-img" src = "${gameData.image}"/>
        </div>
            <hr>
            <h2 class="card-title">${gameData.name}</h2>
            <hr>
            <p class="card-subtitle">${gameData.steam}</p>
        </li>
    `).join('')
    gamecard.innerHTML = gameHTMLString;
}

getGameInfo();
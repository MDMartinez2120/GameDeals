const gamecard = document.getElementById('gameCard')
const searchBar = document.getElementById('searchBar');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': CS_API_KEY,
        'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
    }
};


let objArray;

function getGameInfo(){
    // fetch('https://cheapshark-game-deals.p.rapidapi.com/games?id=612', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    fetch('https://cheapshark-game-deals.p.rapidapi.com/games?id=612', options)
        .then(response => response.json())
        .then(response => {
            const values = Object.values(response);
            const valuePosition = values.filter((e) => e.title === 'LEGO Batman' && e.thumb === "https://originassets.akamaized.net/origin-com-store-final-assets-prod/195763/142.0x200.0/1040463_MB_142x200_en_US_^_2017-09-08-15-21-36_d7034d41216b6dc201fb20e0cee37c1e66190a11.jpg");
            let games = valuePosition.map(data => ({
                name: data.title.toUpperCase(),
                image: data.thumb,
                steam: data.steamAppId
            }))
            displayGame(games)
            console.log(values)
            console.log(valuePosition)
        });



    // fetch('https://cheapshark-game-deals.p.rapidapi.com/games?id=612', options)
    //     .then(response => response.json())
    //     .then(response => Object.values(response))
    //     .then(results => {
    //         games = results.map(data => ({
    //             name: data.title.toUpperCase(),
    //             image: data.thumb,
    //             steam: data.steamAppId
    //         }))
    //         displayGame(games);
    //     });
}

const displayGame = (game) => {
    const gameHTMLString =  game.map((gameData) => `
        <li class="card">
        <div id="imgBg"><img class="card-img" src = "${gameData.image}"/>
        </div>
            <hr>
            <h2 class="card-title">${gameData.name}</h2>
            <hr>
            // <p class="card-subtitle">Type: ${gameData.steam}</p>
        </li>
    `).join('')
    gamecard.innerHTML = gameHTMLString;
}

getGameInfo();
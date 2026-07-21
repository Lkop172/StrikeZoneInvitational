console.log("Score entry loaded");

const teamSelect = document.getElementById("team");
const playersDiv = document.getElementById("players");


// Load teams into dropdown

tournament.teams.forEach(function(team, index) {

    let option = document.createElement("option");

    option.value = index;
    option.textContent = team.name;

    teamSelect.appendChild(option);

});


// Display bowlers when team changes

function loadPlayers() {

    playersDiv.innerHTML = "";

    let team = tournament.teams[teamSelect.value];


    team.bowlers.forEach(function(player) {

        let row = document.createElement("div");

        row.innerHTML = `
            <p>${player}</p>

            <input 
                type="number"
                placeholder="Frame 1"
            >

            <input 
                type="number"
                placeholder="Frame 2"
            >

            <input 
                type="number"
                placeholder="Frame 3"
            >

            <input 
                type="number"
                placeholder="Frame 4"
            >
        `;

        playersDiv.appendChild(row);

    });

}


teamSelect.addEventListener(
    "change",
    loadPlayers
);


// Load first team automatically

loadPlayers();

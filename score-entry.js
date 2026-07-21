console.log("Score entry loaded");

const teamSelect = document.getElementById("team");
const playersDiv = document.getElementById("players");
const submitButton = document.getElementById("submitScores");


// Load teams

tournament.teams.forEach(function(team, index) {

    let option = document.createElement("option");

    option.value = index;
    option.textContent = team.name;

    teamSelect.appendChild(option);

});



// Create bowler inputs

function loadPlayers() {

    playersDiv.innerHTML = "";

    let team = tournament.teams[teamSelect.value];


    team.bowlers.forEach(function(player) {

        let row = document.createElement("div");

        row.className = "score-row";

        row.innerHTML = `

            <p>${player}</p>

            <input class="frame" type="number" placeholder="F1">
            <input class="frame" type="number" placeholder="F2">
            <input class="frame" type="number" placeholder="F3">
            <input class="frame" type="number" placeholder="F4">

        `;


        playersDiv.appendChild(row);

    });

}



teamSelect.addEventListener(
    "change",
    loadPlayers
);



loadPlayers();



// Submit scores

submitButton.addEventListener("click", function() {

    let team = tournament.teams[teamSelect.value];


    let rows = document.querySelectorAll(".score-row");


    let results = [];


    rows.forEach(function(row, index) {

        let inputs = row.querySelectorAll(".frame");


        let total = 0;


        inputs.forEach(function(input) {

            total += Number(input.value) || 0;

        });


        results.push({

            player: team.bowlers[index],

            pins: total

        });


    });



    console.log("Submitted scores:", results);


    const selectedRound = document.getElementById("round").value;

    team.rounds[selectedRound] = results;


// Save tournament

localStorage.setItem(
    "tournamentData",
    JSON.stringify(tournament)
);


alert("Scores saved!");


console.log(
    "Saved:",
    JSON.parse(localStorage.getItem("tournamentData"))
);
});

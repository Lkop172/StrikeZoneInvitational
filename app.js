console.log("Tournament app loaded");


const standings = document.getElementById("teamStandings");


// Calculate prelim standings

let rankedTeams = tournament.teams.map(function(team) {

    let scores = team.rounds.prelims.map(function(player) {
        return player.pins;
    });


    // Highest scores first

    scores.sort(function(a, b) {
        return b - a;
    });


    // Only top 4 bowlers count

    let teamTotal = scores
        .slice(0, 4)
        .reduce(function(total, score) {
            return total + score;
        }, 0);


    return {
        name: team.name,
        pins: teamTotal
    };

});


// Rank teams

rankedTeams.sort(function(a, b) {
    return b.pins - a.pins;
});


// Display standings

rankedTeams.forEach(function(team, index) {

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>${team.pins}</td>
    `;

    standings.appendChild(row);

});


// Create semifinal bracket

const bracket = document.getElementById("bracket");


let semifinal1 = `
    <div class="match">
        <p>#1 ${rankedTeams[0].name}</p>
        <strong>VS</strong>
        <p>#4 ${rankedTeams[3].name}</p>
    </div>
`;


let semifinal2 = `
    <div class="match">
        <p>#2 ${rankedTeams[1].name}</p>
        <strong>VS</strong>
        <p>#3 ${rankedTeams[2].name}</p>
    </div>
`;


bracket.innerHTML = semifinal1 + semifinal2;

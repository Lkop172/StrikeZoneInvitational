console.log("App loaded");

const standings = document.getElementById("teamStandings");

tournament.teams.forEach(function(team, index) {

    // Get all bowler scores
    let scores = team.scores.map(function(player) {
        return player.pins;
    });

    // Sort highest to lowest
    scores.sort(function(a, b) {
        return b - a;
    });

    // Drop the lowest score
    let countedScores = scores.slice(0, 4);

    // Add the top four scores
    let teamTotal = countedScores.reduce(function(total, score) {
        return total + score;
    }, 0);


    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>${teamTotal}</td>
    `;

    standings.appendChild(row);

});

console.log("Tournament loaded");

const standings = document.getElementById("teamStandings");


// Calculate team totals

let rankedTeams = tournament.teams.map(function(team) {

    let scores = team.scores.map(function(player) {
        return player.pins;
    });

    scores.sort(function(a, b) {
        return b - a;
    });

    let total = scores.slice(0,4).reduce(function(sum, score) {
        return sum + score;
    },0);

    return {
        name: team.name,
        pins: total
    };

});


// Sort highest score first

rankedTeams.sort(function(a,b){
    return b.pins - a.pins;
});


// Display standings

rankedTeams.forEach(function(team,index){

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>${team.pins}</td>
    `;

    standings.appendChild(row);

});

console.log("App loaded");

console.log(tournament);

const standings = document.getElementById("teamStandings");

console.log(standings);

tournament.teams.forEach(function(team, index) {

    console.log(team.name);

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>--</td>
    `;

    standings.appendChild(row);

});

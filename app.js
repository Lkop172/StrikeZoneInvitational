console.log("App loaded");

const standings = document.getElementById("teamStandings");

console.log("Standings table:", standings);

tournament.teams.forEach(function(team, index) {

    console.log("Adding:", team.name);

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>--</td>
    `;

    standings.appendChild(row);

});

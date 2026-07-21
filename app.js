console.log(tournament);


// Create team standings table

const standings = document.getElementById("teamStandings");


tournament.teams.forEach(function(team, index) {

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.name}</td>
        <td>--</td>
    `;

    standings.appendChild(row);

});

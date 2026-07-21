console.log(tournament);

console.log("Tournament Name:");
console.log(tournament.name);

console.log("Teams:");

tournament.teams.forEach(function(team) {
    console.log(team.name);
});

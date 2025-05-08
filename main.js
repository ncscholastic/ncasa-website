
const standings = [
    { school: "School A", points: 120 },
    { school: "School B", points: 105 },
    { school: "School C", points: 92 }
];
function displayStandings() {
    const container = document.getElementById('standings');
    if (!container) return;
    standings.sort((a, b) => b.points - a.points);
    standings.forEach(team => {
        const div = document.createElement('div');
        div.textContent = `${team.school}: ${team.points} points`;
        container.appendChild(div);
    });
}
document.addEventListener('DOMContentLoaded', displayStandings);

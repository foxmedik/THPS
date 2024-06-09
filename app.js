document.getElementById('runForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const playerName = document.getElementById('playerName').value;
    const levelName = document.getElementById('levelName').value;
    const runTime = document.getElementById('runTime').value;
    
    const runData = {
        player: playerName,
        level: levelName,
        time: runTime
    };
    
    let runs = localStorage.getItem('runs');
    runs = runs ? JSON.parse(runs) : [];
    
    runs.push(runData);
    localStorage.setItem('runs', JSON.stringify(runs));
    
    displayRuns();
});

function displayRuns() {
    const runTimesList = document.getElementById('runTimesList');
    runTimesList.innerHTML = '';
    
    let runs = localStorage.getItem('runs');
    runs = runs ? JSON.parse(runs) : [];
    
    runs.forEach(run => {
        const li = document.createElement('li');
        li.textContent = `${run.player} - ${run.level}: ${run.time} seconds`;
        runTimesList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', displayRuns);

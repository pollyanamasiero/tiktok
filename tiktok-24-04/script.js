let cliques = 0;
function contador () {
    cliques++;
    console.log(cliques);
    document.getElementById('resposta').textContent = 'Cliques: ' + cliques;
}

function zerador() {
    cliques = 0;
    document.getElementById('resposta').textContent = 'Cliques: ' + cliques;
}
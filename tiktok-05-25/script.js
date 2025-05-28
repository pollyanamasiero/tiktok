function startProgress() {
    let progressBar = document.getElementById('progressBar');
    let width = 0;
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 30); // velocidade da animação
}
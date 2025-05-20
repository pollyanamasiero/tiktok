let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;
let pausado = false;

const display = document.getElementById("display");
const btnIniciar = document.getElementById("iniciar");
const btnPausar = document.getElementById("pausar");
const btnResetar = document.getElementById("resetar");

function atualizarDisplay() {
  const formatar = (valor) => valor.toString().padStart(2, "0");
  display.textContent = `${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)}`;
}

function cronometro() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  atualizarDisplay();
}

btnIniciar.addEventListener("click", () => {
  if (!pausado) {
    intervalo = setInterval(cronometro, 1000);
    pausado = true;
  }
});

btnPausar.addEventListener("click", () => {
  clearInterval(intervalo);
  pausado = false;
});

btnResetar.addEventListener("click", () => {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  pausado = false;
  atualizarDisplay();
});

atualizarDisplay(); // garantir que o display inicie com 00:00:00

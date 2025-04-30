const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificar() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const resultado = document.getElementById("resultado");

  if (palpite === numeroSecreto) {
    resultado.textContent = "🎉 Parabéns! Você acertou!";
  } else {
    resultado.textContent = "❌ Errou! Tente novamente.";
  }
}

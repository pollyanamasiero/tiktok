const input = document.getElementById('numeroInput');
const button = document.getElementById('verificarBtn');
const resultado = document.getElementById('resultado');

button.addEventListener('click', () => {
  const numero = parseInt(input.value);

  if (isNaN(numero)) {
    resultado.textContent = 'Por favor, digite um número válido.';
    resultado.style.color = 'red';
    return;
  }

  if (numero % 2 === 0) {
    resultado.textContent = `O número ${numero} é PAR.`;
    resultado.style.color = 'green';
  } else {
    resultado.textContent = `O número ${numero} é ÍMPAR.`;
    resultado.style.color = 'purple';
  }
});

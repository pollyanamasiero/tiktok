const form = document.querySelector('form');
const pesoInput = document.querySelector('#peso');
const alturaInput = document.querySelector('#altura');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = 'Por favor, preencha os dados corretamente.';
    resultado.style.color = '#b91c1c';
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 24.9) {
    classificacao = 'Peso normal';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
  } else if (imc < 34.9) {
    classificacao = 'Obesidade grau 1';
  } else if (imc < 39.9) {
    classificacao = 'Obesidade grau 2';
  } else {
    classificacao = 'Obesidade grau 3';
  }

  resultado.style.color = '#1e40af';
  resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
});

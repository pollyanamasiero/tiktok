function verificar() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
  
    if (numero === '') {
      resultado.textContent = 'Digite um número!';
    } else if (numero % 2 === 0) {
      resultado.textContent = 'É par!';
    } else {
      resultado.textContent = 'É ímpar!';
    }
  }
  
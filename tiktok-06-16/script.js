const inputTemp = document.getElementById("temp");
const scaleSelect = document.getElementById("scale");
const resultado = document.getElementById("resultado");
const converterBtn = document.getElementById("converterBtn");

converterBtn.addEventListener("click", () => {
  const temp = parseFloat(inputTemp.value);
  const scale = scaleSelect.value;

  if (isNaN(temp)) {
    resultado.textContent = "Por favor, insira uma temperatura válida.";
    return;
  }

  let converted, unidade;

  if (scale === "fahrenheit") {
    converted = (temp * 9) / 5 + 32;
    unidade = "°F";
  } else {
    converted = ((temp - 32) * 5) / 9;
    unidade = "°C";
  }

  resultado.textContent = `Temperatura convertida: ${converted.toFixed(2)} ${unidade}`;
});

function adicionarTarefa() {
    const input = document.getElementById("novaTarefa");
    const lista = document.getElementById("listaTarefas");
    const texto = input.value.trim();
  
    if (texto !== "") {
      const id = "tarefa" + Date.now(); // cria ID único
      const li = document.createElement("li");
  
      li.innerHTML = `
        <input type="checkbox" id="${id}" />
        <label for="${id}">${texto}</label>
      `;
  
      lista.appendChild(li);
      input.value = "";
    }
  }
  
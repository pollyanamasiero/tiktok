function validarSenha() {
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (senha.length < 8) {
    mensagem.textContent = "A senha deve ter pelo menos 8 caracteres.";
    mensagem.style.color = "red";
  } else if (!/[A-Z]/.test(senha)) {
    mensagem.textContent = "A senha deve conter pelo menos uma letra maiúscula.";
    mensagem.style.color = "red";
  } else if (!/[0-9]/.test(senha)) {
    mensagem.textContent = "A senha deve conter pelo menos um número.";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Senha válida!";
    mensagem.style.color = "green";
  }
}

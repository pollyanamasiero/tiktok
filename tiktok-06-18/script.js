const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

function generatePassword(length = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
  let password = "";

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * chars.length);
    password += chars[random];
  }

  return password;
}

generateBtn.addEventListener("click", () => {
  const newPassword = generatePassword();
  passwordField.value = newPassword;
});

copyBtn.addEventListener("click", () => {
  passwordField.select();
  document.execCommand("copy");
  alert("Senha copiada!");
});

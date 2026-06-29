const USUARIO_CORRECTO = "tutito";
const PASSWORD_CORRECTO = "evangeline";

const USUARIO_YO = "yo";
const PASSWORD_YO = "1703";

function login() {
  const usuario = document.getElementById("usuario").value.toLowerCase().trim();
  const password = document.getElementById("password").value;

  if (usuario === USUARIO_CORRECTO && password === PASSWORD_CORRECTO) {
    localStorage.setItem("usuarioActual", "tutito");
    window.location.href = "cartas.html";
  } 
  else if (usuario === USUARIO_YO && password === PASSWORD_YO) {
    localStorage.setItem("usuarioActual", "yo");
    window.location.href = "cartas.html";
  } 
  else {
    alert("Usuario o contraseña incorrecta 💔");
  }
}

// Enter en contraseña
document.addEventListener('DOMContentLoaded', () => {
  const passInput = document.getElementById("password");
  if (passInput) {
    passInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") login();
    });
  }
});
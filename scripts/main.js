//const miTitulo = document.querySelector("h1");
//miTitulo.textContent = "¡Hola mundo!";

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    if(!miNombre) {
        estableceNombreUsuario();
      } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Mozilla is cool, ' + myName;
      }
     }

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
  }

miBoton.onclick = function () {
    estableceNombreUsuario();
  };
  
  
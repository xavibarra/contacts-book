const alphabetContainer = document.getElementById("alphabet-container");

for (let i = 65; i <= 90; i++) {
  // Códigos ASCII de A a Z
  const letter = String.fromCharCode(i);

  const option = document.createElement("div");
  option.className = "option";

  const input = document.createElement("input");
  input.className = "input";
  input.type = "radio";
  input.name = "btn";
  input.value = `option${i - 64}`; // Valor opcional

  const btn = document.createElement("div");
  btn.className = "btn";

  const span = document.createElement("span");
  span.className = "span";
  span.textContent = letter;

  btn.appendChild(span);
  option.appendChild(input);
  option.appendChild(btn);
  alphabetContainer.appendChild(option);
}

// ------------------------------------------------------------------------
let contacts = [];
let timerId;

// Genera 10 contactos ficticios
for (let i = 1; i <= 10; i++) {
  const nombre = `Contacto${i}`;
  const apellido = `Apellido${i}`;
  const telefono = `555-123-${i.toString().padStart(2, "0")}`;
  const email = `contacto${i}@example.com`;
  const foto = `https://via.placeholder.com/150?text=Foto${i}`;

  const newContact = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
    foto: foto,
  };

  // Agrega el nuevo contacto al array contactos
  contacts.push(newContact);
}
console.log(contacts);

//--------------------------------//

function mostrarResultados(resultados) {
  const resultadosContainer = document.getElementById("resultados");

  // Vacía el contenedor de resultados antes de mostrar los nuevos resultados
  resultadosContainer.innerHTML = "";

  if (resultados.length === 0) {
    resultadosContainer.textContent = "No se encontraron resultados.";
  } else {
    // Itera sobre los resultados y crea un elemento de lista para cada uno
    resultados.forEach((contact) => {
      //Crear div targeta
      const tarjetaContacto = document.createElement("div");
      tarjetaContacto.classList.add("flip-card");

      //Creacion y relleno de targeta
      tarjetaContacto.innerHTML = `
      <div class="flip-card-inner">
      <div class="flip-card-front">
        <p class="title">${contact.nombre}</p>
        <img
          class="contact-img"
          src="${contact.foto}"
          alt="imagen de contacto"
        />
      </div>
      <div class="flip-card-back">
        <div>
          <p class="title">${contact.nombre}</p>
          <p class="title last-name">${contact.apellido}</p>
        </div>
        <p>${contact.telefono}</p>
        <p>${contact.email}</p>
      </div>
    </div>
      `;
      // Agrega la tarjeta de contacto al contenedor de resultados
      resultadosContainer.appendChild(tarjetaContacto);
    });
  }
}
// ---------------------------------//

// Obtén el botón de búsqueda y el campo de entrada
const btnBuscar = document.getElementById("btnBuscar");
const inputBusqueda = document.getElementById("inputBusqueda");

// Función para realizar la búsqueda después de un retraso
function buscarDespuesDeRetraso() {
  // Cancela el temporizador si ya está en ejecución
  clearTimeout(timerId);

  // Inicia un nuevo temporizador para realizar la búsqueda después de 1 segundo
  timerId = setTimeout(() => {
    const valorBusqueda = document
      .getElementById("inputBusqueda")
      .value.toLowerCase();
    const resultados = [];

    // Itera sobre cada contacto en el array de contactos
    contacts.forEach((contacto) => {
      // Verifica si el valor de búsqueda coincide con algún campo del contacto
      if (
        contacto.nombre.toLowerCase().includes(valorBusqueda) ||
        contacto.apellido.toLowerCase().includes(valorBusqueda) ||
        contacto.telefono.toLowerCase().includes(valorBusqueda) ||
        contacto.email.toLowerCase().includes(valorBusqueda)
      ) {
        resultados.push(contacto);
      }
    });

    // Muestra los resultados en la interfaz de usuario
    mostrarResultados(resultados);
  }, 500); // Espera 1 segundo antes de realizar la búsqueda
}

// Escucha el evento input en el campo de búsqueda
document
  .getElementById("inputBusqueda")
  .addEventListener("input", buscarDespuesDeRetraso);

// ------------------------------------------------------------------------

const botonadd = document.getElementById("submitAdd");
const contactForm = document.getElementById("formAdd");
const containerForm = document.getElementById("containerForm");

function addContact(event) {
  event.preventDefault(); //Prevenimos las acciones predefinidas del submit. Evitamos recargar la página y enviar los datos a un servidor

  //Obtenemos todos los valores del formulario
  const nombre = document.getElementById("firstName").value.toLowerCase();
  const apellido = document.getElementById("lastName").value.toLowerCase();
  const telefono = document.getElementById("phone").value;
  const email = document.getElementById("email").value.toLowerCase();
  const foto = document.getElementById("photo").value;

  //Creando el nuevo contacto con los valores introducidos
  const newContact = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
    foto: foto,
  };

  //Agregamos el objeto del contacto a la array
  contacts.push(newContact);

  // Limpia el formulario
  formAdd.reset();

  containerForm.classList.add("hidden");
  console.log(contacts);
}
// Escucha el evento submit del formulario
contactForm.addEventListener("submit", addContact);

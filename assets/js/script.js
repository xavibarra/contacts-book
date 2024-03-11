const alphabetContainer = document.getElementById("alphabet-container");
const valorBusqueda = document
  .getElementById("inputBusqueda")
  .value.toLowerCase();

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
const contacts = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "555-1234",
    email: "juan.perez@example.com",
    foto: "https://picsum.photos/215",
  },
  {
    nombre: "María",
    apellido: "Gómez",
    telefono: "555-5678",
    email: "maria.gomez@example.com",
    foto: "https://picsum.photos/214",
  },
  {
    nombre: "Carlos",
    apellido: "Rodríguez",
    telefono: "555-9876",
    email: "carlos.rodriguez@example.com",
    foto: "https://picsum.photos/213",
  },
  {
    nombre: "Ana",
    apellido: "López",
    telefono: "555-4321",
    email: "ana.lopez@example.com",
    foto: "https://picsum.photos/212",
  },
  {
    nombre: "Pedro",
    apellido: "Martínez",
    telefono: "555-8765",
    email: "pedro.martinez@example.com",
    foto: "https://picsum.photos/211",
  },
  {
    nombre: "Laura",
    apellido: "García",
    telefono: "555-1111",
    email: "laura.garcia@example.com",
    foto: "https://picsum.photos/210",
  },
  {
    nombre: "Antonio",
    apellido: "Sánchez",
    telefono: "555-2222",
    email: "antonio.sanchez@example.com",
    foto: "https://picsum.photos/209",
  },
  {
    nombre: "Isabel",
    apellido: "Fernández",
    telefono: "555-3333",
    email: "isabel.fernandez@example.com",
    foto: "https://picsum.photos/208",
  },
  {
    nombre: "Miguel",
    apellido: "Díaz",
    telefono: "555-4444",
    email: "miguel.diaz@example.com",
    foto: "https://picsum.photos/207",
  },
  {
    nombre: "Carmen",
    apellido: "Ruiz",
    telefono: "555-5555",
    email: "carmen.ruiz@example.com",
    foto: "https://picsum.photos/206",
  },
  {
    nombre: "Javier",
    apellido: "Gutiérrez",
    telefono: "555-6666",
    email: "javier.gutierrez@example.com",
    foto: "https://picsum.photos/205",
  },
  {
    nombre: "Sofía",
    apellido: "Hernández",
    telefono: "555-7777",
    email: "sofia.hernandez@example.com",
    foto: "https://picsum.photos/204",
  },
  {
    nombre: "Alejandro",
    apellido: "Jiménez",
    telefono: "555-8888",
    email: "alejandro.jimenez@example.com",
    foto: "https://picsum.photos/203",
  },
  {
    nombre: "Elena",
    apellido: "Torres",
    telefono: "555-9999",
    email: "elena.torres@example.com",
    foto: "https://picsum.photos/202",
  },
  {
    nombre: "Francisco",
    apellido: "Navarro",
    telefono: "555-0000",
    email: "francisco.navarro@example.com",
    foto: "https://picsum.photos/201",
  },
];
let timerId;

console.log(contacts);

//--------------------------------//

const newContact = () => {
  containerForm.classList.remove("hidden");
};
const closeContainer = () => {
  containerForm.classList.add("hidden");
};

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
          <p class="title">${contact.apellido}</p>
        </div>
        <p>${contact.telefono}</p>
        <p class="email">${contact.email}</p>
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
  // Obtén el valor de búsqueda
  const valorBusqueda = document
    .getElementById("inputBusqueda")
    .value.trim()
    .toLowerCase();

  // Si hay un valor de búsqueda, inicia el temporizador
  if (valorBusqueda !== "") {
    // Cancela el temporizador si ya está en ejecución
    clearTimeout(timerId);

    // Inicia un nuevo temporizador para realizar la búsqueda después de 1 segundo
    timerId = setTimeout(() => {
      realizarBusqueda(valorBusqueda);
    }, 500); // Espera 1 segundo antes de realizar la búsqueda
  } else {
    // Si no hay valor de búsqueda, muestra todos los resultados
    mostrarResultados(contacts);
  }
}

// Función para realizar la búsqueda y mostrar los resultados
function realizarBusqueda(valorBusqueda) {
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
}
setTimeout(() => {
  realizarBusqueda(valorBusqueda);
}, 500);

// Escucha el evento input en el campo de búsqueda
document
  .getElementById("inputBusqueda")
  .addEventListener("input", buscarDespuesDeRetraso);

// ------------------------------------------------------------------------

const botonadd = document.getElementById("submitAdd");
const contactForm = document.getElementById("formAdd");
const containerForm = document.getElementById("containerForm");

botonadd.addEventListener("submit", realizarBusqueda());

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

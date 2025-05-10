const mensajes = [
  "Feliz Día de la Madre, Mamá 💐",
    "Gracias por cada abrazo, cada consejo y cada comida deliciosa 🍲",
    "Eres mi ejemplo de amor, fuerza y ternura 🫶",
    "Aunque a veces no lo diga, te amo con todo mi corazón ❤️",
    "¡Hoy celebramos a la mejor mamá del mundo! 🎉",
    "Gracias por estar conmigo siempre,\nen los buenos momentos y en los no tan agradables,\npor apoyarme en mis fortalezas y también en mis debilidades.\nGracias por ser mi mamá. 💖",
    "Fin de la carta. ¡Te amo mucho! 💖"
];

let index = 0;
const mensajeDiv = document.getElementById("mensaje");

mensajeDiv.addEventListener("click", () => {
  index++;
  if (index < mensajes.length) {
    mensajeDiv.textContent = mensajes[index];
  } else {
    mensajeDiv.style.display = "none";
    mostrarCollage();
  }
});

function mostrarCollage() {
  const collage = document.getElementById("collage");
  const musica = document.getElementById("musica");

  // Mostrar el collage y reproducir música
  collage.style.display = "flex";
  musica.play();

  // Lista de imágenes
  const imagenes = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg"
  ];

  // Añadir imágenes al collage con animación y evento click
  imagenes.forEach((nombre, index) => {
    const img = document.createElement("img");
    img.src = `image/${nombre}`;
    img.style.animationDelay = `${index * 0.2}s`;
    img.classList.add("imagen-collage"); // Clase para estilo
    img.addEventListener("click", () => abrirModal(img.src));
    collage.appendChild(img);
  });
}


function abrirModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modalImg.src = src;
  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Punto 1.
const tematicaElegida = "Navidad";
const nuevoSpan = document.createElement("span");
nuevoSpan.textContent = `Temática elegida: ${tematicaElegida}`;
const elementoH1 = document.getElementById("tituloPagina");
elementoH1.appendChild(nuevoSpan);

// Punto 2.
const colores = ["#D20918", "#DCE6EF", "#007A42", "#F9FAFB"];
const paletaDiv = document.querySelector(".paleta");

colores.forEach((color, index) => {
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = color;

    const colorName = document.createElement("p");
    colorName.textContent = obtenerNombreColor(index + 1);
    colorBox.appendChild(colorName);

    paletaDiv.appendChild(colorBox);
});
function obtenerNombreColor(posicion) {
    switch (posicion) {
        case 1:
            return "#d20918";
        case 2:
            return "#DCE6EF";
        case 3:
            return "#007A42";
        case 4:
            return "#F9FAFB";
        default:
            return "";
    }
}

const paletaParrafo = document.createElement("p");
const enlace = document.createElement("a");
enlace.href = "https://www.portablenorthpole.com/es";
enlace.target = "_blank";
enlace.textContent = "Portable North Pole";
paletaParrafo.appendChild(
    document.createTextNode("Paleta de colores basada en ")
);
paletaParrafo.appendChild(enlace);
paletaParrafo.appendChild(document.createTextNode("."));
const footer = document.querySelector("footer");
footer.appendChild(paletaParrafo);

// Punto 3.
const colorSelect = document.getElementById("colorSelect");
colores.forEach((color, index) => {
    const opcion = document.createElement("option");
    opcion.value = color;
    opcion.textContent = `Color ${index + 1}`;
    opcion.style.backgroundColor = color;
    colorSelect.appendChild(opcion);
});

// Punto 4.
const modoSuperpuestoCheckbox =
    document.getElementById("modoSuperpuesto");
const contenedorCirculos =
    document.getElementById("contenedorCirculos");

// Punto 5.
colores.forEach((color, index) => {
    const circulo = document.createElement("div");
    circulo.className = "circulo";
    circulo.id = `circulo${index + 1}`;
    contenedorCirculos.appendChild(circulo);
});

const circulos = document.querySelectorAll(".circulo");

const cambiarColorCirculo = (event) => {
    const colorSeleccionado = colorSelect.value;
    const circuloClicado = event.target;

    circuloClicado.style.backgroundColor = colorSeleccionado;

    if (modoSuperpuestoCheckbox.checked) {
        const circuloAnterior =
            circuloClicado.previousElementSibling;
        while (circuloAnterior) {
            circuloAnterior.style.backgroundColor =
                colorSeleccionado;
            circuloAnterior =
                circuloAnterior.previousElementSibling;
        }

        const circuloSiguiente = circuloClicado.nextElementSibling;
        while (circuloSiguiente) {
            circuloSiguiente.style.backgroundColor =
                colorSeleccionado;
            circuloSiguiente = circuloSiguiente.nextElementSibling;
        }
    }
};

circulos.forEach((circulo) => {
    circulo.addEventListener("click", cambiarColorCirculo);
});

// Punto 6.
const resetButton = document.getElementById("resetButton");

const resetearColores = () => {
    circulos.forEach((circulo) => {
        circulo.style.backgroundColor = "";
    });
};

resetButton.addEventListener("click", resetearColores);

// Punto 8.
const deshabilitarElementos = () => {
    circulos.forEach((circulo) => {
        circulo.style.backgroundColor = "lightgray";
        circulo.removeEventListener("click", cambiarColorCirculo);
    });

    colorSelect.disabled = true;
    modoSuperpuestoCheckbox.disabled = true;
};

const habilitarElementos = () => {
    circulos.forEach((circulo) => {
        circulo.style.backgroundColor = "";
        circulo.addEventListener("click", cambiarColorCirculo);
    });

    colorSelect.disabled = false;
    modoSuperpuestoCheckbox.disabled = false;
};

const ajustarVentana = () => {
    if (window.innerWidth < 500) {
        deshabilitarElementos();
    } else {
        habilitarElementos();
    }
};

window.addEventListener("resize", ajustarVentana);

ajustarVentana();
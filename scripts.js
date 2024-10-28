document.addEventListener("DOMContentLoaded", function () {
    const temasList = document.getElementById("temas-list");
    const descripcion = document.getElementById("descripcion");

    temasList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const text = event.target.getAttribute("data-description");
            descripcion.textContent = text;

            // Añadir o quitar la clase para mostrar la descripción
            if (descripcion.classList.contains("descripcion-visible")) {
                descripcion.classList.remove("descripcion-visible");
                setTimeout(() => {
                    descripcion.classList.add("descripcion-visible");
                }, 10);
            } else {
                descripcion.classList.add("descripcion-visible");
            }
        }
    });
});


const boton = document.getElementById("miBoton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
    mensaje.textContent = "¡Gracias por visitar TecnoMóvil!";
    timer = setTimeout(function() {
        mensaje.textContent = "";
    }, 3000);
});
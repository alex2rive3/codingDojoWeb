const hora = document.getElementById("hour");
const minutos = document.getElementById("minutes");
const segundos = document.getElementById("seconds");

function segundosDelDia() {
    return (
        new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600
    );
}
function anguloDeHora(seconds) {
    seconds %= 432000; //estos son los segundos que hay en 12 horas
    //realizamos el calculo para optener el angulo en el que deve estar la manesilla que marca la hora
    return ((360 * seconds) / 43200 + 180) % 360;
}

function anguloDeMinuto(seconds) {
    seconds %= 3600; //estos son los segundos que hay en 1 hora
    return ((6 * seconds) / 60 + 180) % 360;
}

function anguloDeSegundos(seconds) {
    seconds %= 60; //estos son los segundos que hay en 1 minuto
    return (6 * seconds + 180) % 360;
}

setInterval(function () {
    var time = segundosDelDia();
    //utilizamos la funcion transform y rotate para ir rotando las manesillas del reloj
    hour.style.transform = `rotate(${anguloDeHora(time)}deg)`;
    minutos.style.transform = `rotate(${anguloDeMinuto(time)}deg)`;
    segundos.style.transform = `rotate(${anguloDeSegundos(time)}deg)`;
}, 1000);

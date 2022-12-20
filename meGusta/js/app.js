let aux1 = 0;
let aux2 = 0;
let aux3 = 0;
function likes(el) {
    console.log(el);
    let id = el.id; //obtenemos el id del boton precionado
    let like = "like" + id; //determinamos el id del span para asi sumar el contador
    let likeId = document.getElementById(like).id; // obtenemos el id del span
    //de acuerdo al id del boton hacemos el incremento del contador cada uno aparte para que nos se crucen los datos de la cuenta
    if (id === "1") {
        aux1 = aux1 + 1;
        document.getElementById(likeId).innerText = aux1;
    }
    if (id === "2") {
        aux2 = aux2 + 1;
        document.getElementById(likeId).innerText = aux2;
    }
    if (id === "3") {
        aux3 = aux3 + 1;
        document.getElementById(likeId).innerText = aux3;
    }
}

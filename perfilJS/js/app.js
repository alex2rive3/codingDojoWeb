function editar() {
    document.getElementById("userName").innerText = "Rolando Rolin";
}
function aceptar(el) {
    let valorRequest = parseInt(document.getElementById("request").textContent);
    let valorConection = parseInt(
        document.getElementById("conection").textContent
    );

    document.getElementById("request").innerText = valorRequest - 1;
    document.getElementById("conection").innerText = valorConection + 1;
    el.parentNode.style.display = "none";
}
function rechazar(e) {
    let valorRequest = parseInt(document.getElementById("request").textContent);
    document.getElementById("request").innerText = valorRequest - 1;
    e.parentNode.style.display = "none";
}

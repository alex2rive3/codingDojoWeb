function reporte() {
    alert("Loading weather report");
}
function accept() {
    let el = document.getElementsByClassName("cookie");
    el[0].style.display = "none";
}
function farenheit() {
    let x = document.getElementById("temperatura").value;
    console.log(x);
    if (x === "F") {
        let min = document.getElementsByClassName("min");
        let max = document.getElementsByClassName("max");
        for (let i = 0; i < min.length; i++) {
            let aux = parseInt(min[i].textContent);
            min[i].textContent = Math.round((aux * 9) / 5 + 32) + "°";
        }
        for (let i = 0; i < max.length; i++) {
            let ax = parseInt(max[i].textContent);
            max[i].textContent = Math.round((ax * 9) / 5 + 32) + "°";
        }
    } else {
        let min = document.getElementsByClassName("min");
        let max = document.getElementsByClassName("max");
        for (let i = 0; i < min.length; i++) {
            let aux = parseInt(min[i].textContent);
            min[i].textContent = Math.round(((aux - 32) * 5) / 9) + "°";
        }
        for (let i = 0; i < max.length; i++) {
            let ax = parseInt(max[i].textContent);
            max[i].textContent = Math.round(((ax - 32) * 5) / 9) + "°";
        }
    }
}

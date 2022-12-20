function siempreHambriento(arr) {
    let bandera = 0;
    arr.forEach((el) => {
        if (el === "comida") {
            console.log("delicioso");
            bandera += 1;
        }
    });
    if (bandera === 0) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

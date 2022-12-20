//prediccion 1
function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//var               //// valor
////////////////////////////////////////////
//auntContactInfo  //// ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345] 
//                 ////
//                 ////
//                 ////
//console = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]

//prediccion 2
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}

//var               //// valor
////////////////////////////////////////////
//produce          //// ["manzanas", "naranjas"] 
//frozen           //// ["brócoli", "helado"]
//frozen           //// ["brócoli", "helado", "croqueta de papa"]
//                 ////
//console = ["brócoli", "helado", "croqueta de papa"]


//predicion 3
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

//var               //// valor
////////////////////////////////////////////
//movieLibrary     //// ["Bambi", "E.T.", "Toy Story"] 
//movieLibrary     //// ["Bambi", "E.T.", "Toy Story", "Zoro"] 
//movieLibrary     //// ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]
//                 ////
//console = ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]
function pizzaOven(tipoCorteza, tipoSalsa, queso, salsas) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.queso = queso;
    pizza.salsas = salsas;
    return pizza;
}
var pizzaChicago = pizzaOven(
    "estilo Chicago",
    "tradicional",
    ["mozzarella", "parmesano"],
    ["pepperoni", "salchicha"]
);
var pizzaArtesanal = pizzaOven(
    "lanzada a mano",
    "marinara",
    ["mozzarella", "feta"],
    ["champiñones", "aceitunas", "cebollas"]
);

var especialCarnivora = pizzaOven(
    "lanzada a mano",
    "tradicional",
    ["mozzarela", "parmezano"],
    ["peceto", "peproni"]
);
var cuatroQueso = pizzaOven(
    "borde Relleno",
    "tradicional",
    ["mozarela", "gorgonzola", "fontina", "parmesano"],
    ["acitunas", "cebollas"]
);

console.log(pizzaChicago);
console.log(pizzaArtesanal);
console.log(especialCarnivora);
console.log(cuatroQueso);

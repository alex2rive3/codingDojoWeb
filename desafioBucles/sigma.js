let suma = 0;
let num = "";
for (let i = 1; i <= 100; i++) {
    suma = suma + i;
    num = num + ` + ${i}`;
}
console.log(num.slice(3));
console.log(suma);

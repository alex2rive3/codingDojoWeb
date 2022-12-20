let product = 1;
let num = "";
for (let i = 1; i <= 12; i++) {
    product = product * i;
    num = num + ` + ${i}`;
}
console.log(num.slice(3));
console.log(product);

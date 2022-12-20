function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    let aux = 0;
    var fibArr = [0, 1];
    // tu código aquí
    if (n > 0 && n != 1) {
        for (let i = 1; i <= n - 2; i++) {
            //le ponemos menos 2 porque los dos primero elementos ya los tenemos cargados porque no podran variar
            aux = fibArr[i - 1] + fibArr[i];
            fibArr.push(aux);
        }
        return fibArr;
    } else {
        return (fibArr = [0]);
    }
}
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

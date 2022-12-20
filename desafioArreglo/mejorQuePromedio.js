function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    arr.forEach((el) => {
        sum = sum + el;
    });
    let promedio = 0;
    promedio = sum / arr.length;
    var count = 0;
    // cuenmta cuánmtas variables son mayores que el promedio
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > promedio) {
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

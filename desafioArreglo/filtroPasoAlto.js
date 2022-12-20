function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    arr.forEach((el) => {
        if (el > cutoff) {
            filteredArr.push(el);
        }
    });
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

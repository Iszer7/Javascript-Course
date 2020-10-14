function simpleArraySum(ar) {
    let totalSuma = 0;

    for (let elemento of ar) {
        totalSuma += elemento;
    }
    return totalSuma;
}

console.log(simpleArraySum([1,2,3,4]));
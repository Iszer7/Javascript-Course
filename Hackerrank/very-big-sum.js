function aVeryBigSum(ar) {
    let sumaTotal = 0;

    for (let i=0; i < ar.length; i++) {
        sumaTotal += ar[i];
    }
    return sumaTotal;
}

console.log(aVeryBigSum([1,2,4,5,6,7]));
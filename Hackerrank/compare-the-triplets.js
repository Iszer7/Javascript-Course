function compareTriplets(a, b) {
    let alicePoints = 0, bobPoints = 0;

    for (let i=0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePoints++;
        } else if(a[i] != b[i]) {
            bobPoints++;
        }
    }
    return [alicePoints, bobPoints];
}

/*MEJOR
function compareTriplets(a, b) {
    let points = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points[0]++;
        } else if (a[i] != b[i]) {
            points[1]++;
        }
    }
    return points;
}
*/

console.log(compareTriplets(10, 7));
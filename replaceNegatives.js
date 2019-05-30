function replaceNegatives(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            array[i] = "Dojo";
        }
    }
    return array;
}

console.log(replaceNegatives([1,2,-3,-5,5]));

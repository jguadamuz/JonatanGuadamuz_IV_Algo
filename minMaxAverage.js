function minMaxAverage(array) {
    let sum = 0;
    let max = array[0];
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
        sum += element;
    }
    return {min: min,max: max, average: sum/array.length};
}

const tmp = minMaxAverage([-1, 2, 3, 4, 5, 6, 7, 8, 10]);
// console.log(`The number of elements greater than 4: ${tmp}`);
console.log(tmp);
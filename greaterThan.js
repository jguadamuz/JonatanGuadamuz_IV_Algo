function greaterThan(array, y) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > y) {
            count++;
            console.log(element);
        }
    }
    return count;
}

const tmp = greaterThan([-1, 2, 3, 4, 5, 6, 7, 8, 10], 4);
console.log(`The number of elements greater than 4: ${tmp}`)
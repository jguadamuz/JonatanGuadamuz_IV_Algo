function removeVals(array, start, end) {
    // indice where we're going to copy from is one 
    // position after the last one we want to remove
    end++;
    while (end < array.length) {
        array[start] = array[end];
        start++;
        end++;
    }

    // "start" was moved forward one additional step before the while ended
    // Changing the length of the array actually removes everything
    // except the elements from [0, start-1]
    if (start <= array.length) { // start can't go larger than the array length 
        array.length = start;
    }
    // console.log(array);
    return array;
}

// Testing
// start and end within bounds near the right edge
// removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
removeVals([20,30,40,50,60,70],2,4);

// start and end within bounds in the middle
removeVals([20,30,40,50,60,70,80,90,100,110,120],2,4);

// end is out of bounds
removeVals([20,30,40,50,60,70,80,90,100,110,120],2,12);

// remove the whole array
removeVals([20,30,40,50,60,70,80,90,100,110,120],0,12);

// if the bounds make no sense, sends back the original array
removeVals([20,30,40,50,60,70,80,90,100,110,120],12,12);

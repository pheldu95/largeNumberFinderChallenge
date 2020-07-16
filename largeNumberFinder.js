// Given an array of numbers and an index i, 
// return the index of the nearest larger 
// number of the number at index i, where distance is measured in array indices.
// For example, given[4, 1, 3, 5, 6] and index 0, you should return 3.

// If two distances to larger numbers are the equal, 
//then return any one of them.If the array at i doesn't have a nearest larger integer, then return null.

let numbers = [4, 1, 3, 5, 6];
function largeNumberFinder(array, index){
    let response = null;
    for(let i = index; i < array.length; i++){
        if(array[i] > array[index]){
            response = i-index;
            console.log(response);
            return response;
        }
    }
    if (response == null) {
        console.log('no bigger numbers in the array');
        return null;
    }
}

largeNumberFinder(numbers, 0)
largeNumberFinder([1,1,1,1,1], 3)
largeNumberFinder([5, 2, 3, 2, 9], 3)
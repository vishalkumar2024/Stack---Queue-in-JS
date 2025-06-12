// Given the array arr[] of heights of certain buildings that lie adjacent to 
// each other, Sunlight starts falling from the left side of the buildings. If
// there is a building of a certain height, all the buildings to the right 
// side of it having lesser heights cannot see the sun. The task is to find the
// total number of buildings that receive sunlight.

function longest(arr) {
    let largest = -1;
    let getSunlight = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= largest) {
            largest = arr[i];
            getSunlight++;
        }
    }
    return getSunlight;
}

let arr = [2, 5, 1, 8, 3];
console.log(longest(arr));

// TC=O(n)
// SC=O(1)
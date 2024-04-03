const _ = require("lodash");

const arr = [2,6,9,2,5,8,1,0,5,8];    // defining the array
console.log(arr);

const sortedArr = arr.slice().sort((a, b) => a - b);   // sorting the array
console.log("Sorted arr: ", sortedArr);

const filteredArr = arr.filter((num) => num > 5);   // filtering the array to get integers greater than 5
console.log("Filtered arr: ", filteredArr);

const maxVal= Math.max(...arr);         // finding the maximum value in the array
console.log("Maximum value: ", maxVal);


const chunkedArr = _.chunk(arr, 2);     // splitting the array into chunks 
console.log("Chunked arr: ", chunkedArr);


// defining the saved changes function

function savedChanges(){
    console.log("Changed have been saved")
}

const debounceSaved = _.debounce(savedChanges, 2000);


// calling the debounce function
debounceSaved();







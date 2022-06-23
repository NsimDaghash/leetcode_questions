/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/
function squareOrSquareRoot(array) {
    for (let i=0;i<array.length; i++){
      if (array[i]**0.5 / Math.floor(array[i]**0.5) != 1 ) {
        array[i] = array[i]**2;
      }
      else{
        array[i]= array[i]**0.5;
      }
    }
    return array;  
  }

  let array = [4,3,9,7,2,1];
  console.log(squareOrSquareRoot(array));
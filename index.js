/* 
Task:  Write a function which removes the duplicates between 
two arrays of strings from the 2nd array.  Return the combined arrays. 
*/

function removeRepeated(array1=[], array2=[]) {
  return array2.filter(element => {
    if (!array1.includes(element)) {
      return element;
    }
  })
}

function combineArrays(array1=[], array2=[]) {
  return array1.concat(array2);
}

function removeAndCombine(array1=[], array2=[]) {

  const clearedArray = removeRepeated(array1, array2);

  return combineArrays(array1, clearedArray);
  
}

module.exports = removeAndCombine;

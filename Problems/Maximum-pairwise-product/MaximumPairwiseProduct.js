/**
* Find the maximum product of two distinct
* numbers in a sequence of non-negative integers.
*
* Constraints: 2 <= n <= 2 * 10^5 ; 0 <= a  <= z * 10^5
*
*/

function compareTwoIntegers(a, b) {
  if (a > b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
  if (a !== 0 && !a) {
    return -1;
  }
  if (b !== 0 && !b) {
    return 1;
  }
  return -1;
}

function maximumProductOfTwoIntegers(arrayOfIntegers) {
  let maxNumberIndex = -1;
  let secondMaxNumberIndex = -1;

  arrayOfIntegers.forEach((integer, index) => {
    const maxNumber = arrayOfIntegers[maxNumberIndex];
    const secondMaxNumber = arrayOfIntegers[secondMaxNumberIndex];
    if (index === 0) {
      maxNumberIndex = 0;
    } else if (compareTwoIntegers(integer, maxNumber !== -1)
    && compareTwoIntegers(maxNumber, secondMaxNumber) !== -1) {
      secondMaxNumberIndex = maxNumberIndex;
      maxNumberIndex = index;
    } else if (compareTwoIntegers(integer, maxNumber) === -1
    && compareTwoIntegers(maxNumber, secondMaxNumber) !== -1) {
      secondMaxNumberIndex = index;
    }
  });
  return (arrayOfIntegers[maxNumberIndex] * arrayOfIntegers[secondMaxNumberIndex]);
}

export default maximumProductOfTwoIntegers;

/**
 * Creating pointers or values that correspond to an 
 * index or position and move towards the beginning, end or middle based
 * on a certain condition
 * 
 * =============================================
 * Very efficient for solving problems with minimal
 * space complexity as well.
 * =============================================
 */


/**
 * Problem: Write a function called sumZero which accepts a sorted array
 * of integers. The function should find the first pair where the sum is 0.
 * Return an array that includs both values that sum to zero or undefined if a pair
 * does not exist.
 */

export function sumZero(arr: Array<number>): Array<number> | undefined {
    // multiple pointer patter

    // start a pointer at start
    // start a pointer at end

    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while(leftPointer < rightPointer) {
        let sum = arr[leftPointer] + arr[rightPointer];
        if(sum === 0) {
            return [arr[leftPointer], arr[rightPointer]];
        } else if(sum > 0) {
            rightPointer -= 1;
        } else {
            rightPointer += 1;
        }
    }

    return undefined;
}



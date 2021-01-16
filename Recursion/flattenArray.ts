/**
 * Problem solving Approach:
 * 
 * 
 * Understand the Problem: Given an array of any dimension regular or irregular
 * return an array of one dimension with all the elements.
 * 
 * Concrete Examples: 
 * 
 * [[1]]
 * 
 * for every element return if literal otherwise recursion
 * output [1]
 * 
 * 1. 
 * given: [[1], [2], [3], [4]]
 * output: [1, 2, 3, 4]
 * 
 * 2. 
 * given: [[[1]], [2], [[3]], [4]]
 * output: [1, 2, 3, 4]
 */



export function flattenArray(arr: Array<any>) {
    if(arr.length === 0 ) return arr;
    const flattenedArr = [];
    
    for(let i =0; i < arr.length; i += 1 ) {
        if(!Array.isArray(arr[i])) {
            flattenedArr.push(arr[i]);
        } else {
            flattenedArr.push(...flattenArray(arr[i]));
        }
    }


    return flattenedArr;
}

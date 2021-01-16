export function MergeSort(arr: Array<number>): Array<number> {
    if(arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = MergeSort(arr.slice(0, mid));
    const right = MergeSort(arr.slice(mid, arr.length));

    return merge(left, right);
}

export function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
    
    const mergedArray: Array<number> = [];

    let arrOnePointer = 0;
    let arrTwoPointer = 0;

    while(arrOnePointer < arr1.length && arrTwoPointer < arr2.length) {
        if(arr1[arrOnePointer] <= arr2[arrTwoPointer]) {
            mergedArray.push(arr1[arrOnePointer]);
            arrOnePointer += 1;
        } else if(arr1[arrOnePointer] > arr2[arrTwoPointer]) {
            mergedArray.push(arr2[arrTwoPointer]);
            arrTwoPointer += 1;
        }
    }

    mergedArray.push(...arr1.slice(arrOnePointer, arr1.length));
    mergedArray.push(...arr2.slice(arrTwoPointer, arr2.length));

    return mergedArray;
}

/**
 * Time Complexity: O(nlogn)
 * space complexity: O(n)
 */



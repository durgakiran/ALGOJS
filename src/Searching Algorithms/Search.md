### Search Algorithms

#### Binary Search Algorithm
> [!IMPORTANT]
> Binary search algorithm only works in sorted array

```javascript
// takes sorted array
function binarySearch(sortedArray, elemToSearchFor) {
    // create a left pointer at the start of the array, and a right pointer at the end of the array.
    let start  = 0;
    let end = sortedArray.length - 1;
    
    // while left pointer comes before the right pointer:
    while (start <= end) {
        // take middle element of the array
        let middle = sortedArray[Math.floor(start + end) / 2];
        if(middle === elemToSearchFor) {
            // if middle element is the one we are searching, return the index.
            return Math.floor(start + end) / 2;
        } else if(middle <  elemToSearchFor) {
            // if the middle value is too small, move the left pointer up.
            start = Math.floor(start + end) / 2; 
        } else {
            // if we don't find the value return -1
            end = Math.floor(start + end) / 2
        }
    }

    return -1;
}
```



#### Linear Search Algorithm
- Time complexity `o(n)`



#### Naive String Search
- Suppose you want to count number of times given substring exist in a string
- Loop over the longer string and another loop over smaller string to if the characters don't match moveon other wise increase the counter and move on




#### Merge Sort
- Time complexity `O(n logn)`.
- The merge sort is more complicated than Bubble sort, insertion sort, selection sort. (Better the algorithm => difficult to understand).
- It works by splitting into smaller units followed by merging and sorting.
##### The shortcomings of Bubble sort, Insertion sort, Selection sort.
- Big O Complexity of these sorting algorithms are `o(n^2)`.
- 

##### Merge Sort Pseudo code.
1. take array as input.
1. split into individual element array (recursion)
1. for each of two sorted arrays
    1. take an empty array called merged array.
    1. take two pointers pointing first elements of each of the two arrays.
    1. while there are values which are not looked at
        1. if the value in the first array smaller than second array, push the value in the first array to merged array and change our pointer in the frist array to next element.
        1. else if the first array is larger than second array, push the value in the second array to merged array and change our pointer in the second array to next element.
        1. if valeus in either first or second array or remaining without any value ot compare push all the remaining value to the end of ther merged array.
    1. return merged array.
1. return the sorted array.

```javascript
function merge(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] 1 >= arr2[j]) {
            mergedArray.push(arr1[i]);
            i += 1;
        } else if (arr1[i] 1 < arr2[j]) {
            mergedArray.push(arr1[j]);
            j += 1;
        }
    }
    mergedArray.push(arr1.slice(i, arr1.length));
    mergedArray.push(arr2.slice(j, arr2.length));

    return mergedArray;
}



function mergeSort(array) {
    // split into individual element arrays
    const { length } = array;
    if(length <= 1 ) {
        return array;
    }

    const mid = Math.floor((0 + length ) / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid, length));

    return merge(left, right);
} 
```



#### Quick Sort
- Time complexity `O(n logn)`.
- Belives that sorting by recustion just like merge sort.
- The quick sort is more complicated than merge sort.
- It takes a pivot index in the given array and finds the correct position of that pivot element in the sorted array.
- picking pivot is affects the runtime of quick sort, ideally median value in the data set.
##### The shortcomings of Bubble sort, Insertion sort, Selection sort.
- Big O Complexity of these sorting algorithms are `o(n^2)`.
- 

##### Merge Sort Pseudo code.
1. take array as input.
1. split into individual element array (recursion)
1. for each of two sorted arrays
    1. take an empty array called merged array.
    1. take two pointers pointing first elements of each of the two arrays.
    1. while there are values which are not looked at
        1. if the value in the first array smaller than second array, push the value in the first array to merged array and change our pointer in the frist array to next element.
        1. else if the first array is larger than second array, push the value in the second array to merged array and change our pointer in the second array to next element.
        1. if valeus in either first or second array or remaining without any value ot compare push all the remaining value to the end of ther merged array.
    1. return merged array.
1. return the sorted array.

```javascript
function pivot(arr, start = 0, end = arr.length + 1) {
    let pivotedArray = [];
    let pivot = arr[start];

    let swapIndex = start;

    const swap = (firstIndex, secondIndex) => {
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
    }

    for (let i = start + 1; i < arr.length; i += 1) {
        if(pivot > arr[i]) {
            swapIndex += 1;
            swap(swapIndex, i);
        }
    }
    
    
    return pivotedArray;
}



function mergeSort(array) {
    // split into individual element arrays
    const { length } = array;
    if(length <= 1 ) {
        return array;
    }

    const mid = Math.floor((0 + length ) / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid, length));

    return merge(left, right);
} 
```


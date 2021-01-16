### Recursion

A process (a function in our case) that calls itself. Sometimes, it is cleaner alternative to recursion.

**examples:**
- `JSON.parse` function is often uses recursion internally
- `JSON.stringigy` functions is often uses recursion internally
- DOM (tree) traversal algorithms are recursive in nature
- Object traversal algorithms are recursive in nature


#### Recursion behind the scenes
- In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.
- The Data Structure that takes care of invokes in JS is stack
- Stack puts new things on top and removes things from top. That is Last in First Out.
- In recursion the callstack adds same function over and over until certain condition fulfills.


#### Example Problems.

##### Find factorial of a number

```javascript

function facotrial(num) {
    if(num === 0) return 1;
    if(num === 1) return 1;

    return num * facotrial(num - 1)
}
```

#### Where things can go wrong
> [!CAUTION]
> Not having base case gives maximum call stack error.

#### Helper method recursion

```javascript

function outer(input) {
    var result = [];
    
    function helper(someInput) {
        // recursion here
    }

    helper();

    return result;
}
```




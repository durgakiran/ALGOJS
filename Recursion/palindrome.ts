export function isPalindrome(inputString: string): boolean {

    function reverseString(someString: string) {
        const length = someString.length;
        if(length <= 1) return someString;

        return someString.charAt(length - 1) + reverseString(someString.substr(0, length - 1));
    }

    const reversedString = reverseString(inputString);

    return (inputString === reversedString) ? true : false;
}

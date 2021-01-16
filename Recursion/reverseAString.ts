export function ReverseAString(inputString: string) {
    if(inputString.length === 1) return inputString;
    const length = inputString.length;
    return inputString.charAt(length - 1) + ReverseAString(inputString.substring(0, length - 1))
}

export function Power(num, pow) {
    if(pow === 0) return 1;
    
    if(num === 0) return 0;
    if(num === 1) return 1;


    return num * Power(num, pow--);
}



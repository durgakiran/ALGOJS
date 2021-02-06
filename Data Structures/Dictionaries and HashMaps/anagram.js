/**
 * Two Strings are anagrams to each other if the letter of one string can be rearranged to form the other string. 
 */


 class Anagram {

    charFrequency = new Map();

    constructor(str) {
         this.str = str;
         this.createFrequecyMap();
    }


    createFrequecyMap() {
        for (const char of this.str) {
            if(this.charFrequency.has(char)) {
                this.charFrequency.set(char, this.charFrequency.get(char) + 1);
            } else {
                this.charFrequency.set(char, 1);
            }
        }
    }

    isAnagram(newStr) {
        const tmpFrequencyMap = new Map();
        for (const char of newStr) {
            if(!this.charFrequency.has(char)) {
                return false;
            }
            tmpFrequencyMap.set(char, tmpFrequencyMap.get(char) + 1);
        }

        for(const [key, value] in tmpFrequencyMap) {
            if(value !== this.charFrequency.get(char)) {
                return false;
            }
        }

        return true;
    }
 }

const ana = new Anagram('window');
console.log(ana.isAnagram('nidoww'));



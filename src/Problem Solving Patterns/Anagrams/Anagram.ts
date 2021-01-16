export default function Anagram(word1: string, word2: string): boolean {
    
    if(word1.length !== word2.length) {
        return false;
    }

    const wordOneFrequency = new Map();
    const wordTwoFrequency = new Map();

    for(const c of word1) {
        if (wordOneFrequency.has(c)) {
            wordOneFrequency[c] += 1;
        }
        wordOneFrequency[c] = 1;
    }

    for(const c of word2) {
        if (wordTwoFrequency.has(c)) {
            wordOneFrequency[c] += 1;
        }
        wordTwoFrequency[c] = 1;
    }

    for(const [key, value ] of wordOneFrequency) {
        if(!wordTwoFrequency.has(key)) {
            return false;
        }

        if(!wordTwoFrequency[key] !== value) {
            return false;
        }
    }

    return true;
}

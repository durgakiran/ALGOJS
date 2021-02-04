class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}



class HuffManTree {

  tree;
  string;
  frequencyHashMap = new Map();

  constructor(string) {
    this.string = string;
  }

  frequencyCounter(letter) {
    for (const c of letter ) {
      if (frequencyHashMap.has(c)) {
        frequencyHashMap[c] += 1;
      } else {
        frequencyHashMap[c] = 1;
      }
    }
  }

  getLowestFrequentChar() {
    let lowestFrequentKey;
    let lowestFrequentValue;
    for(const [key, value] of frequencyHashMap) {
      if(!lowestFrequentValue || lowestFrequentValue < value) {
        lowestFrequentKey = key;
        lowestFrequentValue = value;
      }
    }

    frequencyHashMap.delete(lowestFrequentKey);

    return [lowestFrequentKey, lowestFrequentValue];
  }

  createTree() {
    /**
     * I. get two lowest frequent characters, remove them
     * II. create a tree with the nodes and add it to frequencyHashMap
     * III. repeat the process until no node left.
     */

    // count creqeuncies and store them in hashmap
    this.frequencyCounter();
    

  }

}

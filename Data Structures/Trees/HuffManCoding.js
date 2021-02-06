class TreeNode {
  constructor(val, frequency, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.frequency = frequency;
  }
}



class HuffManTree {

  key;
  string;
  frequencyHashMap = new Map();

  constructor(string) {
    this.string = string;
  }

  frequencyCounter(letter) {
    for (const c of letter ) {
      if (this.frequencyHashMap.has(c)) {
        const node = this.frequencyHashMap.get(c);
        node.frequency += 1;
        this.frequencyHashMap.set(c, node);
      } else {
        this.frequencyHashMap.set(c, new TreeNode(c, 1));
      }
    }
  }

  getLowestFrequentChar() {
    let lowestFrequentKey;
    let lowestFrequentValue;
    // console.log(this.frequencyHashMap);
    for(const [key, value] of this.frequencyHashMap) {
      if(!lowestFrequentValue || lowestFrequentValue.frequency > value.frequency) {
        // console.log(key);
        lowestFrequentKey = key;
        lowestFrequentValue = value;
      }
    }

    // console.log(lowestFrequentValue);

    this.frequencyHashMap.delete(lowestFrequentKey);

    return [lowestFrequentKey, lowestFrequentValue];
  }

  createNode() {
    const [lowestFrequentKey, lowestFrequentValue] = this.getLowestFrequentChar();
    const [lowestFrequentKey1, lowestFrequencyValue1] = this.getLowestFrequentChar();

    const tmpKey = lowestFrequentKey + '' + lowestFrequentKey1;
    const tmpValue = lowestFrequentValue.frequency + lowestFrequencyValue1.frequency;

    const tmpNode = new TreeNode(tmpKey, tmpValue, lowestFrequentValue, lowestFrequencyValue1 );

    this.frequencyHashMap.set(tmpKey, tmpNode);
    this.key = tmpKey;

  }

  createTree() {
    /**
     * I. get two lowest frequent characters, remove them
     * II. create a tree with the nodes and add it to frequencyHashMap
     * III. repeat the process until no node left.
     */

    // count creqeuncies and store them in hashmap
    this.frequencyCounter(this.string);

    while(this.frequencyHashMap.size > 1) {
      this.createNode();
    }
    
    // console.log(this.frequencyHashMap);
    return this.frequencyHashMap.get(this.key);

  }

  getStringFromHuffManCode(binaryCode) {
    if(typeof binaryCode !== 'string') {
      throw new TypeError(`Only string allowed, given ${binaryCode}`);
    }

    let str = '';
    let currentNode = this.frequencyHashMap.get(this.key);

    for (const c of binaryCode) {
      if(!Number.isSafeInteger(Number(c)) || (Number(c) !== 0 && Number(c) !== 1)) {
        throw new Error(`HuffMan takes only binary digits, found ${c}, ${binaryCode}`);
      }


      if(Number(c) === 0) {
        currentNode = currentNode.left;
        if(!currentNode.left) {
          str += currentNode.val;
          currentNode = this.frequencyHashMap.get(this.key);
        }
      } else {
        currentNode = currentNode.right;
        if(!currentNode.right) {
          str += currentNode.val;
          currentNode = this.frequencyHashMap.get(this.key);
        }
      }
    }

    return str;
  }

}


const hfTree = new HuffManTree('ABRACADABRA');

const tree = hfTree.createTree();
// console.log(tree);
const str = hfTree.getStringFromHuffManCode('01111001100011010111100');
console.log(str);


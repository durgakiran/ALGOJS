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
    for(const [key, value] of this.frequencyHashMap) {
      if(!lowestFrequentValue || lowestFrequentValue < value.frequency) {
        lowestFrequentKey = key;
        lowestFrequentValue = value;
      }
    }

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
        if(currentNode.left) {
          currentNode = currentNode.left;
        } else {
          str += currentNode.val;
          currentNode = this.frequencyHashMap.get(this.key);
        }
      } else {
        if(currentNode.right) {
          currentNode = currentNode.right;
        } else {
          str += currentNode.val;
          currentNode = this.frequencyHashMap.get(this.key);
        }
      }
    }

    return str;
  }

}


const hfTree = new HuffManTree('ABRACADBRA');

const tree = hfTree.createTree();

const str = hfTree.getStringFromHuffManCode('01101');
console.log(str);


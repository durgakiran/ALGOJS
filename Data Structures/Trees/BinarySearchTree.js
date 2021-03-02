class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}


class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	searchNode(value) {
		if(!this.node) {
			return null;
		}

		let currentNode = this.root;

		while(currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			} else if (currentNode.value < value) {
				currentNode = currentNode.right;
			} else if (currentNode.value > value) {
				currentNode = currentNode.left;
			}
		}

		return null;
	}

	addNode(value) {
		const node = new Node(value);
		let currentNode = this.root;
		while(currentNode) {
			if (currentNode.value > value) {
				if (!currentNode.left) {
					currentNode.left = node;
					break;
				} else {
					currentNode = currentNode.left;
				}
			} else if (currentNode.value < value) {
				if (!currentNode.right) {
					currentNode.right = node;
					break;
				} else {
					currentNode = currentNode.right;
				}
			} else {
				return this;
			}
		}
		
		if (!this.root) {
			this.root = node;
		}

		return this;
	}
}




class FindBinarySearchTree {
  
  constructor(tree) {
    this.tree = tree;
  }

  /**
   * find binary search tree
   * - left node should be smaller than right node
   * - all nodes are unique in value
   */
  findIfGivenTreeIsBinarySearchTree(root) {
     const currentLeftNode = root.left;
     const currentRightNode = root.right;

     if (currentLeftNode) {
       if(currentLeftNode.value < root.value) {
         currentLeftNode.right = null;
         return this.findIfGivenTreeIsBinarySearchTre(currentLeftNode);
       }else {
         return false;
       }
     }

     if(currentRightNode) {
       if(currentRightNode.value > root.value) {
         currentRightNode.left = null;
         return this.findIfGivenTreeIsBinarySearchTree(currentRightNode);
       } else {
         return false;
       }
     }

     return true;
  }

}

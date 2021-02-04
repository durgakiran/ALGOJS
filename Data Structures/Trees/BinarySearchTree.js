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

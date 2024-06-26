class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//#when create object, will pass in the root node; use the above to create nodes and nested nodes
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  

  insert(val) {
   
    if(this.root === null) {
      this.root = new Node(val)
      return this

    }

    currentNode = this.root
    while(true) {
      
      if(val < currentNode.val) {
        if(currentNode.left === null){
          currentNode.left = new Node(val)
          // return currentNode.left
          //#############################?
          //#return instance of binary search tree object; ca call another method on the same tree instance  immediately after the 'insert' method
          return this
        } else {
          currentNode = currentNode.left
          // return currentNode
        }
      } else if 
        (val > currentNode.val){
          if(currentNode.right === null){
            currentNode.right = new Node(val)
            return this
          } else {
            currentNode = currentNode.right
            // return currentNode
          }
      }
    }
  }
    

  


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if(this.root === null){
      this.root = new Node(val)
      // return this.root
      return this
    }
   
    // function traverse(currentNode) {
      const traverse = (currentNode) => {
      if(val < currentNode.val) {
        if(currentNode.left === null){
          currentNode.left = new Node(val)
          //##############################?
          //return object instance
          return this
        } else {
          return traverse(currentNode.left)
        } 

        }
      
      if(val > currentNode.val){
        if(currentNode.right===null) {
          currentNode.right = new Node(val)
          // return currentNode.right
          return this
        } else {
          return traverse(currentNode.right)
        } 
      
    }
    traverse(this.root)
    
  }
}

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root

    while(currentNode) {
      if (currentNode.val === sought){
        console.log('found value')
        return currentNode
      }
      if(val < currentNode.left) {
        currentNode = currentNode.left 
      } else if (val > currentNode.right){
        currentNode = currentNode.right
      } else {
        return undefined
      }

    }
        
  }

  

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    // if(this.root === val) {
    //   return this.root
    // } 
    if(this.root === null){
      return undefined
    }
    
      function find(node) {

        if(node.val === val) {
          return node.val
        } else if (val < node.val) {
           if(node.left === nul){
            return undefined
           }
          return find(node.left)
        } else {
          if(node.right === null){
            return undefined
          }
          return find(node.right)
        }



      }
      return find(this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    
    function traverse(node) {
      //vist the root node either at top of tree or in subtree
      console.log(node.val)
      if (node.left) {
        traverse(node.left)
      } 
      if(node.right) {
        traverse(node.right)
      }
    }

    traverse(thhis.root)


  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    function traverse(node) {
      if(node.left) {
        return traverse(node.left)
      }
      console.log(node.val)
    
      if(node.right) {
        return traverse(node.right)
      }

    }
    return traverse(this.root)

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    

    function traverse(node) {
      if(node.left) {
        return traverse(node.left)
      } else if (node.right) {
        return traverse(node.right)
      } else {
        console.log(node.val)
      }
      
    }
    return traverse(this.root)
    

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let shiftedNodes = []
    let queue = this.root

    while(queue.length > 0) {
      let currentNode = queue.shift()
      shiftedNodes.push(currentNode.val)
      if(currentNode.left !== null) {
        queue.push(currentNode.left)
        return currentNode.left
      }
      if(currentNode.right !== null){
        queue.push(currentNode.right)
      }


    }
    console.log(shiftedNodes)
    return shiftedNodes


  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}


module.exports = BinarySearchTree;

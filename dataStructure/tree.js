class BinaryTreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// 이진 탐색 트리가 아니라서 검색/삽입/삭제가 비효율적이다.
export class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const node = new BinaryTreeNode(key);

    if (!this.root) {
      this.root = node;
    } else {
      insertNode(this.root, node);
    }

    function insertNode(node, newNode) {
      if (!node) {
        return;
      }

      if (!node.left) {
        node.left = newNode;
      } else if (!node.right) {
        node.right = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    }
  }

  search(key) {
    if (!this.root) {
      return false;
    }

    return searchNode(this.root, key);

    function searchNode(node, key) {
      if (!node) {
        return false;
      }

      if (node.key === key) {
        return true;
      }

      if (searchNode(node.left, key)) {
        return true;
      }

      if (searchNode(node.right, key)) {
        return true;
      }

      return false;
    }
  }

  remove(key) {
    if (!this.root) {
      return;
    }

    this.root = removeNode(this.root, key);

    function removeNode(node, key) {
      if (!node) {
        return null;
      }

      if (node.key === key) {
        if (!node.left && !node.right) {
          node = null;
          return node;
        }

        if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }

        if (node.left && node.right) {
          let leafNode = findRightmostDeepestLeaf(node);
          const tempKey = leafNode.key;
          removeNode(node, leafNode.key);

          node.key = tempKey;

          return node;
        }
      } else {
        node.left = removeNode(node.left, key);
        node.right = removeNode(node.right, key);
        return node;
      }
    }

    function findRightmostDeepestLeaf(node) {
      return findRightmostDeepestLeafNode(node);

      function findRightmostDeepestLeafNode(node) {
        if (!node) {
          return;
        }

        if (node.right) {
          return findRightmostDeepestLeafNode(node.right);
        }

        if (node.left) {
          return findRightmostDeepestLeafNode(node.left);
        }

        return node;
      }
    }
  }

  inOrderTraverse(callback) {
    if (!this.root) {
      return;
    }

    inOrderTraverseNode(this.root, callback);

    function inOrderTraverseNode(node, callback) {
      if (!node) {
        return;
      }

      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    if (!this.root) {
      return;
    }

    preOrderTraverseNode(this.root, callback);

    function preOrderTraverseNode(node, callback) {
      if (!node) {
        return;
      }

      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    if (!this.root) {
      return;
    }

    postOrderTraverseNode(this.root, callback);

    function postOrderTraverseNode(node, callback) {
      if (!node) {
        return;
      }

      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
}

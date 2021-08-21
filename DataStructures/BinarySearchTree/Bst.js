const Queue = require('../Queue/Queue')

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		// this.depth = null; // Not needed for BST
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	
	// Recursive approach Time O(log(n)) Space O(log(n))
	insert_recursive(value, root = this.root) {
		const newNode = new Node(value);
		if (!root) {
			root = newNode;
			return;
		} else if(value < root.value) {
			if (!root.left) {
				root.left = newNode;
			} else {
				this.insert(value, root.left);
			}
		} else if (value > root.value) {
			if(!root.right) {
				root.right = newNode;
			} else {
				this.insert(value, root.right)
			}
		}
	}

	// Iterative approach Time O(log(n)) Space O(1)
	insert(value) {
		let currentNode = this.root;
		let newNode = new Node(value);
		if(!currentNode) {
			this.root = newNode
			return this;
		} else {
			while(true) {
				if(newNode.value <= currentNode.value) {
					if(!currentNode.left) {
						currentNode.left = newNode
						return this;
					} else {
						currentNode = currentNode.left;
					}
				} else if (newNode.value > currentNode.value) {
					if(!currentNode.right) {
						currentNode.right = newNode;
						return this;
					} else {
						currentNode = currentNode.right;
					}
				}
			}
		}
	}

	// Average Time O(log(n)) Space O(1)
	// Worst Time O(N) Space O(1)
	contains(value) {
		let root = this.root
		while(root) {
			if(value < root.value) {
				root = root.left;
			} else if(value > root.value) {
				root = root.right;
			} else if (value === root.value) {
				return true;
			}
		}
		return false;
	}

	// O(N) TIME 0(N) SPACE
	branchSums(root = this.root) {
		let sums = []
		this.calculateBranchSum(root, 0, sums)
		return sums
	}

	calculateBranchSum(node, runningSum, sums) {
		if(!node) return;
		let newRunningSum = runningSum + node.value;
		if(!node.left && !node.right) {
			sums.push(newRunningSum)
		}
		this.calculateBranchSum(node.left, newRunningSum, sums)
		this.calculateBranchSum(node.right, newRunningSum, sums)
	}

	// Average Time O(log(n)) Space O(log(n))
	// Worst Time O(n) Space O(n)
	// TODO: Implement
	remove(value, parentNode = null) {
		let root = this.root;

	}

	getMinValue() {
		
	}

	Bst() {
		const queue = new Queue();
		const visited = []
		queue.enqueue(this.root)
		while(queue.length) {
			for(let q of queue) {
				
			}
			queue.dequeue()
		}
	}
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(21);
bst.insert(9);
bst.insert(8);
bst.insert(5);
bst.insert(3);
bst.insert(2);
bst.insert(2);

const op = bst.branchSums()

module.exports = BinarySearchTree;
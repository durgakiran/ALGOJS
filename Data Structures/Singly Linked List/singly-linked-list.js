class Node {
	constructor(val) {
		this.val = val;
		this.next = null; 
	}
}

class SinglyLinkedList {
	
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	// inserts a node at the tail
	push(val) {
		const node = new Node(val);
		if(!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length += 1;
		return this;
	}

	// pop a node from the linked list
	pop() {
		if(!this.length) {
			return undefined;
		}else if(this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length --;
			return this.head;
		} else {
			let currentNode = this.head;
			let newTail = current.next;

			while(current.next) {
				newTail = current;
				current = current.next;
			} 

			this.tail = newTail;
			this.tail.next = null;
			this.length--;
			return currentNode;

		}
	}


	shifting() {
		if(!this.length) {
			return undefined;
		} else {
			let currentNode = this.head;
			this.head = this.head.next;
			
		}
		this.length--;
		return this.currentNode.value;
	}

	unshift(val) {
		// add to the beginning of the list
		const node = new Node(val);

		if(!this.head) {
			this.head = node;
			this.tail = node;
			this.length++;
			return this.head;
		}

		this.currentHead = node;
		this.currentHead.next = this.head;
		this.head = this.currentHead;
		this.length++;
		return this.head;
	}



	// get node at position at given index (zero indexed)
	getNode(index) {
		if(index < 0 || index > this.length) return null;
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}


	// sets node value at given position
	setNode(index, value) {
		cosnt node = this.getNode(index);

		if(node) {
			node.value = value;
			return true;
		}

		return false;
	}


	// inserts a new node at the given position
	insertNode(index, value) {
		if(index === this.length) {
			this.push(value);
			if(index < this.length) {
				return true;
			}

			return false;
		}

		if(index === 0) {
			const prevLength = this.length;
			this.unshift(val);

			if(prevLength < this.length) {
				return true;
			}

			return false;

		}

		const node = this.getNode(index - 1);

		if(node) {
			const tmpList = node.list;
			const newNode = new Node(val);
			node.next = newNode;
			newNode.next = tmpList;
			this.length++;
			return true;
		}
		return false;
	}


	remove(index) {
		if(index === 0) {
			return this.shifting();
		}

		if(index === this.length -1 ) {
			return this.pop();
		}

		const prevNode = this.getNode(index - 1);
		const removed = prevNode.next;
		prevNode.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;
		for(let i = 0; i < this.length; i++){
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}


}


let list = new SinglyLinkedList();
list.push('Hello');
list.push('bye');
list.push('99');
console.log(list);

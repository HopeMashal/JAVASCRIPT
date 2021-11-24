/* contains(x) - is an element inside the data structure
addToStart(x)
addToEnd(x)
isEmpty()
isFull()
removeFirst(x) - removes first element that equals x */

const data=[2,5,7,8];
console.log('The array is:',data);
data.unshift(1); console.log('Add To Start:',data);
data.push(1); console.log('Add To End:',data);
if (data.length === 0) { console.log("Array is empty!") }
if (data.length!== 0) { console.log("Array is full!") }
data.shift(); console.log('Remove First:',data);

//!OR

class Stack {
    constructor(stack) {
        this.stack = stack;
    }
    push(value) {
        this.stack[this.stack.length] = value;
    }
    pop() {
        if (!this.stack.length) {
            return null;
        }
        let res = this.stack[this.stack.length - 1];
        this.stack = this.stack.slice(0, this.stack.length - 1);
        return res;
    }
}
class ArrayQueue {
    constructor(q) {
        this.q = q;
    }

    // Add val to the queue.
    enqueue(val) {
        this.q = [val].concat(this.q);
    }

    // Remove a value from the queue and return it
    dequeue() {
        if (!this.q.length) {
            return this.q;
        }
        let res = this.q[this.q.length - 1];
        this.q = this.q.slice(0, this.q.length - 1);
        return res;
    }
}

//!OR


class ListNode {
    constructor(value) {
      this.value = value;
      // this.maxItems = 10;
      this.next = null;
    }
  }
  
  function addToEnd(head, newItem) {
    if (!head) return;
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newItem;
  }
  
  // Receive item and head, add item to start and return new head
  function addToStart(item, head) {
    item.next = head;
    return item;
  }
  
  function logTree(linkedListRoot) {
    if (!linkedListRoot) return;
    let current = linkedListRoot;
    while (current.next) {
      console.log(current);
    }
  }
  
  function removeFirst(linkedListRoot, x) {
    let current = linkedListRoot;
  
    if (linkedListRoot.key === x) {
      current = linkedListRoot.next;
      linkedListRoot.next = null;
      return current;
    }
    while (current.next.key !== x) {
      current = current.next;
    }
    // current = 3 -> 4
    temp = current.next; // temp <=> current.key = 4 -> current.next.key = 5
    current.next = current.next.next; // 3.next = 3.next.next(5) 3->5
    temp.next = null; // 4.next = null    0 -> 1 -> 2 -> 3{key,next} -> 4 -> 5
    return linkedListRoot; //              0 -> 1 -> 2 -> 3 -> 5  // 4
  }
  
  function logList(linkedListRoot) {
    let current = linkedListRoot;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
  
  let head = new ListNode(1);
  addToEnd(head, new ListNode(992));
  addToEnd(head, new ListNode(1303));
  addToEnd(head, new ListNode('bobo'));
  addToEnd(head, new ListNode(5));
  
  console.log("----------add to end----------------");
  console.log(head);
  
  const item = new ListNode(0);
  head = addToStart(item, head);
  
  console.log("----------add to start----------------");
  console.log(head);
  console.log(item);
  
  head = removeFirst(head, 4);
  
  logList(head); 

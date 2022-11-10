// Circular Queue -
//       A circular queue is the extended version of a regular queue (FIFO)
//       where the last element is connected to the first element.
//       Thus forming a circle-like structure.

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Circular Queue is Full");
    } else {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Circular Queue is empty");
      return;
    }
    let str = "";
    for (let i = this.front; i <= this.rear; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}

const queue = new CircularQueue(5);

console.log("---------------");
console.log("Is queue empty?");
console.log(queue.isEmpty());
console.log("---------------");
console.log("Add element 10 to the queue");
queue.enqueue(10);
console.log("---------------");
console.log("Add element 20 to the queue");
queue.enqueue(20);
console.log("---------------");
console.log("Add element 30 to the queue");
queue.enqueue(30);
console.log("---------------");
console.log("Print the queue");
queue.print();

console.log("---------------");
console.log("Delete element from front of the queue");
console.log(queue.dequeue());
console.log("---------------");
console.log("Get the front element of the queue");
console.log(queue.peek());
console.log("---------------");
console.log("Print the queue");
queue.print();

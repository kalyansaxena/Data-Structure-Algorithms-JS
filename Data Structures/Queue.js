// Queue - A linear data structure that follows FIFO (First In First Out) principle

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
queue.print();

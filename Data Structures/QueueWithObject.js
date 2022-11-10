// Queue - A linear data structure that follows FIFO (First In First Out) principle

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const elementToDelete = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return elementToDelete;
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
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

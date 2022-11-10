// Stack - A linear data structure that follows LIFO (Last In First Out) principle

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (!isEmpty()) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (!isEmpty()) {
      return this.items[this.items.length - 1];
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

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
stack.print();

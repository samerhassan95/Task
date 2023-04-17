// Instructions:

// Create a class called Stack that represents a simple stack data structure.

// Implement the following methods in the Stack class:

// push(int value): Add an integer to the top of the stack.

// pop(): Remove the top element from the stack and return its value. If the stack is empty, return -1.

// peek(): Return the top element of the stack without removing it. If the stack is empty, return -1.

// isEmpty(): Return a boolean value indicating whether the stack is empty or not.

// Please make sure to handle edge cases, such as empty stack situations, properly.

// Here's a template to help you get started:

class Stack {
  stack = [];
  empty = true;
  constructor() {
    // Initialize the Stack class here
    this.stack = [];
  }

  push(value) {
    // Implement the push method
    if (this.isEmpty) {
      this.stack.push(value);
    } else {
      this.stack[this.stack.length] = value;
    }
    // console.log(this.stack)
  }

  pop() {
    // Implement the pop method
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack.pop();
  }

  peek() {
    // Implement the peek method
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    // Implement the isEmpty method
    if (this.stack.length === 0) {
      return this.empty;
    } else {
      this.empty = false;
      return this.empty;
    }
  }
}

const stack = new Stack();
stack.push(5);
stack.push(10);
console.log("Top element:", stack.peek()); // Should print 10
console.log("Removing top element:", stack.pop()); // Should print 10
console.log("Is stack empty?", stack.isEmpty()); // Should print false

// This code defines a Stack class with push, pop, peek, and isEmpty methods in JavaScript. The main part of the code demonstrates the correct behavior of the stack operations.

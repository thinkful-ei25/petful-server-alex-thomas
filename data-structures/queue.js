'use strict';

class _Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    const node = new _Node(item, null, this.last);

    if (this.last) {
      this.last.prev = node;
    }

    this.last = node;

    if (!this.first) {
      this.first = node;
    }
  }

  dequeue() {
    const node = this.first;

    if (!node) {
      throw new Error('Attempted to dequeue from an empty queue');
    }

    this.first = node.prev;

    if (this.first) {
      this.first.next = null;
    }
    if (node === this.last) {
      this.last = null;
    }

    return node.data;
  }
}

function peek(queue) {
  return queue.first ? queue.first.data : undefined;
}

function display(queue) {
  let curr = queue.first;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.prev;
  }
}

module.exports = {
  Queue,
  peek,
  display,
};

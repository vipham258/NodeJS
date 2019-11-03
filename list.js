class List {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  append(data) {
    if (this.size === 0) {
      let node = {
        next: null,
        prev: null,
        data: data
      };
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      // append to tail
      let node = {
        next: null,
        prev: this.tail,
        data: data
      };
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }

  forEach(fn) {
    let temp = this.head;
    while (temp !== null) {
      fn(temp.data);
      temp = temp.next;
    }
  }

  remove(index) {
    if (index === 0 && this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else if (this.size > 1) {
      if (index === 0) {
        this.head = this.head.next;
      } else if (index === this.size) {
        this.tail = this.tail.prev;
      } else {
        let temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
      }
      this.size--;
    }
  }

  get(index) {
    // loop through the list with a counter to find the index
    let counter = 0;
    let temp = this.head;
    while (counter !== index) {
      temp = temp.next;
      counter++;
    }
    return temp.data;
  }

  set(index, data) {
    let temp = this.get(index);
    temp.data = data;
  }
}

module.exports = List;

// const mylist = new List();
// mylist.append("hello");
// mylist.append({ wow: "this is", crazy: ["w", "t", "f", 9000] });

// mylist.forEach(data => console.log(data));
// console.log("-----------------");
// console.log(mylist.get(0));
// //console.log(mylist.get(1));

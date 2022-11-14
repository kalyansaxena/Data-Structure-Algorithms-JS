// Hash Table -
//      A hash table is a data structure that you can use to store data in key-value format with direct access to its items in constant time.
//      Hash tables are said to be associative, which means that for each key, data occurs at most once.

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        this.table[index].push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return undefined;
    } else {
      const item = bucket.find((item) => item[0] === key);
      if (item) {
        return item[1];
      }
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const item = bucket.find((item) => item[0] === key);
      if (item) {
        bucket.splice(bucket.indexOf(item), 1);
      }
    }
  }

  display() {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]) {
        console.log(index, this.table[index]);
      }
    }
  }
}

const hashTable = new HashTable(50);

hashTable.set("name", "coder");
hashTable.set("age", 25);
console.log("-----------------");
hashTable.display();

hashTable.set("mane", "programmer");
console.log("-----------------");
hashTable.display();

hashTable.remove("mane");
console.log("-----------------");
hashTable.display();

const { Readable } = require('stream');

const list = [
  "London",
  "Manchester",
  "Birmingham",
  "Edinburg",
  "Leeds",
  "Norwich",
  "Newcastle"
];

class StreamFromArray extends Readable {

  constructor(array) {
    // you can chage the object mode into binary or string(by encoding into UTF-8)
    super({ objectMode: true });
    this.array = array;
    this.index = 0;
  }

  _read() {
    if (this.index < this.array.length) {
      const chunk = {
        data: this.array[this.index],
        index: this.index
      };
      this.push(chunk);
      this.index += 1;
    } else {
      this.push(null);
    }
  }

}

const listStream = new StreamFromArray(list);

listStream.on('data', (chunk) => console.log(chunk));

listStream.on('end', () => console.log('done!'));

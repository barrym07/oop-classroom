class Marker {
  constructor(size, color, remainingInk) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;

  }
  write(word) {
    this.remainingInk = remainingInk - word.replace(/\s/g, '').length;
    return word;

  }

}

module.exports = Marker

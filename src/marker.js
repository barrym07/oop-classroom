class Marker {
  constructor(size, color, remainingInk) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;

  }
  write(word) {
    let letterCount = word.length;
    this.remainingInk -= word.replace(/\s/g, '').length;

    if (this.remainingInk < letterCount) {
      return word.slice(0, letterCount);

    } else {
      return word;
    }


  }

}

module.exports = Marker

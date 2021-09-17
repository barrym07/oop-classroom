class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.contents = [];
  }
  add(item) {
    //changing this.contents to this.content makes it work
    this.content = this.contents.push(item);
    //returning this makes it chainable
    return this;
  }
  has(item) {
    for (let element of this.contents) {
      if (element === item) {
        return true;
      }
      else {
        return false;
      }
    }

  }

}

module.exports = Room

class Computer {
  constructor(name, operatingSystem, processor, memory, graphics) {
    this.name = name;
    this.operatingSystem = operatingSystem;
    this.processor = processor;
    this.memory = memory;
    this.graphics = graphics;
  }
  power(on = false) {
    this.on = on;
    return on;
  }

}

module.exports = Computer

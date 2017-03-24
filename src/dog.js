// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Woof woof, my name is ${this.name}`
  }
}

module.exports = Dog

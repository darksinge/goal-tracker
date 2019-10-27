class Fear {
  constructor(fear = '', solution = '') {
    this.fear = fear
    this.solution = solution
  }
}

export default class AIM {
  constructor() {
    this.fears = [new Fear()]
  }

  addFear(fear, solution) {
    this.fears.push(new Fear(fear, solution))
  }

  removeFear(index) {
    this.fears.splice(index, 1)
  }
}

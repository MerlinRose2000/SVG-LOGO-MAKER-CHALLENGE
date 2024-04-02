  class Shape {
  constructor(shapeColour, text, textColour) {
    this.shapeColour = shapeColour;
    this.text = text;
    this.textColour = textColour;
  }

  generateSVG() {
    return `<svg height="250" width="400" xmlns="http://www.w3.org/2000/svg">${this.render()}${this.generateText()}</svg>`;
  }

  setShapeColour(colour) {
    this.shapeColour = colour;
  }

  setTextColour(textColour) {
    this.textcolour = textColour;
  }

  setText(text) {
    this.text = text;
  }
}
class Circle extends Shape {
  generateText() {
    return `<text x="200" y="175" text-anchor="middle" fill="${this.textColour}" font-size='70'>${this.text}</text>`;
  }
  
  render() {
    return `<circle cx="200" cy="150" r="100" fill="${this.shapeColour}" stroke-width="5"/>`;
  }
}

class Square extends Shape {
  generateText() {
    return `<text x="250" y="160" text-anchor="middle" alignment-baseline="middle" fill="${this.textColour}" font-size="70">${this.text}</text>`;
  }
  
  render() {
    return `<rect x="100" y="50" width="300" height="300" fill="${this.shapeColour}"/>`;
  }
}

class Triangle extends Shape {
  generateText() {
    const svgText = `<text x="225" y="150" text-anchor="middle" fill="${this.texColour}" font-size='55'>${this.text}</text>`;
    return svgText;
  }
  
  render() {
    const svgTriangle = `<polygon points="225,10 100,210 350,210" fill="${this.shapeColour}" />`;
    return svgTriangle;
  }
}

module.exports = { Circle, Square, Triangle };

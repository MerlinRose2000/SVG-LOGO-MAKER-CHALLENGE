const { Circle, Triangle, Square } = require('./shapes');

test('should render svg for a purple circle element', () => {
  const expectedSvg = '<circle cx="150" cy="100" r="80" fill="purple" />';

  const circle = new Circle();
  circle.setShapeColour('purple');
  const actualSvg = circle.render();
  expect('<circle cx="150" cy="100" r="80" fill="purple" />').toEqual(

    expectedSvg
  );
});

// });
describe('circle tests', () => {
  test('fillColour', () => {
    const testCircle = new Circle('red', 'ABC', 'blue');
    expect(testCircle.shapeColour).toBe('red');
  });

  test('fillColour', () => {
    const testCircle = new Circle('red', 'ABC', 'blue');
    expect(testCircle.text).toBe('ABC');
  });

  test('fillColour', () => {
    const testCircle = new Circle('red', 'ABC', 'blue');
    expect(testCircle.textColour).toBe('blue');
  });
});

describe('square tests', () => {
  test('fillColour', () => {
    const testCircle = new Square('red', 'ABC', 'blue');
    expect(testCircle.shapeColour).toBe('red');
  });

  test('fillColour', () => {
    const testCircle = new Square('red', 'ABC', 'blue');
    expect(testCircle.text).toBe('ABC');
  });

  test('fillColour', () => {
    const testCircle = new Square('red', 'ABC', 'blue');
    expect(testCircle.textColour).toBe('blue');
  });
});

describe('square tests', () => {
  test('fillColour', () => {
    const testCircle = new Triangle('red', 'ABC', 'blue');
    expect(testCircle.shapeColour).toBe('red');
  });

  test('fillColour', () => {
    const testCircle = new Triangle('red', 'ABC', 'blue');
    expect(testCircle.text).toBe('ABC');
  });

  test('fillColour', () => {
    const testCircle = new Triangle('red', 'ABC', 'blue');
    expect(testCircle.textColour).toBe('blue');
  });
});

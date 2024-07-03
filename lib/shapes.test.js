const { Triangle, Circle, Square } = require('./shapes');


function testShapeRender(shapeClass, expectedColor) {
  const testShape = new shapeClass(expectedColor, 'black', 'TEST');
  const svgContent = testShape.render();


  expect(svgContent).toContain(`fill="${expectedColor}"`);
}

describe('Shape Tests', () => {
    it('Triangle should render SVG with correct fill color', () => {
        testShapeRender(Triangle, 'blue'); 
    });
  
    it('Circle should render SVG with correct fill color', () => {
    testShapeRender(Circle, 'green'); 
    });

  it('Square should render SVG with correct fill color', () => {
    testShapeRender(Square, 'red'); 
    });
});
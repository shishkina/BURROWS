describe('CircleViewSpec', () => {
  let circle, domNode, diameter;

  beforeEach(() => {
    diameter = '10px';
    domNode = document.createElement('div');
    circle = new CircleView(domNode, diameter);
	});

  describe('#new', () => {
    it('sets the properties of a Circle', () => {
      expect(circle.el).toEqual(domNode);
    });
    it('sets the property diameter to default to "black"', () => {
      expect(circle.color).toEqual('black');
    });
  });

  describe('#render', () => {
    beforeEach(() => {
      circle.render();
    });
    it('sets className of node to circle', () => {
      expect(circle.el.className).toEqual('circle');
    });
    it('sets the border radius styling to 50%', () => {
      expect(circle.el.style.borderRadius).toEqual('50%');
    });
    it('sets the display styling to inline-block', () => {
      expect(circle.el.style.display).toEqual('inline-block');
    });
    it('sets the display styling to inline-block', () => {
      expect(circle.el.style.backgroundColor).toEqual('black');
    });
    it('sets the width styling', () => {
      expect(circle.el.style.width).toEqual(diameter);
    });
    it('sets the heigth styling', () => {
      expect(circle.el.style.height).toEqual(diameter);
    });
  });

});

class CircleView {
  constructor(domNode, diameter) {
    this.el = domNode;
    this.diameter = diameter;
    this.color = 'black';
  }
  render() {
  this.el.className = 'circle';
  this.el.style.display = 'inline-block';
  this.el.style.borderRadius = '50%';
  this.el.style.backgroundColor = this.color;
  this.el.style.width = this.diameter;
  this.el.style.height = this.diameter;
  }
}
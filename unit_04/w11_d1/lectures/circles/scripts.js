console.log('Ready to SEEE things!!!');


function projectData(d3Body, data) {

  // Any new tents?
  d3Body.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('r', '0px');

  // Place elements in the tents
  d3Body.selectAll('circle')
        .data(data)
        .transition()
        .duration(500)
        .attr('r', (circle) => circle.radius)
        .attr('cx', (circle) => circle.xLocation)
        .attr('cy', (circle) => circle.yLocation)
        .style('fill', (circle) => circle.color);

  // Any tents to remove
  d3Body.selectAll('circle')
        .data(data)
        .exit()
        .remove();

}

function randomColor() {
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  return `rgb(${r}, ${g}, ${b})`;
}

function randomCircleData() {
  const circle = {
    color: randomColor(),
    radius: `${Math.random() * 100}px`,
    xLocation: `${Math.random() * 100}%`,
    yLocation: `${Math.random() * 100}%`,
  };
  return circle;
}

function randomCircles(numberOfCircles) {
  const circles = [];
  for (let i = 0; i < numberOfCircles; i++) {
    circles.push(randomCircleData());
  }
  return circles;
}


const d3Body = d3.select('#visualization');
projectData(d3Body, randomCircles(20));

setInterval(() => {
  projectData(d3Body, randomCircles(20));
}, 500);

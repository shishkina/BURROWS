class CoordinateHelper {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  xyToIndex(x, y) {
    return y * this.width + x;
  }
  indexToXy(index){
    const y = Math.floor(index / this.width)
    const x = index - (y * this.width);
    return [x, y];
  }
  findNeighborIndices(index) {
    let x, y;
    [x, y] = this.indexToXy(index);
    const neighborLocations = this.findNeighborXYs(x, y);
    return neighborLocations.map((xy) => {
      return this.xyToIndex(xy[0], xy[1]);
    });
  }
  findNeighborXYs(locationX, locationY) {
    const leftBound = locationX - 1 >= 0 ? locationX - 1 : 0;
    const rightBound = locationX + 1 < this.width ? locationX + 1 : this.width - 1;
    const upperBound = locationY - 1 >= 0 ? locationY - 1 : 0;
    const lowerBound = locationY + 1 < this.height ? locationY + 1 : this.height - 1;

    let neighborLocations = [];
    for (let x = leftBound; x <= rightBound; x++) {
      for (let y = upperBound; y <= lowerBound; y++) {
        if ( !(locationX == x && locationY == y) ) {
          neighborLocations.push([x, y]);
        }
      }
    }
    return neighborLocations;
  }
}
